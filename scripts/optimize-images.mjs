import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync, renameSync, unlinkSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = 'public/images';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
  const files = readdirSync(INPUT_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const inputPath = join(INPUT_DIR, file);
    const name = basename(file, extname(file));
    const outputPath = join(INPUT_DIR, `${name}.webp`);

    const originalSize = statSync(inputPath).size;
    totalOriginal += originalSize;

    try {
      await sharp(inputPath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const newSize = statSync(outputPath).size;
      totalOptimized += newSize;

      const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
      console.log(`✓ ${file} → ${name}.webp (${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB, -${reduction}%)`);

      // Remove original jpg
      unlinkSync(inputPath);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
      totalOptimized += originalSize;
    }
  }

  console.log(`\n=== TOTAL ===`);
  console.log(`Original: ${(totalOriginal/1024/1024).toFixed(1)}MB`);
  console.log(`Optimized: ${(totalOptimized/1024/1024).toFixed(1)}MB`);
  console.log(`Saved: ${((1 - totalOptimized/totalOriginal) * 100).toFixed(1)}%`);
}

optimizeImages();
