```vue
<script setup>
import { Scaffold, AppBar, Container, Row, TabButton } from '@/features/shared/components'
import { useRoute } from 'vue-router'
import { navigateTo } from '@/router/index.js'
import { onMounted, onUnmounted, ref } from 'vue'
import FooterSection from './00-home/components/FooterSection.vue'

const route = useRoute()

const navItems = [
  { label: 'Academic Programs', to: 'academic-programs' },
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

const aboutUsItems = [
  { label: 'History', to: { name: 'about-history' } },
  { label: 'Mission and Vision', to: { name: 'about-vision-and-mission' } },
  { label: 'Message of the Dean', to: { name: 'about-message-of-the-dean' } },
  { label: 'Linkages', to: { name: 'about-linkages' } },
  { label: 'News and Updates', to: { name: 'about-news-and-updates' } },
]

const isScrolled = ref(false)
const isAboutMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 15
}

function toggleAboutMenu() {
  isAboutMenuOpen.value = !isAboutMenuOpen.value
}

function closeAboutMenu() {
  isAboutMenuOpen.value = false
}

function handleDocumentClick(event) {
  if (!event.target.closest('.about-nav-item')) {
    closeAboutMenu()
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeAboutMenu()
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
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
              label="Home"
              :bottomBarColor="route.name === 'home' ? 'var(--primary)' : 'transparent'"
              bottomBarHoverColor="var(--primary)"
              :fontColor="
                route.name === 'home'
                  ? 'var(--primary)'
                  : isScrolled
                    ? 'var(--app-bar-foreground)'
                    : '#ffffff'
              "
              @click="navigateTo('home')"
            />

            <div class="about-nav-item position-relative">
              <TabButton
                label="About Us"
                :bottomBarColor="route.name === 'about-us' ? 'var(--primary)' : 'transparent'"
                bottomBarHoverColor="var(--primary)"
                :fontColor="
                  route.name === 'about-us'
                    ? 'var(--primary)'
                    : isScrolled
                      ? 'var(--app-bar-foreground)'
                      : '#ffffff'
                "
                aria-haspopup="true"
                :aria-expanded="isAboutMenuOpen"
                @click="toggleAboutMenu"
              />

              <div v-if="isAboutMenuOpen" class="about-dropdown" role="menu">
                <RouterLink
                  v-for="item in aboutUsItems"
                  :key="item.label"
                  :to="item.to"
                  class="about-dropdown-link"
                  role="menuitem"
                  @click="closeAboutMenu"
                >
                  {{ item.label }}
                </RouterLink>
              </div>
            </div>

            <TabButton
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
.about-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1040;
  min-width: 220px;
  padding: 8px 0;
  border: 1px solid var(--border);
  border-radius: 6px;
  background-color: var(--background);
  box-shadow: var(--shadow-md);
}

.about-dropdown-link {
  display: block;
  padding: 10px 16px;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.about-dropdown-link:hover,
.about-dropdown-link:focus-visible {
  color: var(--primary);
  background-color: var(--muted);
}

.about-dropdown-link:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: -2px;
}

@media (max-width: 991.98px) {
  .about-dropdown {
    right: auto;
    left: 0;
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
