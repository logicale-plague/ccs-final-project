<script setup>
import { Container, Row, Card, Column, Text } from '@/features/shared/components'
import { programs } from '../configs/programs'
import { navigateTo } from '@/router'
</script>

<template>
  <Container
    width="100%"
    :padding="{ x: 192, y: 64 }"
    color="var(--background)"
    class="org-section"
  >
    <Column width="100%" :spacing="24" cross-axis-alignment="center">
      <Text
        value="Explore Our Academic Programs"
        :size="48"
        weight="bold"
        color="var(--foreground)"
        :align="'center'"
      />
      <Row width="100%" main-axis-alignment="around" :spacing="24" cross-axis-alignment="stretch">
        <Card
          v-for="program in programs"
          :key="program.to"
          border-color="var(--border)"
          color="var(--card)"
          width="100%"
          @click="navigateTo(program.to)"
        >
          <Column :spacing="16" cross-axis-alignment="center" :margin="20">
            <div class="program-logo">
              <img :src="program.image" :alt="program.title" width="160" height="160" />
            </div>
            <Text :value="program.title" :size="24" weight="bold" color="#000" :align="'center'" />
            <Text :value="program.subtitle" :size="16" color="#4a5568" :align="'center'" />
          </Column>
        </Card>
      </Row>
    </Column>
  </Container>
</template>

<style scoped>
.org-section {
  position: relative;
  padding: 120px 24px 64px;
  isolation: isolate;
}

.org-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;

  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 35px solid #0d1117;

  pointer-events: none;
}
</style>
