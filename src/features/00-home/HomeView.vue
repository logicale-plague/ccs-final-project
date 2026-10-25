<script setup>
import { Scaffold } from '@/features/shared/components'
import HeroSection from './components/HeroSection.vue'
import OrgsSection from './components/OrgsSection.vue'
import PromotionSection from './components/PromotionSection.vue'
import NewsSection from './components/NewsSection.vue'
import PartnershipSection from './components/PartnershipSection.vue'
</script>

<template>
  <Scaffold>
    <HeroSection />
    <PromotionSection />
    <OrgsSection />
    <NewsSection />
    <PartnershipSection />
  </Scaffold>
</template>
