import { access, rename as syncRename } from 'fs/promises';
import path from 'path';

const rename = async () => {
  const oldFilePath = path.join(process.cwd(), 'files/wrongFilename.txt');
  const newFilePath = path.join(process.cwd(), 'files/properFilename.md');

  try {
    try {
      await access(oldFilePath);
    } catch (error) {
      throw new Error('FS operation failed');
    }

    try {
      await access(newFilePath);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    await syncRename(oldFilePath, newFilePath);
  } catch (error) {
    if (error.message === 'FS operation failed') {
      throw error;
    }
    throw new Error('FS operation failed');
  }
};

await rename();
