import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js');

const performCalculations = async () => {
  const initialCount = 10;

  const workers = cpus().map((_, coreIndex) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: initialCount + coreIndex,
      });

      const handleSuccess = (data) => resolve({ status: 'resolved', data });
      const handleError = () => resolve({ status: 'error', data: null });

      worker.on('message', handleSuccess);
      worker.on('error', handleError);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  });

  console.log(await Promise.all(workers));
};

await performCalculations();
