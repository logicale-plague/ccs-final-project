<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Solid Button' },
  fullWidth: { type: Boolean, default: false },
  fullHeight: { type: Boolean, default: false },
  fontColor: { type: String, default: '' },
  fontSize: { type: Number, default: 12 },
  bgColor: { type: String, default: '' },
  hoverShadowColor: { type: String, default: '' },
  borderRadius: { type: Number, default: 6 },
})

const emit = defineEmits(['click'])

const buttonStyles = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}

  if (props.fontSize !== undefined) styles['--btn-font-size'] = `${props.fontSize}px`
  if (props.borderRadius !== undefined) styles['--btn-border-radius'] = `${props.borderRadius}px`
  if (props.fontColor) styles['--btn-font-color'] = props.fontColor
  if (props.bgColor) styles['--btn-bg'] = props.bgColor
  if (props.hoverShadowColor) styles['--btn-hover-shadow'] = props.hoverShadowColor

  return styles
})
</script>

<template>
  <button
    type="button"
    :style="buttonStyles"
    :class="[
      props.fullWidth ? 'w-100' : 'w-auto',
      props.fullHeight ? 'h-100 align-self-stretch' : 'h-auto',
      'solid-button btn p-2 d-flex flex-row align-items-center justify-content-center gap-2',
    ]"
    @click="(e) => emit('click', e)"
  >
    <span class="solid-button-label fw-medium text-nowrap">
      {{ props.label }}
    </span>
  </button>
</template>

<style scoped>
.solid-button {
  background-color: var(--btn-bg, #2e7d4f);
  border-radius: var(--btn-border-radius, 6px);
  border: none;
}

.solid-button:hover {
  box-shadow: var(--btn-hover-shadow, -2px 2px 4px color-mix(in srgb, #0d0f0d, 25%, transparent));
}

.solid-button-label {
  font-size: var(--btn-font-size, 12px);
  color: var(--btn-font-color, #f9f6f0);
}
</style>
