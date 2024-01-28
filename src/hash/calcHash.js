import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  try {
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileContents = await readFile(filePath, { encoding: 'utf8' });
    const hash = createHash('sha256').update(fileContents).digest('hex');

    console.log(hash);
  } catch (e) {
    console.error(e);
  }
};

await calculateHash();
