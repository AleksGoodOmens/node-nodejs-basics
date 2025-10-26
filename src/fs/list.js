import { access, readdir } from 'fs/promises';
import path from 'path';

const list = async () => {
  const filesFolderPath = path.join(process.cwd(), 'files');
  try {
    await access(filesFolderPath);
    const files = await readdir(filesFolderPath);
    files.forEach((file) => console.log(file));
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
