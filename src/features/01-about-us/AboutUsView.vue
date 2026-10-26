<script setup>
import { Card, Container, Text } from '@/features/shared/components'

const sections = [
  {
    id: 'history',
    title: 'History',
    description: 'Learn about the College of Computer Studies and how it has grown over time.',
  },
  {
    id: 'mission-and-vision',
    title: 'Mission and Vision',
    description: 'Explore the goals and guiding principles of the College of Computer Studies.',
  },
  {
    id: 'message-of-the-dean',
    title: 'Message of the Dean',
    description: 'Read the dean’s message to students, faculty, staff, and partners.',
  },
  {
    id: 'linkages',
    title: 'Linkages',
    description: 'Discover the College’s academic, industry, and community connections.',
  },
  {
    id: 'news-and-updates',
    title: 'News and Updates',
    description: 'Stay informed about the latest announcements and activities.',
  },
]
</script>

<template>
  <Container padding="112px 24px 48px">
    <div class="about-page">
      <div class="about-introduction">
        <h1 class="about-title mb-2">About Us</h1>
        <Text
          value="Get to know the College of Computer Studies."
          color="var(--muted-foreground)"
          size="18"
        />
      </div>

      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        class="about-section"
        tabindex="-1"
      >
        <Card shadow="sm" :borderWidth="1" borderColor="var(--border)" :padding="24">
          <h2 class="about-section-title mb-2">{{ section.title }}</h2>
          <Text :value="section.description" color="var(--muted-foreground)" size="16" />
        </Card>
      </section>
    </div>
  </Container>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-title {
  color: var(--foreground);
  font-size: 36px;
  font-weight: 700;
}

.about-section {
  scroll-margin-top: 120px;
}

.about-section-title {
  color: var(--foreground);
  font-size: 24px;
  font-weight: 700;
}
</style>
