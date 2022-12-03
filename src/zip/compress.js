import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  try {
    const gzip = createGzip();
    const src = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const dest = createWriteStream(join(__dirname, 'files', 'archive.gz'));

    await pipeline(src, gzip, dest);
    console.log('File has been compressed successfully.');
  } catch (e) {
    console.error(e);
  }
};

await compress();
