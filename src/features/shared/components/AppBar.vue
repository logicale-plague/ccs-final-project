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

  if (props.color && (props.color.startsWith('#') || props.color.startsWith('rgb'))) {
    styles.backgroundColor = props.color
  }

  styles.paddingLeft = `${props.paddingX}px`
  styles.paddingRight = `${props.paddingX}px`
  styles.paddingTop = `${props.paddingY}px`
  styles.paddingBottom = `${props.paddingY}px`

  return styles
})

const shadowClass = computed(() => {
  switch (props.elevation) {
    case 'lg':
      return 'shadow-lg'
    case 'md':
      return 'shadow'
    case 'none':
      return 'shadow-none'
    case 'sm':
    default:
      return 'shadow-sm'
  }
})

const colorClass = computed(() => {
  return props.color && props.color.startsWith('bg-') ? props.color : 'bg-body'
})
</script>

<template>
  <header
    :style="barStyle"
    :class="[
      'navbar navbar-expand custom-app-bar',
      colorClass,
      shadowClass,
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
}
</style>
