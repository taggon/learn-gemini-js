import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync } from 'fs';

// Get the current file's directory with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the absolute path to the project root
const projectRoot = resolve(__dirname, '..');

// Get the absolute path to the volt.jpeg file
const imagePath = join(projectRoot, 'assets', 'volt.jpeg');

// Check if the file exists
if (existsSync(imagePath)) {
  console.log('Image exists at path:');
  console.log(imagePath);
} else {
  console.error('Image not found at path:');
  console.error(imagePath);
}

// Export the path for ES modules
export const voltImagePath = imagePath;