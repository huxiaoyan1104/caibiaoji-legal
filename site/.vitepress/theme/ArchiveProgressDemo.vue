<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { withBase } from 'vitepress';

const playing = ref(false);
const animation = withBase('/images/archive-progress.gif');
const poster = withBase('/images/archive-progress-poster.png');
let motionPreference;

function handleMotionPreference(event) {
  if (event.matches) playing.value = false;
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  playing.value = !motionPreference.matches;
  motionPreference.addEventListener('change', handleMotionPreference);
});

onBeforeUnmount(() => {
  motionPreference?.removeEventListener('change', handleMotionPreference);
});
</script>

<template>
  <figure class="doc-shot archive-progress-demo">
    <a :href="animation" target="_blank" rel="noopener" aria-label="查看归档进度动图大图">
      <img v-if="playing" id="archive-progress-animation" key="animation" :src="animation"
        width="720" height="828" loading="lazy"
        alt="真实归档录屏：从正在下载文件，到正在保存归档包，最后显示已保存和在文件夹中显示入口。" />
      <img v-else id="archive-progress-animation" key="poster" :src="poster"
        width="720" height="828" loading="lazy"
        alt="归档详情显示已保存，可以点击在文件夹中显示找到归档包。" />
    </a>
    <figcaption>
      <div class="demo-controls">
        <button type="button" aria-controls="archive-progress-animation" @click="playing = !playing">
          {{ playing ? '停止演示' : '播放演示' }}
        </button>
        <span>点击图片可查看大图</span>
      </div>
      <span>录屏节选，已放慢播放；实际归档耗时以本次任务为准。</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.archive-progress-demo { max-width: 440px; margin-inline: auto; }
.demo-controls { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 4px; }
.demo-controls button { min-height: 32px; padding: 3px 8px; border-radius: 4px; color: var(--vp-c-brand-1); font-size: 13px; font-weight: 600; cursor: pointer; }
.demo-controls button:hover { background: var(--vp-c-brand-soft); }
.demo-controls button:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
</style>
