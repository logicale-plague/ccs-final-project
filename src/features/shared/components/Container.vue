<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'
import { parseSpacing, parseDimension } from '../utils/layout'

const props = defineProps({
  margin: { type: [Object, String, Number], default: null },
  padding: { type: [Object, String, Number], default: null },
  color: { type: String, default: '' },
  width: { type: [String, Number], default: null },
  height: { type: [String, Number], default: null },
  alignment: { type: String, default: '' },
  borderWidth: { type: [Number, String], default: null },
  borderColor: { type: String, default: '' },
  image: { type: String, default: '' },
  fit: { type: String, default: 'cover' },
  overlay: { type: String, default: '' },
})

const containerStyle = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}

  const w = parseDimension(props.width)
  if (w) styles.width = w

  const h = parseDimension(props.height)
  if (h) styles.height = h

  const p = parseSpacing(props.padding)
  if (p) styles.padding = p

  const m = parseSpacing(props.margin)
  if (m) styles.margin = m

  if (props.color && !props.color.startsWith('bg-')) {
    styles.backgroundColor = props.color
  }

  if (props.borderWidth !== null) {
    styles.borderWidth =
      typeof props.borderWidth === 'number' ? `${props.borderWidth}px` : props.borderWidth
    styles.borderStyle = 'solid'
  }

  if (props.borderColor && !props.borderColor.startsWith('border-')) {
    styles.borderColor = props.borderColor
    styles.borderStyle = 'solid'
  }

  return styles
})

const overlayStyle = computed(() => {
  if (!props.overlay) return {}

  return {
    backgroundColor: props.overlay,
  }
})

const imageStyle = computed(() => {
  /** @type {Record<string, string>} */
  const style = {
    objectFit: props.fit,
    width: '100%',
    height: '100%',
  }
  return style
})

const alignmentClass = computed(() => {
  if (!props.alignment) return ''

  switch (props.alignment) {
    case 'center':
      return 'd-flex justify-content-center align-items-center'
    case 'start':
      return 'd-flex justify-content-start align-items-start'
    case 'end':
      return 'd-flex justify-content-end align-items-end'
    default:
      return ''
  }
})

const colorClass = computed(() =>
  props.color.startsWith('bg-') ? props.color : '',
)

const borderClass = computed(() => {
  if (props.borderColor.startsWith('border-')) {
    return props.borderColor
  }

  return props.borderWidth !== null ? 'border' : ''
})
</script>

<template>
  <div
    :style="containerStyle"
    :class="[
      'custom-container position-relative overflow-hidden',
      colorClass,
      alignmentClass,
      borderClass,
    ]"
  >
    <img
      v-if="image"
      :src="image"
      :style="imageStyle"
      class="position-absolute top-0 start-0 w-100 h-100"
      alt=""
    />

    <div
      v-if="overlay"
      :style="overlayStyle"
      class="position-absolute top-0 start-0 w-100 h-100 z-1"
      aria-hidden="true"
    />

    <div class="position-relative w-100 h-100 z-2">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.custom-container {
  box-sizing: border-box;
}
</style>
