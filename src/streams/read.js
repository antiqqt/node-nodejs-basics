import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { stdout } = process;

const read = async () => {
  const rs = createReadStream(join(__dirname, 'files', 'fileToRead.txt'));
  rs.pipe(stdout);
};

await read();
