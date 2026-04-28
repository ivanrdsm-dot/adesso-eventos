import sharp from 'sharp';

const INPUT = 'public/adesso-logo-original.jpeg';

// Make white/near-white pixels transparent
async function removeWhiteBackground(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Iterate over RGBA pixels and set alpha=0 for near-white
  const threshold = 230; // pixels with R,G,B all >= 230 become transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= threshold && g >= threshold && b >= threshold) {
      // Calculate how "white" the pixel is — fully white = fully transparent,
      // less white = partial transparency for smooth edges
      const minVal = Math.min(r, g, b);
      const fade = (minVal - threshold) / (255 - threshold);
      data[i + 3] = Math.max(0, Math.floor(255 * (1 - fade) - 50));
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

async function run() {
  const metadata = await sharp(INPUT).metadata();
  console.log(`Original: ${metadata.width}x${metadata.height}`);

  const sourceBuffer = await sharp(INPUT).toBuffer();

  // Full logo with text - transparent background
  const fullProcessed = await removeWhiteBackground(sourceBuffer);
  await fullProcessed
    .resize(800, null, { withoutEnlargement: false })
    .png({ compressionLevel: 9 })
    .toFile('public/adesso-logo-full.png');
  console.log('✓ adesso-logo-full.png');

  // Also save as WebP with alpha (smaller file size)
  const fullProcessed2 = await removeWhiteBackground(sourceBuffer);
  await fullProcessed2
    .resize(800, null, { withoutEnlargement: false })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile('public/adesso-logo-full.webp');
  console.log('✓ adesso-logo-full.webp (transparent)');

  // Icon only - star symbol (no text)
  const cropHeight = Math.floor(metadata.height * 0.62);
  const cropTop = Math.floor(metadata.height * 0.18);
  const cropWidth = metadata.width;

  const cropped = await sharp(INPUT)
    .extract({ left: 0, top: cropTop, width: cropWidth, height: cropHeight })
    .toBuffer();
  const iconProcessed = await removeWhiteBackground(cropped);
  await iconProcessed
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile('public/adesso-icon.png');
  console.log('✓ adesso-icon.png');

  const iconProcessed2 = await removeWhiteBackground(cropped);
  await iconProcessed2
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile('public/adesso-icon.webp');
  console.log('✓ adesso-icon.webp (transparent)');

  // Compact version for navbar (icon + ADESSO text)
  const navTop = Math.floor(metadata.height * 0.15);
  const navHeight = Math.min(Math.floor(metadata.height * 0.70), metadata.height - navTop);

  const compactCropped = await sharp(INPUT)
    .extract({ left: 0, top: navTop, width: cropWidth, height: navHeight })
    .toBuffer();
  const compactProcessed = await removeWhiteBackground(compactCropped);
  await compactProcessed
    .resize(600, null, { withoutEnlargement: false })
    .png({ compressionLevel: 9 })
    .toFile('public/adesso-logo-compact.png');
  console.log('✓ adesso-logo-compact.png');

  const compactProcessed2 = await removeWhiteBackground(compactCropped);
  await compactProcessed2
    .resize(600, null, { withoutEnlargement: false })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile('public/adesso-logo-compact.webp');
  console.log('✓ adesso-logo-compact.webp (transparent)');

  console.log('\nAll logos generated with transparent backgrounds');
}

run().catch(console.error);
