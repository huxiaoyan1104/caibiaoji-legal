import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const documents = [
  {
    slug: 'privacy',
    source: 'PRIVACY.md',
    title: '隐私政策',
    description: '了解采标集处理哪些信息、用于什么目的，以及如何提出个人信息相关请求。',
  },
  {
    slug: 'terms',
    source: 'TERMS.md',
    title: '服务协议',
    description: '了解采标集的服务范围、账号与权益规则、使用边界和双方责任。',
  },
  {
    slug: 'refund',
    source: 'REFUND.md',
    title: '退款协议',
    description: '了解付费权益的生效时点、退款条件、申请方式和权益处理规则。',
  },
];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderInline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/support@fun8\.top/g, '<a href="mailto:support@fun8.top">support@fun8.top</a>');
}

function sectionId(title, index) {
  const number = title.match(/^(\d+)/)?.[1];
  return number ? `section-${number}` : `section-${index + 1}`;
}

function parseMarkdown(markdown) {
  const blocks = markdown.trim().split(/\n\s*\n/);
  let title = '';
  let metadata = '';
  const sections = [];
  const html = [];

  for (const block of blocks) {
    if (block.startsWith('# ')) {
      title = block.slice(2).trim();
      continue;
    }
    if (block.startsWith('> ')) {
      metadata = block.replace(/^>\s?/, '').trim();
      continue;
    }
    if (block.startsWith('## ')) {
      const heading = block.slice(3).trim();
      const id = sectionId(heading, sections.length);
      sections.push({ id, heading });
      html.push(`<h2 id="${id}">${renderInline(heading)}</h2>`);
      continue;
    }
    html.push(`<p>${renderInline(block).replaceAll('\n', '<br>')}</p>`);
  }

  return { title, metadata, sections, body: html.join('\n') };
}

function nav(current = '') {
  return documents
    .map((document) => {
      const currentAttribute = document.slug === current ? ' aria-current="page"' : '';
      return `<a href="../${document.slug}/"${currentAttribute}>${document.title}</a>`;
    })
    .join('\n');
}

function header(current = '') {
  return `<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="../"><span class="brand-mark" aria-hidden="true">采</span><span>采标集协议与政策</span></a>
    <nav class="site-nav" aria-label="协议导航">${nav(current)}</nav>
  </div>
</header>`;
}

function footer(prefix = '..') {
  return `<footer class="site-footer">
  <div class="site-footer-inner">
    <span>© 2026 采标集</span>
    <span>联系邮箱：<a href="mailto:support@fun8.top">support@fun8.top</a></span>
  </div>
</footer>`;
}

function documentPage(document, parsed) {
  const toc = parsed.sections
    .map((section) => `<li><a href="#${section.id}">${renderInline(section.heading)}</a></li>`)
    .join('\n');
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(document.description)}">
  <title>${document.title}｜采标集</title>
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
  ${header(document.slug)}
  <main class="page-shell">
    <article class="document">
      <h1>${renderInline(parsed.title)}</h1>
      <p class="document-meta">${renderInline(parsed.metadata)}</p>
      <p class="document-intro">${escapeHtml(document.description)}</p>
      ${parsed.body}
    </article>
    <nav class="toc" aria-label="本文目录">
      <p class="toc-title">本文目录</p>
      <ol>${toc}</ol>
    </nav>
  </main>
  ${footer()}
</body>
</html>
`;
}

function homePage() {
  const cards = documents
    .map(
      (document, index) => `<a class="document-card" href="${document.slug}/">
  <span class="card-index">0${index + 1}</span>
  <h2>${document.title}</h2>
  <p>${document.description}</p>
  <span class="card-action">查看全文 →</span>
</a>`,
    )
    .join('\n');
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="查看采标集隐私政策、服务协议和退款协议。">
  <title>协议与政策｜采标集</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="./"><span class="brand-mark" aria-hidden="true">采</span><span>采标集协议与政策</span></a>
      <nav class="site-nav" aria-label="协议导航">
        <a href="privacy/">隐私政策</a>
        <a href="terms/">服务协议</a>
        <a href="refund/">退款协议</a>
      </nav>
    </div>
  </header>
  <main class="home-main">
    <section class="hero">
      <span class="eyebrow">CAIBIAOJI LEGAL</span>
      <h1>协议与政策</h1>
      <p>在购买、注册或使用采标集前，请阅读与保存适用于你的协议。各协议的版本、更新日期和生效日期见对应正文。</p>
    </section>
    <section class="document-grid" aria-label="协议列表">${cards}</section>
  </main>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <span>© 2026 采标集</span>
      <span>联系邮箱：<a href="mailto:support@fun8.top">support@fun8.top</a></span>
    </div>
  </footer>
</body>
</html>
`;
}

await writeFile(path.join(projectRoot, 'index.html'), homePage(), 'utf8');
for (const document of documents) {
  const markdown = await readFile(path.join(projectRoot, 'content', document.source), 'utf8');
  const parsed = parseMarkdown(markdown);
  await writeFile(path.join(projectRoot, document.slug, 'index.html'), documentPage(document, parsed), 'utf8');
}

console.log('Built index.html and three agreement pages.');
