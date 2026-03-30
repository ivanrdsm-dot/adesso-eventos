import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const DIR = 'public/logos';

async function run() {
  const files = readdirSync(DIR).filter(f => /\.png$/i.test(f));
  let saved = 0;
  for (const file of files) {
    const input = join(DIR, file);
    const name = basename(file, extname(file));
    const output = join(DIR, `${name}.webp`);
    const orig = statSync(input).size;
    await sharp(input).resize(400, null, { withoutEnlargement: true }).webp({ quality: 85 }).toFile(output);
    const newSize = statSync(output).size;
    saved += orig - newSize;
    unlinkSync(input);
  }
  console.log(`Optimized ${files.length} logos. Saved ${(saved/1024/1024).toFixed(1)}MB`);
}
run();
