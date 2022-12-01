import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorText = 'FS operation failed';

const list = async () => {
    try {
        const path = join(__dirname, 'files');
        const entries = await readdir(path);
        console.log(entries);
    } catch {
        try {
            throw new Error(errorText);
        } catch (error) {
            console.error(error);
        }
    }
};

await list();
