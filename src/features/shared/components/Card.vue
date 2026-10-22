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

  if (props.color && (props.color.startsWith('#') || props.color.startsWith('rgb'))) {
    styles.backgroundColor = props.color
  }

  if (props.borderWidth !== null) {
    styles.borderWidth =
      typeof props.borderWidth === 'number' ? `${props.borderWidth}px` : props.borderWidth
    styles.borderStyle = 'solid'
  }
  if (
    props.borderColor &&
    (props.borderColor.startsWith('#') || props.borderColor.startsWith('rgb'))
  ) {
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
  if (props.borderColor && props.borderColor.startsWith('border-')) {
    return props.borderColor
  }
  return props.borderWidth !== null ? 'border' : 'border-0'
})
</script>

<template>
  <div :style="cardStyle" :class="['card border-0', shadowClass, colorClass, borderClass]">
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
