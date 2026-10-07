---
title: 卸载、重装与换设备
description: 卸载前保留需要的资料，按当前用途选择重装或在新设备安装，再确认可以继续使用。
category: 安装、升级与数据维护
updatedAt: '2026-10-07'
appliesTo: 适用于 v2.0.0
reviewStatus: user-approved
prev: { text: 本地数据与文件保存, link: /manual/local-data/ }
next: { text: 支持范围与权限, link: /manual/supported-sites/ }
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 卸载、重装与换设备

<p class="lead">准备卸载、重新安装或换一台电脑使用时，先保留需要的资料，再按你的情况操作。本篇会带你完成准备、找到卸载或安装入口，并在重新安装后确认可以继续使用。</p>

## 1. 操作前，保留需要的资料 {#before-you-start}

如果当前还有归档任务正在下载附件、生成归档包或保存文件，请等到显示 **“已保存”** 后再操作。

<div class="custom-block warning archive-notice" role="note" aria-labelledby="reinstall-notice-title">
  <p class="custom-block-title" id="reinstall-notice-title"><svg class="archive-notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5" /><circle cx="12" cy="16.5" r=".75" fill="currentColor" stroke="none" /></svg>卸载前，请确认任务结束并保留必要资料</p>
  <p>卸载会删除本机设置、缓存和任务恢复信息，<strong>不会自动删除 2.0.0 已保存的云端记录，也不会删除下载到电脑的归档包。</strong>旧版本仅保存在本机的历史不会迁移到新版；需要留存的资料，请保存实际归档包。</p>
</div>

接下来，按需要完成准备：

1. **找到要留存的 ZIP 归档包。** 从归档详情点击 **“在文件夹中显示”**，核对并保存好实际文件；具体方法见[本地数据与文件保存](/manual/local-data/#check-and-copy)。卸载插件不会删除已经保存到电脑的 ZIP 归档包。
2. **换电脑时，先复制资料。** 将需要的 ZIP 归档包复制到新电脑或准备使用的存储设备，并从新位置打开，确认资料可以查看。
3. **准备重装或换设备时，记下登录邮箱。** 之后用原来的<span class="product-name product-name--after-text">采标集</span>账号登录，并提前确认能够打开[对应的安装入口](/manual/install/#choose-browser)。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **只想安装新版本：** 请按[安全更新插件](/manual/update/)操作，无需先卸载。
- **调整过命名方式：** 可以先截图保存 **“ZIP 命名规则”** 的当前设置，重新安装后再照着设置。复制 ZIP 归档包只能留存资料，不能还原插件中的历史和设置。

</details>

## 2. 按你的情况，选择卸载、重装或换设备 {#choose-your-action}

### 不再使用：从扩展管理页卸载 {#remove-extension}

在安装了<span class="product-name product-name--after-text">采标集</span>的浏览器中，将下面对应的地址复制到地址栏，按回车打开扩展管理页：

<p class="table-hint">左右滑动表格，查看对应的扩展管理页地址。</p>

| 浏览器 | 扩展管理页地址 |
| --- | --- |
| Chrome | `chrome://extensions/` |
| Microsoft Edge | `edge://extensions/` |
| Windows 360 安全浏览器 | `se://extensions/` |

找到<span class="product-name product-name--after-text">采标集</span>条目，点击 **“移除”** 或 **“删除”**（英文界面为 **“Remove”**），再按弹窗提示确认。**列表中不再显示该条目，就完成了卸载。** 如果不打算重新安装，到这里即可结束。

下面是三种浏览器中的入口示例：

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/chrome-update-entry.png')" target="_blank" rel="noopener" aria-label="查看 Chrome 扩展管理页完整截图">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="790 565 830 455" width="420" role="img" aria-label="Chrome 采标集条目及 Remove 按钮" style="display: block; max-width: 100%; height: auto;">
      <image :href="withBase('/images/chrome-update-entry.png')" width="3024" height="1748" />
      <rect x="985" y="908" width="177" height="79" rx="7" fill="none" stroke="#dc2626" stroke-width="4" />
    </svg>
  </a>
  <figcaption><span>Chrome：点击条目下方的“Remove”（移除）。</span><span>点击图片可查看完整页面。</span></figcaption>
</figure>

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/edge-update-entry.png')" target="_blank" rel="noopener" aria-label="查看 Edge 扩展管理页完整截图">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="770 515 735 335" width="420" role="img" aria-label="Edge 采标集条目及 Remove 按钮" style="display: block; max-width: 100%; height: auto;">
      <image :href="withBase('/images/edge-update-entry.png')" width="3024" height="1748" />
      <rect x="1018" y="755" width="143" height="61" rx="7" fill="none" stroke="#dc2626" stroke-width="4" />
    </svg>
  </a>
  <figcaption><span>Edge：点击条目下方的“Remove”（删除）。</span><span>点击图片可查看完整页面。</span></figcaption>
</figure>

<figure class="doc-shot extension-entry-shot">
  <a class="extension-entry-image" :href="withBase('/images/360-crx-install-poster.png')" target="_blank" rel="noopener" aria-label="查看 360 扩展条目大图">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 820 445" width="420" role="img" aria-label="Windows 360 采标集条目及移除按钮" style="display: block; max-width: 100%; height: auto;">
      <image :href="withBase('/images/360-crx-install-poster.png')" width="960" height="540" />
      <rect x="219" y="371" width="138" height="72" rx="7" fill="none" stroke="#dc2626" stroke-width="4" />
    </svg>
  </a>
  <figcaption><span>Windows 360：点击条目下方的“移除”。</span><span>点击图片可查看大图。</span></figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- **暂时不想使用：** 可以关闭扩展条目上的启用开关，之后再打开。关闭开关是停用，不等于卸载；取消工具栏固定也只是隐藏图标。
- **卸载无需开启开发者模式。** 直接使用条目中的移除或删除按钮即可。

</details>

### 在原浏览器重装：卸载后重新安装 {#reinstall-here}

做好上面的准备，确认当前任务已结束后，先按[卸载步骤](#remove-extension)移除插件。随后沿用原来的安装方式，按[安装采标集](/manual/install/#choose-browser)完成安装，再继续下方的[安装后检查](#check-after-install)。

<details class="custom-block details" open>
<summary>补充说明</summary>

**原来通过文件夹安装：** 准备好原交付渠道提供的完整安装文件夹。在扩展管理页开启“开发者模式”或“开发人员模式”，点击 **“加载已解压的扩展程序”**（英文为 **“Load unpacked”**），选择包含 `manifest.json` 的文件夹。无法确认安装文件来源或不清楚应选哪个目录时，先[联系技术支持](/manual/support/)。

</details>

### 换电脑或浏览器：先在新环境安装 {#use-another-device}

换到另一台电脑、另一个浏览器或新的浏览器环境时，**可以直接在新环境安装，无需先卸载旧插件。** 按[安装采标集](/manual/install/#choose-browser)完成安装，再继续下方检查。

安装 2.0.0 后，登录原账号并连接服务器，可以查看该账号已保存的云端历史和可用快照。命名设置需要重新设置，归档包和附件需要自行复制；旧版本仅在本机的历史不会迁移。

## 3. 安装完成后，确认可以继续使用 {#check-after-install}

重新安装或在新环境安装完成后，依次检查：

1. **打开工作台，登录原账号。** 点击浏览器中的<span class="product-name product-name--after-text">采标集</span>图标，使用之前的邮箱登录。具体操作见[第一次归档：打开工作台，完成登录](/manual/first-archive/#open-workbench)。
2. **核对云端历史。** 联网后打开“归档历史”，确认显示的是原账号已保存的记录；旧版本地历史不在本次显示范围内。
3. **重新设置需要的命名方式。** 如果之前调整过 **“ZIP 命名规则”**，照着留存的设置重新选择；没有调整过时，可以继续使用默认规则。
4. **换电脑后，检查复制过来的资料是否完整、能否打开。** 在新电脑上找到复制过来的 ZIP 归档包，解压后打开清单、公告原文和附件，确认需要的文件都在，并且可以正常查看。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **旧电脑上的插件可以先保留。** 先确认需要的实际文件已经复制且能打开；如果还需要在旧版本中回看本地历史，请保留旧浏览器环境。
- **旧浏览器提示登录失效：** 在新环境登录同一账号后，旧登录会失效。回到旧环境查看历史时，按提示重新登录即可；已保存的云端记录不会因此删除。
- **工作台无法打开或登录失败：** 先保留当前安装，记下浏览器、安装方式和具体提示，再[联系技术支持](/manual/support/)，避免通过反复卸载尝试解决。

</details>

确认工作台可以打开、账号已经登录且资料已留存后，就可以继续使用了。下一次需要整理公告时，按[第一次归档](/manual/first-archive/)中的步骤发起归档，并在保存完成后核对结果。
