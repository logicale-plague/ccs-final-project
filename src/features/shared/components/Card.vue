<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'
import { parseSpacing, parseDimension } from '../utils/layout.js'

const props = defineProps({
  margin: { type: [Object, String, Number], default: null },
  padding: { type: [Object, String, Number], default: null },
  shadow: { type: String, default: 'sm' },
  color: { type: String, default: '' },
  borderRadius: { type: [Number, String], default: null },
  borderWidth: { type: [Number, String], default: null },
  borderColor: { type: String, default: '' },
  width: { type: [String, Number], default: null },
  height: { type: [String, Number], default: null },
})

const emit = defineEmits(['click'])

const cardStyle = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}

  const w = parseDimension(props.width)
  if (w) styles.width = w

  const h = parseDimension(props.height)
  if (h) styles.height = h

  if (props.borderRadius !== null)
    styles.borderRadius =
      typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius

  const p = parseSpacing(props.padding)
  if (p) styles.padding = p

  const m = parseSpacing(props.margin)
  if (m) styles.margin = m

  if (props.color && !props.color.startsWith('bg-')) {
    styles.backgroundColor = props.color
  }

  if (props.borderWidth !== null) {
    styles.borderWidth =
      typeof props.borderWidth === 'number'
        ? `${props.borderWidth}px`
        : props.borderWidth

    styles.borderStyle = 'solid'
  }

  if (props.borderColor && !props.borderColor.startsWith('border-')) {
    styles.borderColor = props.borderColor
    styles.borderStyle = 'solid'
  }

  return styles
})

const shadowClass = computed(() => {
  switch (props.shadow) {
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
  return props.color && props.color.startsWith('bg-') ? props.color : ''
})

const borderClass = computed(() => {
  if (props.borderColor.startsWith('border-')) {
    return props.borderColor
  }

  return props.borderWidth !== null || props.borderColor
    ? 'border'
    : 'border-0'
})
</script>

<template>
  <div 
    :style="cardStyle" 
    :class="[
        'card card-hover', 
        shadowClass, 
        colorClass, 
        borderClass
      ]"
    @click="(e) => emit('click', e)"
  >
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card-hover {
  transition:
    box-shadow var(--transition-normal),
    transform var(--transition-normal);
  cursor: pointer;
}

.card-hover.shadow-sm {
  box-shadow: var(--shadow-sm) !important;
}

.card-hover.shadow {
  box-shadow: var(--shadow-md) !important;
}

.card-hover.shadow-lg {
  box-shadow: var(--shadow-lg) !important;
}

.card-hover:hover {
  box-shadow: var(--shadow-lg) !important;
}

.card-hover :deep(.program-logo) {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-normal);
}

.card-hover:hover :deep(.program-logo) {
  transform: scale(1.1);
}

@media (prefers-reduced-motion: reduce) {
  .card-hover,
  .card-hover :deep(.program-logo) {
    transition: none;
  }
}
</style>
