const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/integrity-payments/resilient-logo.png');

async function makeFavicon() {
  // Create a 64x64 favicon PNG (browsers use this for favicon)
  await sharp(inputPath)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/images/integrity-payments/favicon-64.png'));

  // Also create a 32x32 version
  await sharp(inputPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/images/integrity-payments/favicon-32.png'));

  console.log('Favicon PNGs created successfully!');
}

makeFavicon().catch(console.error);
