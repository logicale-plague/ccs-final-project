```vue
<script setup>
import { Scaffold, AppBar, Container, Row, TabButton } from '@/features/shared/components'
import { useRoute } from 'vue-router'
import { navigateTo } from '@/router/index.js'
import { onMounted, onUnmounted, ref } from 'vue'

const route = useRoute()

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about-us' },
  { label: 'Academic Programs', to: 'academic-programs' },
  { label: 'Faculty and Staff', to: 'faculty-and-staff' },
  { label: 'Event Calendar', to: 'event-calendar' },
  { label: 'Contact Us', to: 'contact-us' },
]

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 15
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Scaffold>
    <template #appBar>
      <AppBar
        title="College of Computer Studies"
        :fixed="true"
        :color="isScrolled ? 'var(--app-bar-background)' : 'transparent'"
        :textColor="isScrolled ? 'var(--app-bar-foreground)' : '#ffffff'"
        :elevation="isScrolled ? 'md' : 'none'"
        :bordered="isScrolled"
        :paddingX="96"
        :paddingY="isScrolled ? 8 : 16"
      >
        <template #leading>
          <img
            src="@/assets/logos/cropped-CCS-Logov-new.png"
            alt="College of Computer Studies logo"
            :width="isScrolled ? 48 : 60"
            :height="isScrolled ? 48 : 60"
          />
        </template>

        <template #actions>
          <Row :spacing="32">
            <TabButton
              v-for="item in navItems"
              :key="item.to"
              :label="item.label"
              :bottomBarColor="route.name === item.to ? 'var(--primary)' : 'transparent'"
              bottomBarHoverColor="var(--primary)"
              :fontColor="
                route.name === item.to
                  ? 'var(--primary)'
                  : isScrolled
                    ? 'var(--app-bar-foreground)'
                    : '#ffffff'
              "
              @click="navigateTo(item.to)"
            />
          </Row>
        </template>
      </AppBar>
    </template>

    <Container>
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" :key="route.fullPath" />
        </KeepAlive>
      </RouterView>
    </Container>
  </Scaffold>
</template>
