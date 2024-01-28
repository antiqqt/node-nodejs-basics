import { unlink  } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorText = 'FS operation failed';

const remove = async () => {
    try {
        const path = join(__dirname, 'files', 'fileToRemove.txt');
        await unlink(path);
    } catch {
        try {
            throw new Error(errorText);
        } catch (error) {
            console.error(error);
        }
    }
};

await remove();