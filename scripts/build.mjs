import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'refresh.css', 'script.js', 'assets']) {
  await cp(resolve(root, file), resolve(output, file), { recursive: true });
}
console.log('Site preparado em dist/.');
