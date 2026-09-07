import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requiredFiles = [
  'index.html',
  'privacy/index.html',
  'terms/index.html',
  'refund/index.html',
  'content/PRIVACY.md',
  'content/TERMS.md',
  'content/REFUND.md',
  'assets/styles.css',
  '.nojekyll',
];

for (const file of requiredFiles) {
  await access(path.join(projectRoot, file));
}

const pages = ['index.html', 'privacy/index.html', 'terms/index.html', 'refund/index.html'];
for (const page of pages) {
  const html = await readFile(path.join(projectRoot, page), 'utf8');
  if (!html.includes('<html lang="zh-CN">') || !html.includes('support@fun8.top')) {
    throw new Error(`${page} 缺少语言或联系信息`);
  }
  if (/https?:\/\/[^\s"']+\.(?:js|css)/i.test(html)) {
    throw new Error(`${page} 包含外部脚本或样式依赖`);
  }
}

for (const slug of ['privacy', 'terms', 'refund']) {
  const html = await readFile(path.join(projectRoot, slug, 'index.html'), 'utf8');
  if (!html.includes('2026-09-07') || !html.includes('生效日期：2026年9月7日')) {
    throw new Error(`${slug} 页面版本或生效日期不正确`);
  }
}

console.log('All GitHub Pages compatibility checks passed.');
