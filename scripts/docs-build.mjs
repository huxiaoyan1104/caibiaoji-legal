import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { documentationAnchor, documentationGroups } from '../site/.vitepress/documentation.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = process.argv[2] ? [process.argv[2]] : ['oss', 'pages'];
if (targets.some((target) => !['oss', 'pages'].includes(target))) throw new Error('Target must be oss or pages');

const articles = documentationGroups.flatMap((group) => group.items);
const readyCount = articles.filter((item) => item.ready).length;
const directoryNote = readyCount === articles.length
  ? `共 ${documentationGroups.length} 组、${articles.length} 篇文档，可按主题查找使用说明。`
  : `目录已确定，共 ${documentationGroups.length} 组、${articles.length} 篇文档。目前 ${readyCount} 篇已有样稿，可点击阅读。标注“待编写”的章节列出了内容范围，正文将逐页补充和审阅。`;
const directory = [
  '---\ntitle: 采标集文档目录\ncategory: 操作手册\ndescription: 采标集完整文档目录，按开始使用、数据维护、日常归档、账号权益、问题支持和协议分类。\noutline: [2, 2]\nprev: false\nnext: false\nsearch: false\n---',
  '<!-- Generated from .vitepress/documentation.mjs by docs:build. -->',
  '# 采标集文档目录',
  '<p class="lead">从安装、第一次归档，到日常使用和数据维护，按你要完成的事情查找文档。</p>',
  `::: info 文档目录\n${directoryNote}\n:::`,
  ...documentationGroups.map((group, index) => [
    `## ${group.title} {#group-${index + 1}}`,
    ...group.items.map((item) => `- <span id="${documentationAnchor(item)}"></span>${item.ready ? `[${item.title}](${item.link})` : `**${item.title}** <span class="catalog-status">待编写</span>`}  \n  ${item.summary}`),
  ].join('\n\n')),
  '\n',
].join('\n\n');
await writeFile(path.join(root, 'site/index.md'), directory);

for (const [slug, file] of [['privacy', 'PRIVACY'], ['terms', 'TERMS'], ['refund', 'REFUND']]) {
  const source = await readFile(path.join(root, 'content', `${file}.md`), 'utf8');
  const body = source.replace(/^## (\d+)\. (.+)$/gm, '## $1. $2 {#section-$1}');
  await mkdir(path.join(root, 'site', slug), { recursive: true });
  await writeFile(path.join(root, 'site', slug, 'index.md'), `---\ncategory: 协议与使用规则\nprev: false\nnext: false\n---\n\n${body}`);
}

for (const target of targets) {
  const result = spawnSync(process.execPath, [path.join(root, 'node_modules/vitepress/bin/vitepress.js'), 'build', 'site'], {
    cwd: root, stdio: 'inherit', env: { ...process.env, DOCS_TARGET: target },
  });
  if (result.status !== 0) process.exit(result.status || 1);
  if (target === 'oss') await cp(path.join(root, 'hub'), path.join(root, 'build/oss'), { recursive: true });
  const destination = target === 'oss' ? 'build/oss' : 'build/pages/caibiaoji-legal';
  await writeFile(path.join(root, destination, '.nojekyll'), '');
}
console.log('Local preview builds ready. Nothing has been deployed.');
