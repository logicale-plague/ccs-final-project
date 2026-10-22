<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'
import { parseSpacing } from '../utils/layout.js'

const props = defineProps({
  margin: { type: [Object, String, Number], default: null },
  padding: { type: [Object, String, Number], default: null },
  spacing: { type: [Number, String], default: null },
  mainAxisAlignment: { type: String, default: 'start' },
  crossAxisAlignment: { type: String, default: 'center' },
  width: { type: [String, Number], default: null },
  height: { type: [String, Number], default: null },
})

const rowStyle = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}

  if (props.width !== null) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  if (props.height !== null) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }
  if (props.spacing !== null) {
    styles.gap = typeof props.spacing === 'number' ? `${props.spacing}px` : props.spacing
  }

  const p = parseSpacing(props.padding)
  if (p) styles.padding = p

  const m = parseSpacing(props.margin)
  if (m) styles.margin = m

  return styles
})

const mainAxisClass = computed(() => {
  switch (props.mainAxisAlignment) {
    case 'center':
      return 'justify-content-center'
    case 'end':
      return 'justify-content-end'
    case 'between':
      return 'justify-content-between'
    case 'around':
      return 'justify-content-around'
    case 'start':
    default:
      return 'justify-content-start'
  }
})

const crossAxisClass = computed(() => {
  switch (props.crossAxisAlignment) {
    case 'start':
      return 'align-items-start'
    case 'end':
      return 'align-items-end'
    case 'stretch':
      return 'align-items-stretch'
    case 'center':
    default:
      return 'align-items-center'
  }
})
</script>

<template>
  <div :style="rowStyle" :class="['d-flex flex-row', mainAxisClass, crossAxisClass]">
    <slot />
  </div>
</template>
