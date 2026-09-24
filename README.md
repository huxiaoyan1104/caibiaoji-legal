# 采标集文档站

本仓库保存采标集的操作手册、使用说明与三份正式协议，六组共二十篇文档。由同一份源码生成 GitHub Pages 和阿里云 OSS 两份静态网站。

## 源码目录

- `site/manual/`：操作手册与使用说明。
- `site/.vitepress/`：站点配置、目录和主题。
- `site/public/`：公开图片、动图及安装包。
- `content/`：已确认的隐私政策、服务协议与退款协议 Markdown；构建时生成对应文档页面。
- `hub/`：国内文档中心的根首页。
- `scripts/docs-build.mjs`：完整文档站构建脚本。
- `.github/workflows/docs-pages.yml`：GitHub Pages 手动发布工作流。

三份协议版本为 2026-09-08，更新日期与生效日期沿用 2026 年 9 月 8 日。2026 年 9 月 15 日同步已确认的最新协议文案，同步日期不替代协议生效日期。修改协议时应更新 `content/` 中的确认稿，再重新构建。

## 本地构建与输出

使用 Node.js 22，在仓库根目录执行：

```bash
npm ci
npm run docs:build
```

| 输出目录 | 用途 |
| --- | --- |
| `build/pages/caibiaoji-legal/` | GitHub Pages 站点根目录 |
| `build/oss/` | 阿里云 OSS Bucket 根目录，包含文档中心和 `caibiaoji/` 子站 |

两个输出目录均为构建产物，不建立独立 Git 仓库，不随源码提交。`node_modules/` 同样不提交。

## GitHub Pages 发布

1. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**，自定义域名留空。
2. 将网站源码和工作流提交并推送到 `main`。
3. 打开 **Actions → Publish docs → Run workflow**，选择 `main` 并运行。
4. 等待 `build` 和 `deploy` 均成功，再打开网站进行验收。

工作流只由手动操作触发；推送源码后还需要运行上述工作流。上传目录为 `build/pages/caibiaoji-legal/`，不要改成其上级目录。

访问入口：[采标集文档](https://huxiaoyan1104.github.io/caibiaoji-legal/)。三份协议继续使用 `/privacy/`、`/terms/`、`/refund/` 路径。构建产物根目录包含 `404.html`。

## OSS 发布

将 `build/oss/` **里面的内容**上传到文档 Bucket 根目录，保留子目录。国内地址规划为 `https://docs.fun8.top/`，采标集文档位于 `/caibiaoji/`。

在 OSS 静态网站托管中配置默认首页 `index.html`、子目录首页和错误页 `caibiaoji/404.html`，错误响应使用 HTTP 404。完成自定义域名、DNS 和 HTTPS 配置后，再验证实际访问结果。

## 上线验收

- 文档目录、二十篇文章和三份协议可以打开，刷新文章页面仍正常。
- 图片、动图、安装包下载和文档搜索可用。
- 不存在的地址返回 HTTP 404，并显示返回文档首页的入口。
- 两端分别记录发布提交和验收结果，源码推送成功不等于部署成功。

## 历史协议站

根目录已有的 `index.html`、`privacy/`、`terms/`、`refund/` 以及旧 `npm run build`／`npm run check` 属于原协议站。完整文档站使用上面的 `npm run docs:build` 与 Actions 发布流程。

公开源码与网站产物不包含内部评审记录、订单、账号、密钥或测试证据。
