import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const forkPath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => fork(forkPath, args);

spawnChildProcess(['arg1', 'arg2', 'arg3']);
