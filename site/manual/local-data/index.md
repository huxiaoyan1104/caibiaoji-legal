---
title: 本地数据与文件保存
description: 分清浏览器中的记录与电脑中的文件，找到并留存归档资料，了解清理或更换环境的影响。
category: 安装、升级与数据维护
updatedAt: '2026-09-23'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 安全更新插件, link: /manual/update/ }
next: { text: 卸载、重装与换设备, link: /manual/reinstall-migration/ }
---

# 本地数据与文件保存

<p class="lead">归档历史保存在浏览器中，ZIP 归档包保存在电脑文件夹里。想长期留存资料，需要保存好实际文件；卸载插件、清理数据或更换电脑前，也要先了解本地记录会受到什么影响。</p>

## 1. 分清记录与文件的保存位置 {#where-data-is-saved}

完成一次归档后，<span class="product-name">采标集</span>会在当前浏览器中留下归档记录，并将 ZIP 归档包保存到电脑。两者的用途不同：

<p class="table-hint">左右滑动表格，查看保存位置与用途。</p>

| 内容 | 保存在哪里 | 用来做什么 |
| --- | --- | --- |
| 归档历史、公告快照 | 当前浏览器中 | 回看归档结果、来源页面、文件清单和公告快照 |
| ZIP 命名设置 | 当前浏览器中 | 决定后续生成的 ZIP 归档包如何命名 |
| ZIP 归档包及解压后的资料 | 电脑文件夹中 | 打开清单、公告原文和附件，按项目整理或复制留存 |

在当前浏览器中登录<span class="product-name product-name--after-text">采标集</span>后，你可以查看这个账号在这里保存的归档历史，并继续使用已保存的命名设置。不过，这些内容保存在当前浏览器里，**换到另一台电脑或另一个浏览器后，即使登录同一账号，也不会自动同步过去。**

已经保存到电脑的文件则可以直接通过系统文件管理器打开。历史记录中显示“已保存”，说明当时已经完成保存；这条记录不能代替实际文件，也不能恢复后来被删除的 ZIP 归档包。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **浏览器用户资料与插件账号不同。** 例如，同一台电脑上的两个 Chrome 用户资料，各自使用独立的浏览器环境。即使登录同一个<span class="product-name product-name--after-text">采标集</span>账号，也不会共用这两份环境中的归档历史。
- **退出登录不会删除已有文件和本地归档记录。** 切换账号后显示的是当前账号的记录；要查看原账号的历史，需要回到原浏览器环境，并登录归档时使用的账号。

</details>

## 2. 找到 ZIP 归档包，留存需要的资料 {#keep-your-files}

### 找到已经保存的文件 {#locate-saved-archive}

先确认需要留存的那次归档已经显示 **“已保存”**。随后在工作台进入 **“归档历史”**，打开对应记录，点击 **“在文件夹中显示”**，找到本次 ZIP 归档包并核对文件名。

默认情况下，ZIP 归档包保存在浏览器下载目录下的 `采标集` 文件夹中；实际位置以本次下载结果为准。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **点击后无法定位文件：** 先到原下载位置或后来移动到的文件夹中查找，也可以用系统文件搜索查找归档包名称。文件被移动或改名后，原定位入口可能失效；对应的浏览器下载记录被清理后，则无法再通过该入口定位文件。
- **文件已经被删除：** 可以检查系统回收站或自己保留的副本。归档历史不提供已删除 ZIP 归档包和附件的恢复功能；仅保留一条历史记录，不能重新取回这些文件。

</details>

### 核对内容，再保留副本 {#check-and-copy}

找到文件后，先确认里面有需要留存的资料，再复制到固定的项目文件夹：

1. **解压 ZIP 归档包。** 打开 `00_归档清单.xlsx`，在“归档概览”中核对项目名称、项目编号和来源网址。
2. **对照清单检查文件。** 查看“附件清单”中的处理结果，再打开需要的公告原文和附件，确认内容可阅读、资料符合本次留存需要。具体核对方法见[第一次归档：解压后核对资料](/manual/first-archive/#check-archive)。
3. **复制到项目文件夹。** 保留完整 ZIP 归档包；如果还要保存解压后的资料，请将清单、原文和附件目录一并复制，方便以后对应查找。复制后，从新位置打开文件，确认副本可以使用。

需要长期留存时，可以在另一块存储设备或单位允许的存储位置再保留一份副本。资料中含有采购、客户等敏感信息时，按相应的授权和保密要求选择保存位置。

**文件副本不能还原插件中的历史和设置。** 当前<span class="product-name product-name--after-text">采标集</span>没有提供将全部本地历史和设置导出、再导入恢复的功能。将 ZIP 归档包复制到新电脑后，可以打开其中的资料，但不会在新环境中生成原来的历史记录。

## 3. 清理或更换环境前，确认会影响什么 {#before-changes}

文件留存好后，再根据你准备进行的操作，确认是否还需要保留原浏览器环境。

<div class="custom-block warning archive-notice" role="note" aria-labelledby="local-data-notice-title">
  <p class="custom-block-title" id="local-data-notice-title"><svg class="archive-notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5" /><circle cx="12" cy="16.5" r=".75" fill="currentColor" stroke="none" /></svg>卸载或清除扩展数据前，请先确认</p>
  <p>卸载插件、清除扩展数据或删除浏览器用户资料，会删除保存在当前浏览器中的归档历史、公告快照和设置。<strong>重新安装并登录同一账号，不能从服务器恢复这些本地记录。</strong>如果还需要回看原历史，请保留当前安装及浏览器用户资料。</p>
</div>

<p class="table-hint">左右滑动表格，查看不同操作的影响。</p>

<table class="data-impact-table">
  <thead>
    <tr>
      <th scope="col">准备进行的操作</th>
      <th scope="col">对记录或文件的影响</th>
      <th scope="col">操作前先做什么</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>移动或重命名 ZIP 归档包</td>
      <td>历史记录仍在，原来的定位入口可能找不到文件</td>
      <td>记清新位置与名称，并从新位置打开确认</td>
    </tr>
    <tr>
      <td>清理浏览器下载记录</td>
      <td>对应的下载记录被清理后，无法再通过“在文件夹中显示”定位文件；已下载的文件仍保留在电脑中</td>
      <td>先找到实际文件，确认需要的资料已留存</td>
    </tr>
    <tr class="data-impact-important">
      <td>卸载插件、清除扩展数据或删除浏览器用户资料</td>
      <td><strong class="data-impact-risk">会删除</strong>本地历史、快照及设置</td>
      <td>保存必要文件；仍需原记录时，保留原环境</td>
    </tr>
    <tr class="data-impact-important">
      <td>换电脑、浏览器或浏览器用户资料</td>
      <td>新环境<strong class="data-impact-risk">不会自动显示</strong>原来的历史和命名设置</td>
      <td>复制需要的实际文件；仍需回看记录时保留旧环境</td>
    </tr>
  </tbody>
</table>

<details class="custom-block details" open>
<summary>补充说明</summary>

- **只是更新插件：** 请按[安全更新插件](/manual/update/)操作，不要先卸载。切换文件夹版、商店版等安装渠道后，原来的历史和设置不一定能继续使用；需要切换时，请先[联系技术支持](/manual/support/)。
- **历史暂时没有显示：** 先确认电脑、浏览器用户资料和<span class="product-name product-name--after-text">采标集</span>账号与归档时一致，再检查关键词、状态和时间筛选。如果本地数据已经被清除，仍可到电脑文件夹中查找此前保存的 ZIP 归档包。
- **准备使用清理工具：** 普通网页缓存、浏览历史、下载记录和扩展数据是不同的清理项目。先看清工具将删除什么，不要将“清除所有数据”当作常规排错步骤。

</details>

如果无法确认某项操作是否会影响现有记录，请先保留当前环境，再[联系技术支持](/manual/support/)，说明使用的浏览器、插件版本、安装方式和准备进行的操作。
