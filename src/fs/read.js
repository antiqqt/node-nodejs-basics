import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorText = 'FS operation failed';

const read = async () => {
    try {
        const path = join(__dirname, 'files', 'fileToRead.txt');
        const contents = await readFile(path, { encoding: 'utf-8' });
        console.log(contents);
    } catch {
        try {
            throw new Error(errorText);
        } catch (error) {
            console.error(error);
        }
    }
};

await read();
