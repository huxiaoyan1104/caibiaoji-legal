---
title: 安全更新插件
description: 按当前安装方式更新采标集，并检查版本、工作台和已有归档记录。
category: 安装、升级与数据维护
updatedAt: '2026-09-23'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 安装采标集, link: /manual/install/ }
next: { text: 本地数据与文件保存, link: /manual/local-data/ }
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 安全更新插件

<p class="lead">更新<span class="product-name product-name--after-text">采标集</span>前，先确认没有正在进行的归档任务，再按当前的安装方式获取新版本。本篇会带你完成更新前的准备、找到对应的更新入口，并在更新后检查工作台和已有归档记录，方便你继续处理下一份公告。</p>

## 1. 等当前归档结束，再开始更新 {#before-update}

安装新版本时，浏览器会重新加载插件。如果当前正在归档，请先在归档详情中查看进度，等到显示 **“已保存”** 后再开始更新，避免中断本次任务。

<div class="custom-block warning archive-notice" role="note" aria-labelledby="update-notice-title">
  <p class="custom-block-title" id="update-notice-title"><svg class="archive-notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5" /><circle cx="12" cy="16.5" r=".75" fill="currentColor" stroke="none" /></svg>更新时，请保留当前安装</p>
  <p>请在原来的浏览器和用户资料中，沿用当前安装方式更新。<strong>不要先卸载插件，也不要清除扩展数据</strong>，以免丢失当前浏览器中的归档历史和设置。</p>
</div>

<details class="custom-block details" open>
<summary>补充说明</summary>

为了便于更新后核对，可以提前记下当前<span class="product-name product-name--after-text">采标集</span>账号。如果调整过 **“ZIP 命名规则”**，也可以将设置页面截图留存，方便之后对照。

</details>

## 2. 查看当前版本，确认安装方式 {#check-version}

接下来，在地址栏输入对应的地址，打开扩展管理页，找到<span class="product-name product-name--punctuation product-name--after-text">采标集</span>。查看条目或其详情中的版本号，记下更新前的版本。

<p class="table-hint">左右滑动表格，查看完整地址。</p>

| 使用的浏览器 | 在地址栏输入 |
| --- | --- |
| Chrome | `chrome://extensions/` |
| Microsoft Edge | `edge://extensions/` |
| 360 安全浏览器（Windows） | `se://extensions/` |

接下来，按你当初的安装方式选择下方步骤：

- **从 Chrome 或 Edge 商店安装：** 在插件详情页点击“添加至 Chrome”或“获取”完成安装，按[商店安装版](#store-update)更新。
- **通过 360 离线安装包安装：** 下载 `.crx` 文件后拖入浏览器，查看[360 离线安装版](#crx-update)的说明。
- **通过文件夹加载：** 曾点击“加载已解压的扩展程序”等入口，并选择电脑上的一个文件夹，按[文件夹安装版](#folder-update)更新。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **已经打开管理页：** 也可以进入<span class="product-name product-name--after-text">采标集</span>的 **“关于”**，在 **“版本信息”** 中查看 **“当前版本”**。这里显示的是插件版本。
- **不记得安装方式：** 先保留现有插件，[联系技术支持](/manual/support/)并提供浏览器名称、当前插件版本及扩展条目截图，确认后再继续。仅看到“开发者模式”已开启，不能据此判断安装方式。

</details>

## 3. 按对应的安装方式更新 {#update-extension}

不同安装方式使用的更新入口不同。找到与你当前安装方式一致的一项，完成后再进入[更新后的检查](#check-after-update)。

### 商店安装版：由浏览器自动更新 {#store-update}

通过 Chrome 或 Edge 商店安装的<span class="product-name product-name--punctuation product-name--after-text">采标集</span>，由浏览器自动检查并更新，**无需开启开发者模式**。新版本发布后，更新可能不会立即完成，你可以在扩展管理页查看当前版本。

<details class="custom-block details" open>
<summary>补充说明</summary>

**需要手动检查更新时**

如果你已确认原安装商店有新版本，希望立即检查，可以按下面的步骤操作。这里开启开发者模式是为了显示手动更新入口，商店安装和自动更新都不需要这一步。

1. 打开上一步对应的扩展管理页。
2. Chrome 开启页面右上角的 **“开发者模式”**；Edge 开启 **“开发人员模式”**，显示 **“更新”** 按钮。
3. 点击 **“更新”**，等待浏览器完成检查。
4. 再查看<span class="product-name product-name--after-text">采标集</span>的版本号，确认是否与该商店提供的版本一致。

下面分别是 Chrome 和 Edge 的手动更新入口。图中的 **“Developer mode”** 对应模式开关，**“Update”** 对应 **“更新”**。

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/chrome-update-entry.png')" target="_blank" rel="noopener" aria-label="查看 Chrome 更新入口完整截图">
    <span style="position: relative; display: block; padding-left: 34px; margin: 12px 0;">
      <span class="entry-marker" style="left: 12px; top: 50%" aria-hidden="true">1</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2680 185 344 110" width="210" role="img" aria-label="Chrome 模式开关局部截图" style="display: block; max-width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 6px; overflow: hidden;">
        <image :href="withBase('/images/chrome-update-entry.png')" width="3024" height="1748" />
      </svg>
    </span>
    <span style="position: relative; display: block; padding-left: 34px; margin: 12px 0;">
      <span class="entry-marker" style="left: 12px; top: 50%" aria-hidden="true">2</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 285 820 120" width="380" role="img" aria-label="Chrome 更新按钮局部截图" style="display: block; max-width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 6px; overflow: hidden;">
        <image :href="withBase('/images/chrome-update-entry.png')" width="3024" height="1748" />
      </svg>
    </span>
    <span style="position: relative; display: block; padding-left: 34px; margin: 12px 0;">
      <span class="entry-marker" style="left: 12px; top: 50%" aria-hidden="true">3</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="830 590 700 140" width="380" role="img" aria-label="Chrome 当前版本局部截图" style="display: block; max-width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 6px; overflow: hidden;">
        <image :href="withBase('/images/chrome-update-entry.png')" width="3024" height="1748" />
      </svg>
    </span>
  </a>
  <figcaption><span>Chrome（macOS）手动更新入口</span><span>① 模式开关　② 更新按钮　③ 当前版本</span><span>点击图片可查看完整页面。</span></figcaption>
</figure>

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/edge-update-entry.png')" target="_blank" rel="noopener" aria-label="查看 Edge 更新入口完整截图">
    <span style="position: relative; display: block; padding-left: 34px; margin: 12px 0;">
      <span class="entry-marker" style="left: 12px; top: 50%" aria-hidden="true">1</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="70 1570 550 125" width="320" role="img" aria-label="Edge 模式开关局部截图" style="display: block; max-width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 6px; overflow: hidden;">
        <image :href="withBase('/images/edge-update-entry.png')" width="3024" height="1748" />
      </svg>
    </span>
    <span style="position: relative; display: block; padding-left: 34px; margin: 12px 0;">
      <span class="entry-marker" style="left: 12px; top: 50%" aria-hidden="true">2</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2180 350 260 108" width="150" role="img" aria-label="Edge 更新按钮局部截图" style="display: block; max-width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 6px; overflow: hidden;">
        <image :href="withBase('/images/edge-update-entry.png')" width="3024" height="1748" />
      </svg>
    </span>
    <span style="position: relative; display: block; padding-left: 34px; margin: 12px 0;">
      <span class="entry-marker" style="left: 12px; top: 50%" aria-hidden="true">3</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="780 535 730 125" width="380" role="img" aria-label="Edge 当前版本局部截图" style="display: block; max-width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 6px; overflow: hidden;">
        <image :href="withBase('/images/edge-update-entry.png')" width="3024" height="1748" />
      </svg>
    </span>
  </a>
  <figcaption><span>Edge（macOS）手动更新入口</span><span>① 模式开关　② 更新按钮　③ 当前版本</span><span>点击图片可查看完整页面。</span></figcaption>
</figure>

**遇到以下情况时**

- **点击“更新”后版本没有变化：** 先确认原安装商店是否已经提供新版本，可从[安装采标集](/manual/install/#choose-browser)打开对应的插件详情页。不同商店的版本可能不同；页面上提示检查完成，也不等于本次一定装入了新版本。确认有新版本后，可在保存其他网页工作后退出并重新打开浏览器，再次核对。
- **“更新”按钮的作用：** 它会检查浏览器中已安装扩展的更新，不只检查<span class="product-name product-name--punctuation product-name--after-text">采标集</span>。它与文件夹版条目上的“重新加载”作用不同。
- **出现新增权限或停用提示：** 先阅读浏览器给出的权限说明，确认后再按提示继续。不清楚原因时，保留提示内容并[联系技术支持](/manual/support/)；如果提示由组织管理，请联系电脑或浏览器管理员。

</details>

### 360 离线安装版：先核对版本和更新说明 {#crx-update}

通过 `.crx` 文件安装时，先查看[360 离线安装入口](/manual/install/#install-360)提供的版本。当前文档提供的是 **v1.5.0**；如果你已经安装这一版，无需重复安装同一个文件。

收到新版离线安装包时，先查看随包提供的更新说明，确认适用于当前的 360 安全浏览器及已安装版本，再按说明操作。没有明确更新说明时，**先保留现有插件**，[联系技术支持](/manual/support/)并说明当前版本及 CRX 安装方式，确认如何更新后再继续。

这类安装方式暂时不要依赖自动更新，也不要先卸载旧版再安装新版。

### 文件夹安装版：加载新版文件夹 {#folder-update}

如果你原来是在 Chrome 或 Edge 中通过文件夹安装的，可以通过 **“加载已解压的扩展程序”** 选择新版文件夹，完成更新。开始前，请从原交付渠道获取适用于当前文件夹安装版的新版安装包。

取得安装包后，按下面的顺序操作：

1. **解压新版安装包。** 将解压后的插件文件夹放在准备长期保留的位置，确认文件夹内能直接看到 `manifest.json`。加载后，浏览器仍需读取这个文件夹，请保留它。
2. **打开扩展管理页。** 关闭<span class="product-name product-name--after-text">采标集</span>工作台和管理页，在原来的浏览器中打开 `chrome://extensions` 或 `edge://extensions`，开启 **“开发者模式”**。
3. **加载新版文件夹。** 点击 **“加载已解压的扩展程序”**（英文界面为 **“Load unpacked”**），选择第 1 步准备好的插件文件夹，等待浏览器完成加载。
4. **确认版本已更新。** 查看原来的<span class="product-name product-name--after-text">采标集</span>条目，确认版本号已变为本次安装的新版，再继续下方的更新结果检查。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **在 Chrome 中，也可以拖入文件夹：** 开启开发者模式后，将解压后的插件文件夹拖入扩展管理页即可加载。拖入的是插件文件夹，不是尚未解压的安装包。
- **如果已经把新版文件替换到原目录：** 可以直接在原来的<span class="product-name product-name--after-text">采标集</span>条目上点击 **“重新加载”**，无需再次选择文件夹。Chrome 通常显示为圆形箭头，Edge 的英文界面显示 **“Reload”**。
- **加载后出现两个同名条目：** 先保留原条目，核对是否拿到了其他安装渠道的包。[联系技术支持](/manual/support/)并说明原安装方式和新版文件来源，确认后再继续，不要先卸载旧条目。

</details>

## 4. 重新打开工作台，检查更新结果 {#check-after-update}

完成对应更新后，先回到原公告网页并刷新，再点击<span class="product-name product-name--after-text">采标集</span>图标打开工作台。接下来，按顺序检查：

1. **版本符合预期。** 在扩展管理页，或管理页的“关于 → 版本信息”中，确认“当前版本”与这次安装的版本一致。
2. **工作台可以使用。** 页面能正常打开并显示当前公告的识别状态；需要重新登录时，使用更新前的<span class="product-name product-name--after-text">采标集</span>账号。
3. **已有记录可以查看。** 进入“归档历史”，找到一条之前的记录，打开详情核对项目和归档结果；如果原来没有记录，可跳过这一项。
4. **个人设置符合预期。** 如果此前修改过“ZIP 命名规则”，进入个人中心，打开该设置，与更新前保留的内容核对。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **历史记录没有显示：** 先确认仍使用原来的浏览器、浏览器用户资料和<span class="product-name product-name--after-text">采标集</span>账号，再检查是否设置了搜索或筛选条件。不要通过反复卸载或清除数据来尝试找回记录；具体排查见[本地数据与文件保存](/manual/local-data/)。
- **能看到记录，但“在文件夹中显示”找不到文件：** 先到原保存位置或后来移动到的文件夹查找。文件位置与浏览器下载记录也会影响这个入口，不能仅凭这一现象判断更新是否成功。
- **仍有异常：** 保留当前安装和文件，[联系技术支持](/manual/support/)并说明浏览器、安装方式、更新前后版本及具体提示，便于核对问题。

</details>

核对完成后，就可以继续用<span class="product-name product-name--after-text">采标集</span>整理下一份公告了。
