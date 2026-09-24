import { defineConfig } from 'vitepress';
import path from 'node:path';
import { documentationAnchor, documentationGroups } from './documentation.mjs';

const domestic = process.env.DOCS_TARGET !== 'pages';
const base = domestic ? '/caibiaoji/' : '/caibiaoji-legal/';

export default defineConfig({
  lang: 'zh-CN',
  title: '采标集文档',
  description: '采标集操作手册、安装更新、本地数据维护与使用协议。',
  base,
  outDir: path.resolve(domestic ? 'build/oss/caibiaoji' : 'build/pages/caibiaoji-legal'),
  cleanUrls: false,
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: `${base}brand.png` }],
  ],
  themeConfig: {
    logo: '/brand.png',
    siteTitle: '采标集文档',
    domestic,
    nav: [
      { text: '手册目录', link: '/', activeMatch: '^/$' },
      { text: '协议', link: '/privacy/', activeMatch: '/(privacy|terms|refund)/' },
      { text: '技术支持', link: '/manual/support/' },
    ],
    sidebar: documentationGroups.map((group) => ({
      text: group.title,
      collapsed: false,
      items: group.items.map((item) => item.ready
        ? { text: item.title, link: item.link }
        : { text: `${item.title}<span class="nav-draft">待编写</span>`, link: `/#${documentationAnchor(item)}` }),
    })),
    outline: { level: [2, 3], label: '本页目录' },
    sidebarMenuLabel: '文档菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    skipToContentLabel: '跳转到正文',
    docFooter: { prev: '上一篇', next: '下一篇' },
    notFound: { title: '没有找到这篇文档', quote: '地址可能已经改变，你可以从操作手册重新查找。', linkText: '返回文档首页', linkLabel: '返回文档首页' },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize(text) {
              return Array.from(new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text))
                .filter((part) => part.isWordLike).map((part) => part.segment.toLowerCase());
            },
          },
          searchOptions: { prefix: true, fuzzy: false, combineWith: 'AND' },
        },
        locales: { root: { translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索采标集文档' },
          modal: {
            displayDetails: '显示摘要', resetButtonTitle: '清空搜索', backButtonTitle: '关闭搜索', noResultsText: '没有找到相关文档',
            footer: { selectText: '选择', selectKeyAriaLabel: '回车', navigateText: '切换', navigateUpKeyAriaLabel: '上箭头', navigateDownKeyAriaLabel: '下箭头', closeText: '关闭', closeKeyAriaLabel: 'Esc' },
          },
        } } },
      },
    },
  },
});
