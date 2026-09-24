---
title: 支持范围与权限
description: 了解支持范围与权限，通过工作台中“一键归档下载”按钮是否可用，判断当前公告能否归档。
category: 日常归档
updatedAt: '2026-09-23'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 卸载、重装与换设备, link: /manual/reinstall-migration/ }
next: { text: 归档包与内容核对, link: /manual/archive-output/ }
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 支持范围与权限

<p class="lead">本篇会介绍<span class="product-name product-name--after-text">采标集</span>支持的公告站点和页面类型，并说明浏览器权限与原网站的访问要求。判断一份公告能否归档，最直接的方法就是打开工作台，查看“一键归档下载”按钮是否可用。</p>

## 1. 确认当前公告是否可以归档 {#supported-pages}

### 当前支持哪些站点 {#supported-sites}

<span class="product-name">采标集</span>目前支持以下站点中的公开招标公告详情页：

<p class="table-hint">左右滑动表格，查看站点及支持范围。</p>

| 站点 | 支持范围 |
| --- | --- |
| [中国政府采购网](https://www.ccgp.gov.cn/) | 中央和地方公开招标公告 |
| [陕西省政府采购网](https://www.ccgp-shaanxi.gov.cn/) | 部分公开招标公告 |
| [湖北省政府采购网](https://www.ccgp-hubei.gov.cn/) | 部分公开招标公告 |
| [北京市公共资源交易服务平台](https://ggzyfw.beijing.gov.cn/) | 部分公开招标公告 |

**站点列表可以作为参考，具体页面能否归档，以工作台中的按钮状态为准。** 同一站点中，不同栏目和公告页面的支持情况也会有所不同。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **页面类型：** 当前支持范围是上述站点中的公开招标公告页面，网站首页、搜索结果页、公告列表页，以及中标、成交、更正等其他类型公告不在本篇所述范围内。实际使用时，直接查看工作台中的按钮和提示即可。
- **同一公告出现在多个网站：** 不同网站上的页面可能有不同的支持情况，请在你当前打开的页面中查看工作台。
- **查看支持站点：** 工作台提示页面暂不支持时，可以展开 **“已支持站点”**，查看当前可用的站点列表。

</details>

### 打开你需要保存的公告页面 {#notice-detail}

在网站上找到需要保存的公告，点击公告标题，打开能看到标题和正文的页面。保持这个页面打开，点击浏览器中的<span class="product-name product-name--after-text">采标集</span>图标，进入工作台。

### 查看按钮状态，确认页面是否受支持 {#confirm-page}

等待页面读取完成后，查看归档按钮：

- **“一键归档下载”按钮可以点击：** 当前页面已受支持，可以发起归档。
- **按钮显示“当前页面不可归档”：** 当前页面暂未支持，无法从这里发起归档。

**如果你需要归档的页面暂未支持，欢迎[联系技术支持](/manual/support/)。** 把页面网址和你希望归档的资料告诉我，方便了解你的需求并评估支持方式。

<figure class="doc-shot extension-entry-shot">
  <a :href="withBase('/images/workbench-ready.webp')" target="_blank" rel="noopener" aria-label="查看工作台归档按钮的完整截图">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1028 130 572 300" width="420" role="img" aria-label="工作台显示当前页面可归档及一键归档下载按钮" style="display: block; max-width: 100%; height: auto;">
      <image :href="withBase('/images/workbench-ready.webp')" width="1600" height="460" />
    </svg>
  </a>
  <figcaption><span>“一键归档下载”按钮可点击，表示当前页面已受支持，可以发起归档。</span><span>点击图片可查看完整页面。</span></figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- **尚未登录：** 按钮可点击仍表示页面已受支持；点击后会先进入登录流程，按提示完成登录后再继续归档。
- **仍在读取页面或已有任务正在处理：** 请先等待页面读取完成，或查看当前任务的进度。这些情况下暂时无法点击归档按钮，不代表当前页面不受支持。
- **工作台加载失败，或提示暂时无法确认支持哪些页面：** 按提示检查网络并点击 **“重试”**。重试后仍无法读取时，可[联系技术支持](/manual/support/)，提供浏览器名称、插件版本和提示内容。
- **按钮可用不等于归档已完成：** 发起后，请在归档详情中确认附件处理结果，并等到显示 **“已保存”** 后再查看 ZIP 归档包。

</details>

## 2. 了解权限，并完成原网站的访问要求 {#access-requirements}

### 浏览器权限用于哪些操作 {#browser-permissions}

安装<span class="product-name product-name--after-text">采标集</span>时，浏览器会显示所需权限。常见的两项提示与归档操作有关：

<p class="table-hint">左右滑动表格，查看权限及用途。</p>

| 权限提示 | 在归档中用来做什么 |
| --- | --- |
| 读取和更改网站数据 | 读取支持的公告页面、在网页中提供操作入口，以及访问公告中的附件来源网站 |
| 管理下载 | 将生成的 ZIP 归档包保存到电脑，并通过浏览器下载记录提供“在文件夹中显示”入口 |

公告和附件可能位于不同的网站，因此当前版本申请了覆盖 HTTPS 网站的访问权限。安装框中会出现“所有网站”一类的权限描述。**这表示浏览器授予的访问范围，不代表所有网站都能归档，也不代表打开网页就会自动开始归档。**

<figure class="doc-shot extension-entry-shot">
  <a :href="withBase('/images/chrome-install-confirm.png')" target="_blank" rel="noopener" aria-label="查看 Chrome 安装权限提示大图">
    <img src="/images/chrome-install-confirm.png" alt="Chrome 安装确认框显示网站数据访问和下载管理两项权限。" width="1010" height="570" loading="lazy" />
  </a>
  <figcaption><span>Chrome 英文界面示例：两项权限分别对应网站数据访问和下载管理。</span><span>点击图片可查看大图。</span></figcaption>
</figure>

此外，插件使用本地存储保存登录状态、归档历史和设置，通过工作台、侧边栏或右键菜单提供操作入口。详细的数据处理说明见[隐私政策](/privacy/#section-4)。如果尚未安装，请按[安装采标集](/manual/install/)完成安装；已经安装并能正常使用时，无需重复安装或授权。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **曾手动限制网站访问权限：** 在浏览器的扩展管理页找到<span class="product-name product-name--after-text">采标集</span>，进入详情，检查网站访问设置。只允许访问公告站点时，来自其他网站的附件仍可能无法下载。调整后重新打开公告页面；不确定应如何设置时，可[联系技术支持](/manual/support/)，提供浏览器名称、公告网址及当前提示。
- **单位统一管理浏览器：** 如果权限选项无法修改，或浏览器提示该扩展受到组织限制，请联系单位的浏览器管理员确认允许的使用方式。

</details>

### 原网站要求登录或验证时，先按页面提示完成 {#source-site-access}

浏览器给插件的访问权限，不会替你完成公告网站的登录或验证码验证。**登录<span class="product-name product-name--after-text">采标集</span>账号，也不等于已经登录原网站。**

如果打开公告或附件时，原网站要求登录、输入验证码或完成其他访问确认，请先在原网站按提示操作。确认能正常查看公告正文后，再回到这份公告继续归档。

归档前，请确认你有权使用这些资料，并遵守来源网站的访问要求。<span class="product-name">采标集</span>不会绕过登录、验证码、签名或访问限制。

<details class="custom-block details" open>
<summary>补充说明</summary>

**附件在原网站也打不开：** 先处理原网站提示的问题。若附件需要额外申请权限，按网站要求申请；浏览器授予插件访问权限不能替代这项授权。即使公告正文能打开，也不能据此判断每个附件都能下载。

</details>

确认归档按钮可用，并按原网站要求完成必要的登录或验证后，就可以点击 **“一键归档下载”** 继续操作。查看归档进度、等待“已保存”和核对资料的具体步骤，见[第一次归档](/manual/first-archive/)。
