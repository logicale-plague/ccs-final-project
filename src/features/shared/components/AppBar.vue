<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  color: { type: String, default: '' }, // e.g., 'bg-white' or hex color
  textColor: { type: String, default: '' }, // Title text color
  elevation: { type: String, default: 'sm' }, // 'none', 'sm', 'md', 'lg'
  fixed: { type: Boolean, default: false }, // Stays at top on scroll
  bordered: { type: Boolean, default: true },
  paddingX: { type: Number, default: 3 },
  paddingY: { type: Number, default: 2 },
})

const barStyle = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}

  styles.paddingLeft = `${props.paddingX}px`
  styles.paddingRight = `${props.paddingX}px`
  styles.paddingTop = `${props.paddingY}px`
  styles.paddingBottom = `${props.paddingY}px`

  if (props.color && !props.color.startsWith('bg-')) {
    styles.backgroundColor = props.color
  }

  if (props.textColor) {
    styles.color = props.textColor
  }

  return styles
})

const shadowStyle = computed(() => {
  switch (props.elevation) {
    case 'lg':
      return { boxShadow: 'var(--shadow-lg)' }
    case 'md':
      return { boxShadow: 'var(--shadow-md)' }
    case 'none':
      return { boxShadow: 'none' }
    case 'sm':
    default:
      return { boxShadow: 'var(--shadow-sm)' }
  }
})
</script>

<template>
  <header
    :style="{ ...barStyle, ...shadowStyle }"
    :class="[
      'navbar navbar-expand custom-app-bar',
      bordered ? 'border-bottom' : '',
      fixed ? 'fixed-top' : '',
    ]"
  >
    <div class="container-fluid d-flex align-items-center justify-content-between p-0">
      <div class="d-flex align-items-center gap-3">
        <slot name="leading" />

        <slot name="title">
          <span
            class="navbar-brand mb-0 h5 fw-semibold"
            :style="{ color: props.textColor || undefined }"
          >
            {{ props.title }}
          </span>
        </slot>
      </div>

      <div class="d-flex align-items-center gap-2">
        <slot name="actions" />
        <slot name="trailing" />
      </div>
    </div>
  </header>
</template>


<style scoped>
.custom-app-bar {
  z-index: 1030;
  transition:
    background-color var(--transition-normal),
    padding var(--transition-normal),
    box-shadow var(--transition-normal);
}

.custom-app-bar .navbar-brand,
.custom-app-bar img {
  transition:
    color var(--transition-normal),
    width var(--transition-normal),
    height var(--transition-normal);
}
</style>
