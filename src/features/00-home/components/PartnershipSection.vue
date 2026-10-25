<script setup>
import { Container, Column, Row, Text, Card, SolidButton } from '@/features/shared/components'
import { partners } from '../configs/partners'
import { computed } from 'vue'

const filteredPartners = computed(() => partners.slice(0, 4))
</script>

<template>
  <Container :padding="{ x: 192, y: 64 }" color="var(--background)" class="partnership-section">
    <Column width="100%" :spacing="48" cross-axis-alignment="center">
      <Column cross-axis-alignment="center">
        <Text value="CONNECT" :size="16" weight="bold" color="var(--foreground)" />
        <Text
          value="Our Partners and Memberships"
          :size="48"
          weight="bold"
          color="var(--secondary-foreground)"
          :align="'center'"
        />
        <Text value="Driving technology for education" :size="16" color="var(--muted-foreground)" />
      </Column>
      <Row width="100%" main-axis-alignment="around" :spacing="24" cross-axis-alignment="stretch">
        <Card
          v-for="partner in filteredPartners"
          :key="partner.name"
          border-color="var(--border)"
          color="var(--card)"
          width="100%"
        >
          <Column
            :spacing="16"
            cross-axis-alignment="center"
            height="100%"
            :padding="{ y: 32 }"
            :margin="20"
          >
            <div class="program-logo">
              <img :src="partner.src" :alt="partner.name" width="160" />
            </div>
          </Column>
        </Card>
      </Row>
      <SolidButton
        label="VIEW MORE"
        bg-color="var(--primary)"
        font-color="var(--primary-foreground)"
        :font-size="16"
        :border-radius="0"
      />
    </Column>
  </Container>
</template>

<style scoped>
.partnership-section {
  position: relative;
  padding: 120px 24px 64px;
  isolation: isolate;
}

.partnership-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;

  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 35px solid var(--secondary);

  pointer-events: none;
}
</style>
