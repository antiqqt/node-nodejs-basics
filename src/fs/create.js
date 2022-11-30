import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorText = 'FS operation failed';

const create = async () => {
    try {
        const path = join(__dirname, 'files', 'fresh.txt');
        await writeFile(path, 'I am fresh and young', { flag: 'wx' });
    } catch {
        try {
            throw new Error(errorText);
        } catch (error) {
            console.error(error);
        }
    }
};

await create();
