const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/images/integrity-payments/resilient-logo.jpg');
const outputPath = path.join(__dirname, '../public/images/integrity-payments/resilient-logo.png');

async function removeBg() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixelCount = width * height;
  const buf = Buffer.from(data);

  // Sample the corner pixel to detect background color
  const bgR = buf[0];
  const bgG = buf[1];
  const bgB = buf[2];
  console.log(`Background color detected: rgb(${bgR}, ${bgG}, ${bgB})`);

  // Tolerance for background removal
  const tolerance = 28;

  for (let i = 0; i < pixelCount; i++) {
    const idx = i * channels;
    const r = buf[idx];
    const g = buf[idx + 1];
    const b = buf[idx + 2];

    const diffR = Math.abs(r - bgR);
    const diffG = Math.abs(g - bgG);
    const diffB = Math.abs(b - bgB);

    if (diffR <= tolerance && diffG <= tolerance && diffB <= tolerance) {
      buf[idx + 3] = 0; // fully transparent
    }
  }

  await sharp(buf, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log(`Saved transparent PNG to: ${outputPath}`);
}

removeBg().catch(console.error);
