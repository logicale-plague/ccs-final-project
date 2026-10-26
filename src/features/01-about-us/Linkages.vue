<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { Card, Container } from '@/features/shared/components'
import { partners } from '@/features/00-home/configs/partners'
</script>

<template>
  <Container>
    <div class="linkages-page">
      <Container class="linkages-header" color="var(--secondary)" :padding="{ top: 96, bottom: 64 }">
        <h1 class="linkages-title">Partners and Members</h1>
        <p class="linkages-subtitle">Our academic, industry, and professional partners.</p>
      </Container>

      <div class="partners-grid">
        <Card
          v-for="partner in partners"
          :key="partner.name"
          shadow="sm"
          :borderWidth="1"
          borderColor="var(--border)"
          color="var(--card)"
          class="partner-card"
        >
          <div class="partner-logo">
            <img :src="partner.src" :alt="partner.name" />
          </div>
          <p class="partner-name">{{ partner.name }}</p>
        </Card>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.linkages-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.linkages-header {
  text-align: center;
}

.linkages-title {
  margin: 0 0 8px;
  color: var(--secondary-foreground);
  font-size: 36px;
  font-weight: 700;
}

.linkages-subtitle {
  margin-bottom: 0;
  color: var(--muted);
  font-size: 16px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.partner-card {
  min-height: 240px;
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  padding: 16px;
}

.partner-logo img {
  max-width: 100%;
  max-height: 140px;
  object-fit: contain;
}

.partner-name {
  margin: 0;
  color: var(--foreground);
  font-size: 15px;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 767.98px) {
  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style>
