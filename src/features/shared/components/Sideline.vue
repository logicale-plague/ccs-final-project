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
    class="sideline-card d-flex flex-row align-items-center border"
    :style="{ borderColor }"
    role="button"
    tabindex="0"
    @click="viewArticle"
    @keydown="handleKeydown"
  >
    <div class="sideline-image shrink-0">
      <ImageContainer
        :src="src"
        :alt="title"
        width="100px"
        height="100%"
      />
    </div>

    <div
      class="sideline-content d-flex flex-column align-items-start justify-content-center gap-1 grow"
    >
      <h3 class="sideline-title mb-0">
        {{ title }}
      </h3>

      <Row 
        :spacing="4"
      >
        <Icon
            icon="oi:clock" 
            :width="10"
            :height="10"
        />
        <p class="sideline-date mb-0">
            {{ publishDate }}
        </p>
      </Row>
    </div>
  </article>
</template>

<style scoped>
.sideline-card {
    background-color: var(--background);
  width: 100%;
  min-width: 0;
  gap: 0.75rem;
  cursor: pointer;
  transition: background-color 200ms ease;
  padding-right: 32px;
}

.sideline-card:hover {
  background-color: var(--muted);
}

.sideline-card:hover :deep(.image-zoom-wrapper),
.sideline-card:focus-visible :deep(.image-zoom-wrapper) {
  transform: scale(1.08);
}

.sideline-card:hover :deep(.image-overlay),
.sideline-card:focus-visible :deep(.image-overlay) {
  opacity: 0.9;
}

.sideline-card:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}

.sideline-image {
  width: 120px;
  height: 80px;
}

.sideline-content {
  min-width: 0;
}

.sideline-title {
  display: -webkit-box;
  overflow: hidden;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  transition: color 200ms ease;
}

.sideline-card:hover .sideline-title,
.sideline-card:focus-visible .sideline-title {
  text-decoration: underline;
}

.sideline-date {
  color: var(--muted-foreground);
  font-size: 10px;
}

@media (prefers-reduced-motion: reduce) {
  .sideline-card,
  .sideline-title {
    transition: none;
  }
}
</style>