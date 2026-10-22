<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  backgroundColor: { type: String, default: '' },
})
</script>

<template>
  <div
    class="min-vh-100 d-flex flex-column app-scaffold"
    :style="backgroundColor ? { backgroundColor } : {}"
  >
    <header>
      <slot name="appBar" />
    </header>

    <main class="grow w-100">
      <slot />
    </main>

    <slot name="bottomNavigationBar" />
  </div>
</template>

<style scoped>
.app-scaffold {
  box-sizing: border-box;
}
</style>
