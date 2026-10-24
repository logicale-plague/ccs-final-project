<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Outlined Button' },
  fullWidth: { type: Boolean, default: false },
  fullHeight: { type: Boolean, default: false },
  fontColor: { type: String, default: '' },
  hoverFontColor: { type: String, default: '' },
  fontSize: { type: Number, default: 12 },
  borderColor: { type: String, default: '' },
  hoverBorderColor: { type: String, default: '' },
  borderWidth: { type: Number, default: 1 },
  bgColor: { type: String, default: '' },
  hoverBgColor: { type: String, default: '' },
  hoverShadowColor: { type: String, default: '' },
  borderRadius: { type: Number, default: 6 },
})

const emit = defineEmits(['click'])

const buttonStyles = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {}

  if (props.fontSize !== undefined) styles['--btn-font-size'] = `${props.fontSize}px`
  if (props.borderRadius !== undefined) styles['--btn-border-radius'] = `${props.borderRadius}px`
  if (props.borderWidth !== undefined) styles['--btn-border-width'] = `${props.borderWidth}px`

  if (props.fontColor) styles['--btn-font-color'] = props.fontColor
  if (props.hoverFontColor) styles['--btn-hover-font-color'] = props.hoverFontColor

  if (props.borderColor) styles['--btn-border-color'] = props.borderColor
  if (props.hoverBorderColor) styles['--btn-hover-border-color'] = props.hoverBorderColor

  if (props.bgColor) styles['--btn-bg'] = props.bgColor
  if (props.hoverBgColor) styles['--btn-hover-bg'] = props.hoverBgColor

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
      'outlined-button btn px-4 py-2 d-flex flex-row align-items-center justify-content-center gap-2 transition-all cursor-pointer',
    ]"
    @click="(e) => emit('click', e)"
  >
    <span class="outlined-button-label fw-medium text-nowrap transition-colors">
      {{ props.label }}
    </span>
  </button>
</template>

<style scoped>
.outlined-button {
  background-color: var(--btn-bg, transparent);
  border-style: solid;
  border-width: var(--btn-border-width, 1px);
  border-color: var(--btn-border-color, var(--border, #52525b));
  border-radius: var(--btn-border-radius, 6px);
  transition: all 0.2s ease-in;
}

.outlined-button:hover {
  background-color: var(
    --btn-hover-bg,
    color-mix(in srgb, var(--btn-border-color, #52525b) 10%, transparent)
  );
  border-color: var(--btn-hover-border-color, var(--btn-border-color, var(--border, #52525b)));
  box-shadow: var(
    --btn-hover-shadow,
    -2px 2px 4px color-mix(in srgb, var(--foreground, #0d0f0d) 15%, transparent)
  );
}

.outlined-button-label {
  font-size: var(--btn-font-size, 12px);
  color: var(--btn-font-color, var(--foreground, #0d0f0d));
  transition: color 0.2s ease-in;
}

.outlined-button:hover .outlined-button-label {
  color: var(--btn-hover-font-color, var(--btn-font-color, var(--foreground, #0d0f0d)));
}
</style>
