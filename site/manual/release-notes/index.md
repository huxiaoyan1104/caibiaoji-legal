---
title: 更新日志
description: 查看采标集各版本的功能变化、使用改进和修复，以及对应的安装与更新指引。
category: 问题与支持
updatedAt: '2026-09-24'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 联系技术支持, link: /manual/support/ }
next: { text: 合法使用说明, link: /manual/responsible-use/ }
---

# 更新日志

<p class="lead">这里记录<span class="product-name product-name--after-text">采标集</span>各版本中与使用有关的变化，帮助你了解新增功能、体验改进和问题修复，并找到对应的使用方法与更新入口。</p>

## v1.5.0 {#v1-5-0}

本次更新增加了邮箱密码登录和 ZIP 命名规则，并改进了权益显示、侧栏操作和归档兼容性。

### 新增邮箱密码登录 {#password-login}

登录后，可以在 **“个人中心 → 登录密码”** 中设置密码。以后登录时，选择 **“邮箱密码”**，输入邮箱和密码即可；原来的邮箱验证码登录仍然可以使用。

已经设置密码的账号，可以修改密码，也可以在忘记密码时通过邮箱验证重置。具体步骤见[登录与密码](/manual/account/)。

### 新增 ZIP 命名规则 {#zip-naming}

现在可以在 **“个人中心 → ZIP 命名规则”** 中选择文件名预设，查看示例并保存，让之后生成的 ZIP 归档包更符合你的整理习惯。具体设置方法见[ZIP 命名规则](/manual/naming/)。

<details class="custom-block details" open>
<summary>补充说明</summary>

命名规则保存后，只用于之后发起的归档。正在处理的任务和已经保存的文件不会改名；设置仅在当前账号和浏览器中生效。

</details>

### 改进权益与侧栏显示 {#display-improvements}

- **更直观地查看剩余次数：** 按次权益卡片的进度条改为显示剩余比例，与卡片中的剩余次数对应。
- **更容易识别当前使用的权益：** 优先使用的那份权益，在生效或开始使用后会显示为绿色；其他可用权益显示为蓝色。具体使用顺序见[权益使用规则](/manual/entitlements/#usage-order)。
- **侧栏操作更集中：** 从侧栏打开的弹窗、遮罩和操作提示都显示在侧栏内，便于一边查看原公告，一边完成设置。

### 修复与其他扩展同时使用时的归档失败 {#archive-fix}

修复了与部分浏览器扩展同时使用时，公告原文保存失败、归档无法完成的问题。如果仍遇到归档失败，可以先按[常见问题](/manual/troubleshooting/#archive-failed)中的步骤检查，再根据当前提示[联系技术支持](/manual/support/)。

## 获取与使用这个版本 {#get-version}

根据当前安装情况，选择对应的操作。已经安装时，可以先在浏览器的扩展管理页找到<span class="product-name product-name--punctuation product-name--after-text">采标集</span>，查看版本号：

- **还没有安装：** 按[安装采标集](/manual/install/)选择浏览器，完成安装。
- **正在使用旧版本：** 按[安全更新插件](/manual/update/)完成更新前的准备，并沿用当前安装方式更新。
- **已经是 v1.5.0：** 无需重复安装，可以直接打开上面的功能教程，按需要设置密码或调整命名规则。

<details class="custom-block details" open>
<summary>补充说明</summary>

不同安装渠道提供的版本可能不同，请以对应商店或安装入口显示的版本为准。360 离线安装版的版本及下载入口见[安装采标集](/manual/install/#install-360)，更新时请按[360 离线安装版的说明](/manual/update/#crx-update)操作。

</details>
