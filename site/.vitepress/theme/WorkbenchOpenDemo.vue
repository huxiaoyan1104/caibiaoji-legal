<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { withBase } from 'vitepress';

const playing = ref(false);
const animation = withBase('/images/edge-open-workbench.gif');
const poster = withBase('/images/edge-open-workbench-poster.png');
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
  <figure class="doc-shot workbench-open-demo">
    <a :href="animation" target="_blank" rel="noopener" aria-label="查看打开工作台动图大图">
      <img v-if="playing" id="workbench-open-animation" key="animation" :src="animation"
        width="720" height="616" loading="lazy"
        alt="Edge 实录：在公告详情页点击工具栏的采标集图标，随后打开工作台，显示当前页面可归档。" />
      <img v-else id="workbench-open-animation" key="poster" :src="poster"
        width="720" height="616" loading="lazy"
        alt="Edge 工作台已打开，显示当前页面可归档和一键归档下载按钮。" />
    </a>
    <figcaption>
      <div class="demo-controls">
        <button type="button" aria-controls="workbench-open-animation" @click="playing = !playing">
          {{ playing ? '停止演示' : '播放演示' }}
        </button>
        <span>点击图片可查看大图</span>
      </div>
      <span>Edge（macOS）示例：点击工具栏图标，打开工作台。</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.vp-doc .workbench-open-demo { max-width: 440px; margin-inline: auto; }
.demo-controls { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 4px; }
.demo-controls button { min-height: 32px; padding: 3px 8px; border-radius: 4px; color: var(--vp-c-brand-1); font-size: 13px; font-weight: 600; cursor: pointer; }
.demo-controls button:hover { background: var(--vp-c-brand-soft); }
.demo-controls button:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
</style>
