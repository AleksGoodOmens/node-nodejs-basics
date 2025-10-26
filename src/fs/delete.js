import { access, rm } from 'fs/promises';
import path from 'path';

const remove = async () => {
  const oldFilePath = path.join(process.cwd(), 'files/fileToRemove.txt');

  try {
    await access(oldFilePath);
    rm(oldFilePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
