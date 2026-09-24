---
title: 安装采标集
description: 在常用浏览器中完成安装，找到采标集入口，并打开工作台。
category: 安装、升级与数据维护
updatedAt: '2026-09-23'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 第一次归档, link: /manual/first-archive/ }
next: { text: 安全更新插件, link: /manual/update/ }
---

<script setup>
import { withBase } from 'vitepress';
import WorkbenchOpenDemo from '../../.vitepress/theme/WorkbenchOpenDemo.vue';
import CrxInstallDemo from '../../.vitepress/theme/CrxInstallDemo.vue';
</script>

# 安装采标集

<p class="lead">本篇会带你在常用浏览器中安装<span class="product-name product-name--punctuation product-name--after-text">采标集</span>，找到插件入口，并打开工作台。接下来，请在电脑上打开你平时查看采购公告的浏览器，按对应的步骤完成安装。</p>

## 1. 选择浏览器，打开安装入口 {#choose-browser}

<span class="product-name">采标集</span>安装在浏览器中。你准备用哪个浏览器查看和整理公告，就在那个浏览器中打开对应的安装入口。

<div class="install-browser-table">

| 浏览器 | 安装入口 |
| --- | --- |
| Chrome（Windows / macOS） | 打开 [Chrome 应用商店中的采标集页面](https://chromewebstore.google.com/detail/采标集｜政府采购公开招标公告归档助手/bhfmgdmpfpoafgnekicnkphgjfgjnofj)。 |
| Microsoft Edge（Windows / macOS） | 打开 [Edge 加载项商店中的采标集页面](https://microsoftedge.microsoft.com/addons/detail/采标集｜政府采购公开招标公告归档助手/lopklgegalnpdbhnhfkbbenodnmmdada)。 |
| 360 安全浏览器（Windows） | <a :href="withBase('/downloads/caibiaoji-1.5.0-360-extension-center.crx')" download>下载 360 离线安装包</a>（v1.5.0，约 2.13 MiB）。 |

</div>

使用 Chrome 或 Edge 时，打开插件详情页，核对名称为 **“采标集｜政府采购公开招标公告归档助手”**，再继续安装。使用 360 安全浏览器时，先将上面的离线安装包保存到电脑，再按下方步骤安装。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **已经装过：** 如果在当前浏览器的扩展列表中能找到<span class="product-name product-name--punctuation product-name--after-text">采标集</span>，可以直接跳到下方[找到并打开插件](#find-extension)，无需重复安装。
- **之前通过文件夹安装：** 先保留原来的安装目录和插件，不要为了改装商店版而直接卸载，以免影响本地记录。相关说明见[本地数据与文件保存](/manual/local-data/)。

</details>

## 2. 按浏览器提示完成安装 {#install-extension}

找到对应的浏览器后，跟着这一组步骤完成安装。Chrome 和 Edge 从插件详情页安装，360 安全浏览器使用刚下载的 CRX 安装包。

### Chrome

1. 点击 **“添加至 Chrome”**。
2. 在弹出的确认框中查看所需权限，确认后点击 **“添加扩展程序”**。
3. 等待浏览器提示安装完成，再进入下一步查找插件入口。

<figure class="doc-shot extension-entry-shot">
  <a :href="withBase('/images/chrome-install-confirm.png')" target="_blank" rel="noopener" aria-label="查看 Chrome 安装确认框大图">
    <img src="/images/chrome-install-confirm.png" alt="Chrome 的安装确认框，显示采标集名称、网站数据和下载管理权限，以及 Add extension 按钮。" width="1010" height="570" loading="lazy" />
  </a>
  <figcaption><span>Chrome（macOS）安装确认框。图中的“Add extension”对应“添加扩展程序”。</span><span>点击图片可查看大图。</span></figcaption>
</figure>

### Microsoft Edge

1. 点击 **“获取”**。
2. 在弹出的确认框中查看所需权限，确认后点击 **“添加扩展”**。
3. 等待浏览器提示扩展已添加，再进入下一步查找插件入口。

<figure class="doc-shot extension-entry-shot">
  <a :href="withBase('/images/edge-install-confirm.png')" target="_blank" rel="noopener" aria-label="查看 Edge 安装确认框大图">
    <img src="/images/edge-install-confirm.png" alt="Edge 的安装确认框，显示采标集名称、网站数据和下载管理权限，以及 Add Extension 按钮。" width="1010" height="570" loading="lazy" />
  </a>
  <figcaption><span>Edge（macOS）安装确认框。图中的“Add Extension”对应“添加扩展”。</span><span>点击图片可查看大图。</span></figcaption>
</figure>

### 360 安全浏览器 {#install-360}

下载完成后，保留安装包的 `.crx` 格式，按下面的顺序安装：

1. 在 360 安全浏览器地址栏输入 `se://extensions/`，按回车，打开 **“扩展程序”** 页面。
2. 确认页面右上角的 **“开发者模式”** 已开启。
3. 打开安装包所在的文件夹，将 `caibiaoji-1.5.0-360-extension-center.crx` 拖到“扩展程序”页面的空白处，再松开鼠标。
4. 在弹出的确认框中核对插件名称和所需权限，然后点击 **“添加”**。
5. 等待列表中出现<span class="product-name product-name--after-text">采标集</span>，并确认右下角的开关已开启。接下来，就可以打开工作台了。

<CrxInstallDemo />

<figure class="doc-shot extension-entry-shot">
  <a :href="withBase('/images/360-install-confirm.png')" target="_blank" rel="noopener" aria-label="查看 360 安装确认框大图">
    <img src="/images/360-install-confirm.png" alt="Windows 360 安全浏览器的安装确认框，显示采标集名称、所需权限和绿色添加按钮。" width="1060" height="580" loading="lazy" />
  </a>
  <figcaption><span>360（Windows）安装确认框：核对名称和权限后，点击“添加”。</span><span>点击图片可查看大图。</span></figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- **360 离线安装包的后续更新：** 本页会标明可下载的版本。需要更新时，请先查看对应的更新说明；暂时不要依赖自动更新，也不要先卸载已安装的插件。更新方式不清楚时，可[联系技术支持](/manual/support/)。
- **商店页面打不开或搜索不到：** 可以[联系技术支持](/manual/support/)，说明使用的浏览器和遇到的提示，获取对应的安装帮助。
- **提示浏览器版本不支持：** 先通过浏览器自身的更新入口完成更新，再按对应浏览器的步骤重试安装。
- **提示由组织管理、禁止安装：** 请联系电脑或浏览器的管理员，确认是否允许安装此扩展。

</details>

## 3. 找到并打开插件 {#find-extension}

安装完成后，先打开一个普通网页，例如准备归档的公告详情页。接着，点击浏览器右上角的蓝色<span class="product-name product-name--after-text">采标集</span>图标，打开工作台。

如果工具栏还没有显示图标，可以从扩展列表进入：

- **Chrome / Edge：** 点击地址栏右侧的 **“扩展程序”或“扩展”（拼图图标）**，在列表中选择<span class="product-name product-name--punctuation product-name--after-text">采标集</span>。
- **360 安全浏览器：** 点击工具栏的扩展按钮，打开扩展管理器，再找到并打开<span class="product-name product-name--punctuation product-name--after-text">采标集</span>。

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/chrome-extension-entry.png')" target="_blank" rel="noopener" aria-label="查看 Chrome 工具栏与扩展菜单入口截图原图">
    <img src="/images/chrome-extension-entry.png" alt="Chrome 浏览器右上角的蓝色采标集图标，以及扩展菜单中的采标集条目。" width="650" height="444" loading="lazy" />
    <span class="entry-marker entry-marker--toolbar" aria-hidden="true">1</span>
    <span class="entry-marker entry-marker--menu" aria-hidden="true">2</span>
  </a>
  <figcaption><span>① 工具栏入口　② 扩展菜单入口</span><span>图中为 Chrome 示例。点击图片可查看大图。</span></figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- **以后想更快打开：** Chrome 用户可以在扩展列表中，点击<span class="product-name product-name--after-text">采标集</span>右侧的图钉，将图标固定到工具栏。未固定时，仍可从扩展列表打开。
- **列表里有插件，但已停用：** 在浏览器的扩展管理页面找到<span class="product-name product-name--punctuation product-name--after-text">采标集</span>，将其切换为启用，再回到网页尝试。Chrome 可在地址栏输入 `chrome://extensions`，Edge 可输入 `edge://extensions`；360 用户可从工具栏进入扩展管理器。
- **当前停留在商店或浏览器设置页：** 先切换到普通网页，再点击插件图标。这些特殊页面可能限制扩展运行。

</details>

## 4. 确认工作台已打开，开始第一次归档 {#check-installation}

点击图标后，如果能看到<span class="product-name product-name--after-text">采标集</span>工作台和当前页面的状态说明，就说明插件已安装，并且能够正常打开。首次使用时，工作台还会提供 **“登录 / 注册”** 入口。

<WorkbenchOpenDemo />

<details class="custom-block details" open>
<summary>补充说明</summary>

- **工作台的显示位置有所不同：** 工作台可能出现在浏览器侧边栏中，也可能以网页内面板呈现；两种方式都可以作为操作入口。
- **工作台已打开，但当前页面不能归档：** 页面是否可归档取决于公告站点和页面类型，并不等于没有安装成功。请先按[第一次归档的准备说明](/manual/first-archive/#before-you-start)打开已支持的公告详情页。
- **打开后没有自动归档：** 打开工作台只会显示操作入口，归档仍需由你主动点击 **“一键归档下载”** 发起。

</details>

到这里，安装就完成了。接下来，请跟着[**第一次归档**](/manual/first-archive/)中的操作步骤，准备公告详情页、完成登录，生成并查看你的第一份 ZIP 归档包。
