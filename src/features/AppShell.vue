```vue
<script setup>
import { Scaffold, AppBar, Container, Row, TabButton } from '@/features/shared/components'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about-us' },
  { label: 'Academic Programs', to: 'academic-programs' },
  { label: 'Faculty and Staff', to: 'faculty-and-staff' },
  { label: 'Event Calendar', to: 'event-calendar' },
  { label: 'Contact Us', to: 'contact-us' },
]

/**
 * Navigates to a named location
 * @param {String} routeName 
 */
function navigateTo(routeName) {
  router.push({ name: routeName })
}
</script>

<template>
  <Scaffold>
    <template #appBar>
      <AppBar
        title="College of Computer Studies"
        :fixed="true"
        color="bg-transparent"
        textColor="#ffffff"
        elevation="none"
        :bordered="false"
        :paddingX="96"
        :paddingY="16"
      >
        <template #leading>
          <img
            src="@/assets/logos/cropped-CCS-Logov-new.png"
            alt="College of Computer Studies logo"
            width="60"
            height="60"
          />
        </template>

        <template #actions>
          <Row :spacing="32">
            <TabButton
              v-for="item in navItems"
              :key="item.to"
              :label="item.label"
              :bottomBarColor="route.name === item.to ? '#FFB024' : 'transparent'"
              bottomBarHoverColor="#FFB024"
              :fontColor="route.name === item.to ? '#FFB024' : '#ffffff'"
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
```