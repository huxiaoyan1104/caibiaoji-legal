---
title: 归档包与内容核对
description: 解压 ZIP 归档包，核对项目信息、网页原文和附件，确认保存的资料是否符合本次需要。
category: 日常归档
updatedAt: '2026-09-23'
appliesTo: 适用于 v1.5
reviewStatus: user-approved
prev: { text: 支持范围与权限, link: /manual/supported-sites/ }
next: { text: ZIP 命名规则, link: /manual/naming/ }
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 归档包与内容核对

<p class="lead">本篇会带你查看 ZIP 归档包中的清单、网页原文和附件，并按顺序核对项目、文件与内容。完成核对后，你就能确认这份归档包是否保存了本次需要的资料。</p>

## 1. 找到并解压 ZIP 归档包 {#unpack-archive}

归档详情显示 **“已保存”** 后，点击 **“在文件夹中显示”**，找到本次保存的 ZIP 归档包。将它解压，再打开解压后的文件夹。

下面以一份包含两个附件的归档包为例。项目名称、编号和附件名称均为示例，实际内容以本次归档结果为准。

<figure class="archive-files" aria-labelledby="archive-output-example-caption">
  <figcaption id="archive-output-example-caption">ZIP 归档包内的文件 · 示例</figcaption>
  <div class="archive-files-root"><span class="archive-files-type">ZIP 归档包</span><span class="archive-file-name">物业服务采购_示例编号_公开招标公告_20260923.zip</span></div>
  <ul class="archive-files-tree">
    <li><span class="archive-file-name">00_归档清单.xlsx</span><span class="archive-file-detail">包含“归档概览”和“附件清单”两个工作表</span></li>
    <li><span class="archive-file-name">01_网页原文.pdf</span><span class="archive-file-detail">本次保存的公告原文</span></li>
    <li><span class="archive-file-name">02_附件/</span><span class="archive-file-detail">公告中识别并下载的公开附件</span>
      <ul>
        <li><span class="archive-file-name">001_采购需求.pdf</span></li>
        <li><span class="archive-file-name">002_项目附件.docx</span></li>
      </ul>
    </li>
  </ul>
</figure>

公告原文也可能保存为 `01_网页原文.jpeg`（图中以 PDF 为例）。接下来，先打开清单确认项目，再逐项查看原文和附件。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **还没有完成归档：** 请先按[第一次归档](/manual/first-archive/)完成操作，等到“已保存”后再开始核对。若归档失败，先查看归档详情中的提示，不能把已下载的部分附件当作本次已保存的归档包。
- **已经离开归档详情，或定位不到文件：** 可以从“归档历史”打开对应记录，再点击“在文件夹中显示”。若文件已移动或对应下载记录已被清理，请按[本地数据与文件保存](/manual/local-data/#locate-saved-archive)查找实际文件。

</details>

## 2. 打开归档清单，确认是你需要的项目 {#check-project}

用 Excel 或 WPS 打开 `00_归档清单.xlsx`，在窗口底部选择 **“归档概览”** 工作表。对照原公告，先检查下面几项：

<p class="table-hint">左右滑动表格，查看字段及核对方法。</p>

| 清单中的字段 | 需要核对什么 |
| --- | --- |
| 项目名称、项目编号 | 是否与本次需要保存的项目一致，避免混入名称相近的其他项目 |
| 标段/包号 | 公告涉及具体标段或采购包时，确认清单中的信息与原公告对应 |
| 公告标题、来源页面 | 是否对应你本次打开并归档的那份公告 |
| 网页原文 | 按这里记录的文件名，找到归档包中的公告原文 |
| 归档时间 | 确认这份资料是在什么时候归档的；这里记录的是归档时间，不是公告发布时间 |

<figure class="doc-shot" style="max-width: 600px; margin-inline: auto;">
  <a :href="withBase('/images/archive-output-overview.png')" target="_blank" rel="noopener" aria-label="查看归档概览完整截图">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="72 429 1450 350" width="600" role="img" aria-label="归档概览工作表列出项目名称、项目编号、标段或包号、公告标题、来源页面、网页原文及归档时间" style="display: block; max-width: 100%; height: auto;">
      <image :href="withBase('/images/archive-output-overview.png')" width="3022" height="1740" />
    </svg>
  </a>
  <figcaption>“归档概览”帮助你确认项目、公告来源和归档时间。点击图片可查看完整截图。</figcaption>
</figure>

<details class="custom-block details" open>
<summary>补充说明</summary>

- **“标段/包号”为空：** 先查看原公告是否写明了相关信息。字段留空不等于公告一定没有标段或采购包，仍需以原公告为准。
- **信息与原公告不一致：** 先确认打开的是本次归档包。若确实识别有误，可以[联系技术支持](/manual/support/)，提供公告网址、出错字段及对应截图。

</details>

## 3. 打开网页原文，检查公告内容 {#check-original}

确认项目无误后，回到解压后的文件夹，打开 `01_网页原文.pdf` 或 `01_网页原文.jpeg`。从头到尾查看一次，重点核对：

1. **公告是否对应。** 标题、项目名称和项目编号是否与清单及原公告一致。
2. **需要的正文是否已保存。** 按本次用途检查采购内容、时间要求、获取文件的方式等信息，留意是否缺少段落或表格。
3. **内容是否可以阅读。** 放大查看较小的文字和表格，确认没有影响阅读的空白、截断或模糊。

<details class="custom-block details" open>
<summary>补充说明</summary>

- **本地原文不会随网站更新：** 它保存的是本次归档时取得的公告内容。后续使用时，如需确认最新信息，请回到清单中的“来源页面”查看，并留意相关更正或补充公告。
- **原文打不开或内容异常：** 先从解压后的文件夹重新打开，再对照原公告确认异常位置。仍有问题时，可[联系技术支持](/manual/support/)，提供公告网址、文件格式及异常截图。

</details>

## 4. 对照附件清单，逐项打开文件 {#check-attachments}

### 按清单找到对应附件 {#match-files}

回到 `00_归档清单.xlsx`，在窗口底部切换到 **“附件清单”**。每一行对应一份附件，先看 **“原始文件名”** 确认它是什么，再按 **“归档文件名”** 到 `02_附件/` 中找到对应文件。

归档文件名前会添加 `001_`、`002_` 等序号，方便逐项查找。核对时，以清单中的“归档文件名”为准。

<figure class="doc-shot" style="max-width: 600px; margin-inline: auto;">
  <a :href="withBase('/images/archive-output-file-list.png')" target="_blank" rel="noopener" aria-label="查看附件清单完整截图">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="72 429 1260 198" width="600" role="img" aria-label="附件清单左侧依次显示序号、原始文件名和带序号的归档文件名" style="display: block; max-width: 100%; height: auto;">
      <image :href="withBase('/images/archive-output-file-list.png')" width="3022" height="1740" />
    </svg>
  </a>
  <figcaption>用“原始文件名”辨认附件，按“归档文件名”在文件夹中查找。点击图片可查看完整截图。</figcaption>
</figure>

### 打开附件，核对实际内容 {#read-files}

按清单顺序逐个打开附件，确认文件能正常阅读，内容属于本次项目，并检查需要的页面、表格和材料是否齐全。再回到原公告，对照附件链接与文件获取说明，确认是否还有本次需要另行取得的资料。

清单还记录了 **“文件类型”“来源地址”“文件大小”和“状态”**，可以帮助你对照文件。**“已完成”表示附件已下载完成，实际内容仍需要打开核对。**

<details class="custom-block details" open>
<summary>补充说明</summary>

- **看到 `02_附件_原网页无附件`：** 表示本次未识别到可直接下载的公开附件，不代表整个采购项目没有其他资料。公告要求通过其他平台、邮箱或现场获取的文件，仍需按原公告说明取得。
- **清单中的文件找不到：** 先确认已完整解压，并检查是否在本次的 `02_附件/` 文件夹中，再核对文件是否被移动或改名。
- **附件打不开，或与原公告不符：** 到原公告中打开对应附件，比较能否正常获取及阅读。原网站要求登录或验证时，先按其提示完成操作。仍有问题时，可[联系技术支持](/manual/support/)，提供公告网址、原始文件名和具体提示。
- **文件名与原网站略有不同：** 为便于保存，过长或包含不适合用于文件名的符号时，归档文件名会进行整理；可以通过清单中的原始名称和来源地址对应查找。

</details>

核对完成后，将清单、网页原文和附件一同留存。有关保存位置、备份和文件移动后的查找方法，可以继续查看[本地数据与文件保存](/manual/local-data/)。
