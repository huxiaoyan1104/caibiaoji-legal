---
title: 第一次归档
description: 跟着步骤发起归档，找到并核对你的第一份 ZIP 归档包。
category: 开始使用
updatedAt: '2026-09-23'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 认识采标集, link: /manual/ }
next: { text: 安装采标集, link: /manual/install/ }
---

<script setup>
import { withBase } from 'vitepress';
import ArchiveProgressDemo from '../../.vitepress/theme/ArchiveProgressDemo.vue';
</script>

# 第一次归档

<p class="lead">本篇会带你从打开工作台开始，一步步完成归档，找到 ZIP 归档包，并解压核对其中的资料。接下来，请选一份需要留存的公开招标公告，跟着下面的步骤，用<span class="product-name product-name--after-text">采标集</span>完成你的第一次<strong>“一键归档下载”</strong>。</p>

## 开始前，准备好公告详情页和邮箱 {#before-you-start}

先确认浏览器中已安装并启用<span class="product-name product-name--punctuation product-name--after-text">采标集</span>，再打开一份需要归档的公告。这里需要的是能够查看公告正文的**公开招标公告详情页**；网站首页、搜索结果和公告列表都不是归档入口。

::: tip 当前支持的站点
- [中国政府采购网](https://www.ccgp.gov.cn/)：中央和地方公开招标公告。
- [陕西省政府采购网](https://www.ccgp-shaanxi.gov.cn/)：部分公开招标公告。
- [湖北省政府采购网](https://www.ccgp-hubei.gov.cn/)：部分公开招标公告。
- [北京市公共资源交易服务平台](https://ggzyfw.beijing.gov.cn/)：部分公开招标公告。

具体页面能否归档，以工作台显示 **“当前页面可归档”** 为准。

**先用一份公告熟悉操作：** 还没选好公告时，可以打开[北京政务云服务采购公告（历史示例）](https://ggzyfw.beijing.gov.cn/xmcgzbgg/20260213/5432723.html)，再跟着下面的步骤完成一次归档。打开示例链接不会自动开始归档。
:::

选好公告后，再准备一个能正常收信的邮箱，用于首次登录时接收验证码。

<div class="custom-block warning archive-notice" role="note" aria-labelledby="archive-notice-title">
  <p class="custom-block-title" id="archive-notice-title"><svg class="archive-notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5" /><circle cx="12" cy="16.5" r=".75" fill="currentColor" stroke="none" /></svg>归档前请留意</p>
  <p>归档前，请确认你<strong>有权使用这些资料</strong>，并遵守来源网站的访问要求。若原网站要求登录或完成验证码验证，先按页面提示操作，再继续下面的步骤。</p>
</div>

## 1. 打开工作台，完成登录 {#open-workbench}

保持公告详情页打开，点击浏览器右上角的<span class="product-name product-name--after-text">采标集</span>图标，打开工作台。如果没有看到图标，请点击<strong>“扩展程序”（拼图图标）</strong>，再选择<span class="product-name product-name--punctuation product-name--after-text">采标集</span>。

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/chrome-extension-entry.png')" target="_blank" rel="noopener" aria-label="查看 Chrome 工具栏与扩展菜单入口截图原图">
    <img src="/images/chrome-extension-entry.png" alt="Chrome 浏览器右上角的蓝色采标集图标，以及扩展菜单中的采标集条目。" width="650" height="444" loading="lazy" />
    <span class="entry-marker entry-marker--toolbar" aria-hidden="true">1</span>
    <span class="entry-marker entry-marker--menu" aria-hidden="true">2</span>
  </a>
  <figcaption><span>① 工具栏入口　② 扩展菜单入口</span><span>图中为 Chrome 示例。点击图片可查看大图。</span></figcaption>
</figure>

首次使用时，按下面的顺序完成登录：

1. 点击 **“登录 / 注册”**，选择 **“邮箱验证码”**。
2. 输入邮箱地址，点击 **“获取验证码”**。
3. 到邮箱查收验证码，填写后点击 **“验证并继续”**。

首次验证成功后会自动注册账号，无需先设置密码。已有账号且设置过密码时，也可以选择 **“邮箱密码”** 登录；如果已经登录，直接进入下一步即可。

<div class="custom-block info trial-notice" role="note" aria-labelledby="trial-notice-title">
  <p class="custom-block-title" id="trial-notice-title"><svg class="trial-notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="7.5" r=".75" fill="currentColor" stroke="none" /></svg>注册即可试用</p>
  <p>首次注册后，即可使用赠送的 <strong>3 次归档机会</strong>，无需先购买。你可以先跟着下面的步骤完成归档，看看整理后的资料是否符合需要，再决定是否购买。</p>
  <p>赠送次数在服务期内有效。</p>
</div>

## 2. 确认页面，点击“一键归档下载” {#archive-workbench}

登录完成后，回到工作台，确认当前仍打开着要保存的公告。当工作台显示 **“当前页面可归档”** 时，点击 **“一键归档下载”**，就能发起本次归档。

<figure class="doc-shot">
  <a :href="withBase('/images/workbench-ready.webp')" target="_blank" rel="noopener"><img src="/images/workbench-ready.webp" alt="采标集工作台显示当前页面可归档，下方为一键归档下载按钮" width="1600" height="460" /></a>
  <figcaption>先确认“当前页面可归档”，再点击“一键归档下载”。点击图片可查看大图。</figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- 仅打开工作台不会自动开始归档。按上述步骤完成登录后，还需要点击 **“一键归档下载”** 按钮发起。
- 如果提示已有任务正在处理，先点击 **“查看当前任务”** 查看进度，等它结束后再归档这份公告。

</details>

## 3. 查看归档进度，等待“已保存” {#follow-progress}

发起后，工作台会打开本次**归档详情**。接下来，<span class="product-name">采标集</span>会识别公告信息、确认可用权益，并下载已识别的公开附件，随后整理公告原文、生成 Excel 归档清单，打包并保存 ZIP 归档包。

你可以在归档详情中查看正在处理的步骤和附件状态。归档进行时，先保留原公告页面，等本次任务结束后再关闭。

<ArchiveProgressDemo />

**附件下载完成后，还需要等待打包和保存。** 如果仍显示“正在生成归档包”或“正在保存”，继续等待即可；看到 **“已保存”** 后，再进入下一步查找文件。若显示归档失败或权益不足，请按[下方的问题说明](#when-something-goes-wrong)处理。

## 4. 找到保存到电脑的 ZIP 归档包 {#find-your-files}

归档详情显示“已保存”后，点击 **“在文件夹中显示”**，就能在电脑中找到本次保存的 ZIP 归档包。先核对文件名，确认它对应刚才归档的公告。

ZIP 归档包默认保存在**浏览器下载目录下的 `采标集` 文件夹**中。如果你调整过保存位置，以实际保存的文件夹为准。

<details class="custom-block details" open>
<summary>补充说明</summary>

- 如果已经离开归档详情，可以在工作台进入 **“归档历史”**，打开这条已完成的记录，再点击“在文件夹中显示”。
- 若文件被移动或浏览器下载记录被清理，这个入口可能无法定位文件，可以先到原保存位置或移动后的文件夹中查找；具体说明见[本地数据与文件保存](/manual/local-data/)。

</details>

## 5. 解压后，核对清单、原文和附件 {#check-archive}

找到 ZIP 归档包后，将它解压。接下来，按“先看清单、再看原文、最后查附件”的顺序，确认保存的资料是否符合本次需要。

1. **先打开 `00_归档清单.xlsx`。** 在“归档概览”中核对项目名称、项目编号和来源网址；再看“附件清单”，了解附件名称及处理结果。
2. **再打开公告原文。** 查看 `01_网页原文.pdf` 是否能正常打开、需要的公告内容是否已保存。公告原文也可能保存为 `01_网页原文.jpeg`。
3. **最后检查 `02_附件/`。** 对照清单找到需要的文件，确认文件名能够对应，并逐个打开核对内容。附件会添加序号，例如 `001_`、`002_`，方便与清单对应查找。

如果本次未识别到可直接下载的公开附件，附件文件夹会显示为 `02_附件_原网页无附件`。这不代表采购项目没有其他文件；公告中要求前往其他平台获取的采购文件，仍需按原公告指引获取。

**确认资料能打开、内容符合需要后，你的第一次归档就完成了。** 将 ZIP 归档包或解压后的文件夹放进对应项目目录，并把清单、原文和附件一同留存，以后就能按项目查找和核对。

## 熟悉流程后，也可以从网页右键发起 {#archive-context-menu}

完成第一次归档后，处理下一份公告时，还可以直接在支持的公告详情页点击鼠标右键，展开<span class="product-name product-name--after-text">采标集</span>菜单，再选择 **“一键归档下载”**。

<figure class="doc-shot extension-entry-shot">
  <a :href="withBase('/images/chrome-context-menu-entry.svg')" target="_blank" rel="noopener" aria-label="查看右键归档入口大图">
    <img src="/images/chrome-context-menu-entry.svg" alt="Chrome 右键菜单中展开采标集，右侧子菜单显示打开采标集工作台和一键归档下载。" width="960" height="275" loading="lazy" />
  </a>
  <figcaption><span>在右键菜单中展开采标集，再选择“一键归档下载”。</span><span>图中为 Chrome 示例。点击图片可查看大图。</span></figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- 如果工作台已经打开，直接在其中查看进度；如果没有显示工作台，网页右下角会显示本次任务的提示，点击 **“查看详情”** 即可打开归档详情。之后同样等待“已保存”，再定位 ZIP 归档包并核对资料。
- 若提示需要登录，点击 **“登录并继续”**，完成登录后，<span class="product-name">采标集</span>会继续处理这份公告。
- 右键菜单中的“打开采标集工作台”只打开工作台，不会发起归档。
- 关闭网页右下角的提示只会隐藏提示，不会取消正在进行的任务。

</details>

## 遇到问题时，按当前提示处理 {#when-something-goes-wrong}

### 没有收到邮箱验证码

先核对邮箱地址，并检查垃圾邮件。若验证码已经失效，等到可以重新获取时，再点击“获取验证码”，使用新收到的验证码登录。

### 显示“当前页面暂不支持归档”

先查看工作台中的“已支持站点”，再确认打开的是公开招标公告详情页。如果站点已支持、页面也正确，仍无法归档，可以[联系技术支持](/manual/support/)，提供公告网址和页面提示。

### 提示“未识别到项目编号”

本次归档会停止，附件尚未下载，也未生成 ZIP 归档包。先查看原公告是否包含项目编号；如果原文中有编号，但未被识别，可以[联系技术支持](/manual/support/)，提供公告网址和包含编号的截图。

### 提示“权益不足，暂未归档”

此时尚未下载附件，也未生成 ZIP 归档包。按页面中的 **“升级 / 兑换码”** 入口补充权益；权益到账后，回到这条归档详情，手动点击 **“继续归档”**。

### 附件处理失败，或显示“归档失败”

先查看归档详情中的提示和文件状态，再到原公告中打开对应附件，确认能否正常获取。需要原网站登录或验证码验证时，按其要求完成操作。如果仍无法完成归档，请[联系技术支持](/manual/support/)，提供公告网址、出错步骤和提示内容。

反馈截图前请遮挡个人信息，不要发送密码、验证码、完整兑换码、标书附件或完整 ZIP 归档包。
