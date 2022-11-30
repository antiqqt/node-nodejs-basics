import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorText = 'FS operation failed';

const copy = async () => {
    try {
        const pathToDestDir = join(__dirname, 'files_copy');
        const pathToSrcDir = join(__dirname, 'files');

        const entries = await readdir(pathToSrcDir);
        await mkdir(pathToDestDir);
        
        for (const entry of entries) {
            const src = join(pathToSrcDir, entry);
            const dest = join(pathToDestDir, entry);
            copyFile(src, dest);
        }
    } catch {
        try {
            throw new Error(errorText);
        } catch (error) {
            console.error(error);
        }
    }
};

copy();
