<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: [String, Number], default: '' },
  size: { type: [Number, String], default: null },
  weight: { type: [Number, String], default: '' },
  color: { type: String, default: '' },
  align: { type: String, default: 'start' },
})

const textStyle = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}
  if (props.size !== null) {
    styles.fontSize = typeof props.size === 'number' ? `${props.size}px` : props.size
  }
  if (props.weight !== '') {
    styles.fontWeight = typeof props.weight === 'number' ? `${props.weight}` : props.weight
  }
  if (props.color && (props.color.startsWith('#') || props.color.startsWith('rgb'))) {
    styles.color = props.color
  }
  return styles
})

const alignClass = computed(() => {
  switch (props.align) {
    case 'center':
      return 'text-center'
    case 'end':
      return 'text-end'
    case 'start':
    default:
      return 'text-start'
  }
})

const colorClass = computed(() => {
  return props.color && props.color.startsWith('text-') ? props.color : ''
})
</script>

<template>
  <span :style="textStyle" :class="['custom-text', alignClass, colorClass]">
    <slot>{{ value }}</slot>
  </span>
</template>
