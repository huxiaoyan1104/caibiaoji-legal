<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { documentationGroups } from '../documentation.mjs';

const { frontmatter, theme } = useData();
const articles = documentationGroups.flatMap((group) => group.items);
const hasPendingArticles = articles.some((item) => !item.ready);
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-before>
      <a v-if="theme.domestic" class="all-projects" href="/" target="_self">全部项目</a>
    </template>
    <template #nav-screen-content-after>
      <a v-if="theme.domestic" class="all-projects-mobile" href="/" target="_self">返回全部项目</a>
    </template>
    <template #sidebar-nav-before>
      <p class="directory-note">文档目录 · {{ documentationGroups.length }} 组 {{ articles.length }} 篇<br>{{ hasPendingArticles ? '“待编写”条目可查看内容范围' : '按主题查找使用说明' }}</p>
    </template>
    <template #doc-before>
      <p v-if="frontmatter.category" class="article-category">{{ frontmatter.category }}</p>
    </template>
    <template #doc-footer-before>
      <div v-if="frontmatter.updatedAt" class="article-meta">
        文档更新于 {{ frontmatter.updatedAt }}<span v-if="frontmatter.appliesTo"> · {{ frontmatter.appliesTo }}</span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
