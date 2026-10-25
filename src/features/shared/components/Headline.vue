<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { ImageContainer, Row } from './index.js'

const props = defineProps({
  title: { type: String, default: 'Article Title'},
  excerpt: { type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  publishDate: { type: String, default: 'January 1, 2000 · 00:00 AM'},
  src: { type: String, default: ''},
  borderColor: { type: String, default: '#d4d4d4'},
})

const emit = defineEmits(['view'])

function viewArticle() {
  emit('view')
}

function handleKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    viewArticle()
  }
}
</script>

<template>
  <article
    class="headline-card overflow-hidden"
    :style="{ borderColor }"
    role="button"
    tabindex="0"
    @click="viewArticle"
    @keydown="handleKeydown"
  >
    <div class="headline-image">
      <ImageContainer
        :src="src"
        :alt="title"
        width="100%"
        height="360px"
      />
    </div>

    <div class="headline-content d-flex flex-column align-items-start gap-2 p-2">
      <h2 class="headline-title mb-0">
        {{ title }}
      </h2>

      <p class="headline-excerpt mb-0">
        {{ excerpt }}
      </p>

      <Row 
        :spacing="4"
      >
        <Icon
            icon="oi:clock" 
            :width="10"
            :height="10"
        />
        <p class="headline-date mb-0">
            {{ publishDate }}
        </p>
      </Row>
    </div>
  </article>
</template>

<style scoped>
.headline-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  border: 1px solid;
  cursor: pointer;
  transition: background-color 200ms ease;
}

.headline-card:hover {
  background-color: var(--muted);
}

.headline-card:hover :deep(.image-zoom-wrapper),
.headline-card:focus-visible :deep(.image-zoom-wrapper) {
  transform: scale(1.08);
}

.headline-card:hover :deep(.image-overlay),
.headline-card:focus-visible :deep(.image-overlay) {
  opacity: 0.9;
}

.headline-card:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}

.headline-image {
  width: 100%;
  height: 360px;
  overflow: hidden;
}

.headline-content {
  position: relative;
  min-width: 0;
  background-color: var(--background);
}

.headline-title {
  color: var(--foreground);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  transition: color 200ms ease;
}

.headline-excerpt {
  display: -webkit-box;
  overflow: hidden;
  color: var(--muted-foreground);
  font-size: 14px;
  font-weight: 400;
  -webkit-box-orient: vertical;
  line-clamp: 2;
}

.headline-date {
  color: var(--muted-foreground);
  font-size: 10px;
}

.headline-card:hover .headline-title,
.headline-card:focus-visible .headline-title {
  text-decoration: underline;
}

@media (prefers-reduced-motion: reduce) {
  .headline-card,
  .headline-title {
    transition: none;
  }
}
</style>