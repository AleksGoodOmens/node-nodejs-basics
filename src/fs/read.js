import { access, readdir, readFile } from 'fs/promises';
import path from 'path';

const read = async () => {
  const filesFolderPath = path.join(process.cwd(), 'files');
  const fileToReadPath = path.join(filesFolderPath, 'fileToRead.txt');
  try {
    await access(fileToReadPath);
    const fileData = await readFile(fileToReadPath, { encoding: 'utf-8' });
    console.log(fileData);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
