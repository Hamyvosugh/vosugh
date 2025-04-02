// noise-generator.js
// This is a node script to generate a noise pattern image
// Run with: node noise-generator.js

const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 200x200 canvas for the noise pattern
const width = 200;
const height = 200;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill with transparent black
ctx.fillStyle = 'rgba(0, 0, 0, 0)';
ctx.fillRect(0, 0, width, height);

// Generate noise
const imageData = ctx.getImageData(0, 0, width, height);
const data = imageData.data;

for (let i = 0; i < data.length; i += 4) {
  // Random grayscale value
  const value = Math.floor(Math.random() * 40); // Low intensity noise
  
  // Apply to all RGB channels
  data[i] = value;     // R
  data[i + 1] = value; // G
  data[i + 2] = value; // B
  data[i + 3] = 5;     // A - Very subtle opacity
}

ctx.putImageData(imageData, 0, 0);

// Output as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/noise.png', buffer);

console.log('Noise pattern created and saved to ./public/noise.png');

/*
Installation instructions:
1. npm install canvas
2. Create the 'public' directory if it doesn't exist
3. Run the script: node noise-generator.js
4. The noise.png will be created in the public directory
*/