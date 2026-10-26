```vue
<script setup>
import { Scaffold, AppBar, Container, Row, TabButton } from '@/features/shared/components'
import { useRoute } from 'vue-router'
import { navigateTo } from '@/router/index.js'
import { onMounted, onUnmounted, ref } from 'vue'
import FooterSection from './00-home/components/FooterSection.vue'

const route = useRoute()

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about-us' },
  {
    label: 'Academic Programs',
    to: 'academic-programs',
    children: [
      { label: 'Computer Science', to: 'comp-sci' },
      { label: 'Information Technology', to: 'info-tech' },
      { label: 'Digital Media and Interactive Arts', to: 'media-arts' },
      { label: 'Library Information Science', to: 'lib-sci' },
    ],
  },
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
            <div
              v-for="item in navItems"
              :key="item.label"
              class="nav-item"
              :class="{ 'nav-item-with-children': item.children }"
            >
              <TabButton
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

              <div v-if="item.children" class="nav-dropdown">
                <button
                  v-for="child in item.children"
                  :key="child.to"
                  type="button"
                  class="nav-dropdown-item"
                  @click="navigateTo(child.to)"
                >
                  {{ child.label }}
                </button>
              </div>
            </div>
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

    <template #bottomNavigationBar>
      <FooterSection />
    </template>
  </Scaffold>
</template>

<style scoped>
.nav-item {
  position: relative;
}

.nav-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  min-width: 240px;
  padding: 8px;
  background-color: var(--app-bar-background);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -8px);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);
}

.nav-item-with-children:hover .nav-dropdown,
.nav-item-with-children:focus-within .nav-dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.nav-dropdown-item {
  width: 100%;
  padding: 10px 12px;
  color: var(--app-bar-foreground);
  font: inherit;
  text-align: left;
  white-space: nowrap;
  background: transparent;
  border: 0;
  border-radius: calc(var(--radius) / 2);
  cursor: pointer;
}

.nav-dropdown-item:hover,
.nav-dropdown-item:focus-visible {
  color: var(--primary-foreground);
  background-color: var(--primary);
  outline: none;
}

@media (prefers-reduced-motion: reduce) {
  .nav-dropdown {
    transition: none;
  }
}
</style>
