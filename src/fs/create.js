import { access, writeFile } from 'fs/promises';
import path from 'path';

const folderPath = path.join(process.cwd(), 'files');
const filePath = path.join(folderPath, 'fresh.txt');

const create = async () => {
  try {
    await access(filePath);
  } catch {
    await writeFile(filePath, 'I am fresh and young');
    return;
  }
  throw new Error('FS operation failed');
};

create();
