<script setup>
import {
  Container,
  Row,
  Headline,
  Column,
  Sideline,
  Text,
  OutlinedButton,
} from '@/features/shared/components'
import { news } from '../configs/news'
import { computed } from 'vue'

const headline = computed(() => news[0])
const sidelines = computed(() => news.slice(1, 3))
</script>

<template>
  <Container
    width="100%"
    :padding="{ x: 192, y: 64 }"
    color="var(--secondary)"
    class="news-section"
  >
    <Column :spacing="24">
      <Column>
        <Text
          value="News and Updates"
          :size="48"
          weight="bold"
          color="var(--secondary-foreground)"
          :align="'center'"
        />
        <Text
          value="Be Updated with the College and Student Events"
          :size="24"
          color="var(--muted)"
        />
      </Column>
      <div class="line"></div>
      <Row main-axis-alignment="start" cross-axis-alignment="start" :spacing="24">
        <Headline
          :title="headline.title"
          :excerpt="headline.excerpt"
          :publish-date="headline.publishDate"
          :src="headline.src"
          border-color="var(--border)"
        />
        <Column :spacing="12">
          <Text value="This Week" :size="24" weight="bold" color="var(--muted)" :align="'center'" />
          <Sideline
            v-for="sideline in sidelines"
            :key="sideline.title"
            :title="sideline.title"
            :excerpt="sideline.excerpt"
            :publish-date="sideline.publishDate"
            :src="sideline.src"
            border-color="var(--border)"
          />
          <OutlinedButton
            label="View All Articles"
            border-color="#ffb024"
            :font-size="16"
            font-color="#ffb024"
            :full-width="true"
          />
        </Column>
      </Row>
    </Column>
  </Container>
</template>

<style scoped>
.line {
  width: 100%;
  height: 4px;
  background-color: var(--muted);
}

.news-section {
  position: relative;
  padding: 120px 24px 64px;
  isolation: isolate;
}

.news-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;

  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 35px solid var(--background);

  pointer-events: none;
}
</style>
