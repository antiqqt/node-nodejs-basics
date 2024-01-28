import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  try {
    const gunzip = createGunzip();
    const src = createReadStream(join(__dirname, 'files', 'archive.gz'));
    const dest = createWriteStream(
      join(__dirname, 'files', 'fileToCompress.txt')
    );

    await pipeline(src, gunzip, dest);
    console.log('File has been decompressed successfully.');
  } catch (e) {
    console.error(e);
  }
};

await decompress();
