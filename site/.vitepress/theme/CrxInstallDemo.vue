<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { withBase } from 'vitepress';

const playing = ref(false);
const animation = withBase('/images/360-crx-install.gif');
const poster = withBase('/images/360-crx-install-poster.png');
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
  <figure class="doc-shot crx-install-demo">
    <a :href="animation" target="_blank" rel="noopener" aria-label="查看 360 离线安装动图大图">
      <img v-if="playing" id="crx-install-animation" key="animation" :src="animation"
        width="960" height="540" loading="lazy"
        alt="Windows 360 实录：将 CRX 文件拖入扩展程序页面，点击添加，列表中出现已启用的采标集。" />
      <img v-else id="crx-install-animation" key="poster" :src="poster"
        width="960" height="540" loading="lazy"
        alt="360 扩展程序列表中显示采标集 1.5.0，右下角开关已开启。" />
    </a>
    <figcaption>
      <div class="demo-controls">
        <button type="button" aria-controls="crx-install-animation" @click="playing = !playing">
          {{ playing ? '停止演示' : '播放演示' }}
        </button>
        <span>点击图片可查看大图</span>
      </div>
      <span>360（Windows）示例：拖入安装包 → 点击“添加” → 确认安装完成。</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.vp-doc .crx-install-demo { max-width: 440px; margin-inline: auto; }
.demo-controls { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 4px; }
.demo-controls button { min-height: 32px; padding: 3px 8px; border-radius: 4px; color: var(--vp-c-brand-1); font-size: 13px; font-weight: 600; cursor: pointer; }
.demo-controls button:hover { background: var(--vp-c-brand-soft); }
.demo-controls button:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
</style>
