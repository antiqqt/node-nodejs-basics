import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { stdin } = process;

const write = async () => {
  const ws = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
  stdin.pipe(ws);
};

await write();
