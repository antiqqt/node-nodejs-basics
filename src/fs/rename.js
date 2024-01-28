import { rename as fsRename, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorText = 'FS operation failed';
const NoEntErrorCode = 'ENOENT';

const rename = async () => {
    try {
        const pathToWrong = join(__dirname, 'files', 'wrongFilename.txt');
        const pathToCorrect = join(__dirname, 'files', 'properFilename.md');

        try {
            const correctFileExists = !(await access(pathToCorrect));
            if (correctFileExists) throw new Error();
        } catch (e) {
            if (e.code === NoEntErrorCode) {
                await fsRename(pathToWrong, pathToCorrect);
                return;
            }
            throw e;
        }
    } catch {
        try {
            throw new Error(errorText);
        } catch (e) {
            console.error(e);
        }
    }
};

await rename();