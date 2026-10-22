<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Tab Button' },
  fontColor: { type: String, default: '' },
  hoverFontColor: { type: String, default: '' },
  fontSize: { type: Number, default: 14 },
  fontWeight: { type: [Number, String], default: '700' },
  topBarColor: { type: String, default: '' },
  topBarHoverColor: { type: String, default: '' },
  topBarHeight: { type: Number, default: 4 },
  bottomBarColor: { type: String, default: '' },
  bottomBarHoverColor: { type: String, default: '' },
  bottomBarHeight: { type: Number, default: 4 },
  paddingX: { type: Number, default: 16 },
  paddingY: { type: Number, default: 8 },
})

const emit = defineEmits(['click'])

const buttonStyles = computed(() => {
  /** @type {Record<string, string>} */
  const styles = {
    '--tab-padding-x': `${props.paddingX}px`,
    '--tab-padding-y': `${props.paddingY}px`,
    '--tab-font-size': `${props.fontSize}px`,
    '--tab-font-weight':
      typeof props.fontWeight === 'number' ? `${props.fontWeight}` : props.fontWeight,
    '--tab-top-bar-height': `${props.topBarHeight}px`,
    '--tab-bottom-bar-height': `${props.bottomBarHeight}px`,
  }

  if (props.fontColor) styles['--tab-font-color'] = props.fontColor
  if (props.hoverFontColor) styles['--tab-hover-font-color'] = props.hoverFontColor

  if (props.topBarColor) styles['--tab-top-bar-color'] = props.topBarColor
  if (props.topBarHoverColor) styles['--tab-top-bar-hover-color'] = props.topBarHoverColor

  if (props.bottomBarColor) styles['--tab-bottom-bar-color'] = props.bottomBarColor
  if (props.bottomBarHoverColor) styles['--tab-bottom-bar-hover-color'] = props.bottomBarHoverColor

  return styles
})
</script>

<template>
  <button
    type="button"
    :style="buttonStyles"
    class="tab-button group w-auto h-auto d-flex flex-column align-items-center justify-content-center cursor-pointer border-0 bg-transparent p-0"
    @click="(e) => emit('click', e)"
  >
    <div
      class="tab-top-bar w-100 d-flex flex-row align-items-start justify-content-start transition-all"
    />

    <span class="tab-label w-100 text-nowrap transition-all">
      {{ props.label }}
    </span>

    <div
      class="tab-bottom-bar w-100 d-flex flex-row align-items-start justify-content-start transition-all"
    />
  </button>
</template>

<style scoped>
.tab-button {
  padding-left: var(--tab-padding-x, 16px);
  padding-right: var(--tab-padding-x, 16px);
  padding-top: var(--tab-padding-y, 8px);
  padding-bottom: var(--tab-padding-y, 8px);
  gap: 8px;
}

.tab-top-bar {
  height: var(--tab-top-bar-height, 4px);
  background-color: var(--tab-top-bar-color, transparent);
  transition: background-color 0.2s ease-in;
}
.tab-button:hover .tab-top-bar {
  background-color: var(--tab-top-bar-hover-color, transparent);
}

.tab-label {
  font-size: var(--tab-font-size, 14px);
  font-weight: var(--tab-font-weight, 700);
  color: var(--tab-font-color, var(--foreground, #000000));
  transition: color 0.2s ease-in;
}
.tab-button:hover .tab-label {
  color: var(--tab-hover-font-color, var(--tab-font-color, var(--foreground, #000000)));
}

.tab-bottom-bar {
  height: var(--tab-bottom-bar-height, 4px);
  background-color: var(--tab-bottom-bar-color, transparent);
  transition: background-color 0.2s ease-in;
}
.tab-button:hover .tab-bottom-bar {
  background-color: var(--tab-bottom-bar-hover-color, #2e7d4f);
}
</style>
