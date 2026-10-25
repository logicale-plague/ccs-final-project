<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: 'Article Image' },
  width: { type: String, default: '100%' },
  height: { type: String, default: '100%' },
  hoverScalePercent: { type: Number, default: 105 },
})

const imageStyle = computed(() => ({
  '--hover-scale': props.hoverScalePercent / 100,
  width: props.width,
  height: props.height,
}))
</script>

<template>
  <div
    class="image-container position-relative overflow-hidden border d-flex align-items-center justify-content-center shrink-0"
    :style="imageStyle"
  >
    <div class="image-zoom-wrapper w-100 h-100">
      <img
        :src="props.src"
        :alt="props.alt"
        class="w-100 h-100 object-fit-cover"
      />
    </div>

    <div
      class="image-overlay position-absolute top-0 start-0 w-100 h-100 pe-none"
      aria-hidden="true"
    />
  </div>
</template>

<style scoped>
.image-container {
  box-sizing: border-box;
  border-color: var(--border) !important;
}

.image-zoom-wrapper {
  transition: transform 300ms ease-out;
}

.image-zoom-wrapper img {
  display: block;
}

:global(.group:hover) .image-zoom-wrapper {
  transform: scale(var(--hover-scale, 1.05));
}

.image-overlay {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgb(0 0 0 / 80%) 100%
  );
  opacity: 1;
  transition: opacity 300ms ease;
}

:global(.group:hover) .image-overlay {
  opacity: 0.9;
}

@media (prefers-reduced-motion: reduce) {
  .image-zoom-wrapper,
  .image-overlay {
    transition: none;
  }
}
</style>