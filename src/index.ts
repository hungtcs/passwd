import { readFile } from 'fs';
import { promisify } from 'util';

const promisifyReadFile = promisify(readFile);

export async function passwd() {
  const content = await promisifyReadFile('/etc/passwd',{ encoding: 'utf-8' });
  const lines = content.trim().split('\n');
  return lines.map(line => {
    const [ user, _, uid, gid, gecos, home, shell ] = line.split(':');
    return { user, uid, gid, gecos, home, shell };
  });
}
