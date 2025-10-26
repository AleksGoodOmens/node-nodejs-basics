import { access, mkdir, readdir, copyFile } from 'fs/promises';
import path from 'path';

const initialFolderPath = path.join(process.cwd(), 'files');
const copiedFolderPath = path.join(process.cwd(), 'files_copy');

const copy = async () => {
  try {
    await access(initialFolderPath);

    try {
      await access(copiedFolderPath);
      throw new Error('FS operation failed');
    } catch {
      await mkdir(copiedFolderPath);
      const paths = await readdir(initialFolderPath);
      paths.map((file) => copyFile(`${initialFolderPath}/${file}`, `${copiedFolderPath}/${file}`));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
