<script setup>
import { Card, Column, Container } from '@/features/shared/components'

const sections = [
  {
    title: 'Vision',
    paragraphs: [
      'The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.',
    ],
  },
  {
    title: 'Mission',
    paragraphs: [
      'A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.',
    ],
  },
  {
    title: 'Quality Policy',
    paragraphs: [
      'To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.',
      'We maintain a quality management system that complies with international quality management system that complies with international quality standards. We continually improve to achieve global excellence that satisfies the expectations of the university community, partner institutions, and the general public.',
    ],
  },
]
</script>

<template>
  <Container>
    <Column :spacing="32" :margin="{ bottom: 64 }">
      <Container color="var(--secondary)" :padding="{ left: 192, top: 96, bottom: 64 }" width="100%">
        <h1 class="vision-mission-title">Vision and Mission</h1>
      </Container>
      <Card shadow="sm" :borderWidth="1" borderColor="var(--border)" :padding="32" :margin="{ x: 96 }">
        <section v-for="section in sections" :key="section.title" class="vision-mission-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </section>
      </Card>
    </Column>
  </Container>
</template>

<style scoped>
.vision-mission-title {
  margin: 0;
  color: var(--secondary-foreground);
  font-size: 36px;
  font-weight: 700;
}

.vision-mission-section {
  color: var(--foreground);
  font-size: 16px;
  line-height: 1.8;
}

.vision-mission-section + .vision-mission-section {
  margin-top: 28px;
}

.vision-mission-section h2 {
  margin-bottom: 12px;
  color: var(--foreground);
  font-size: 24px;
  font-weight: 700;
}

.vision-mission-section p {
  margin-bottom: 16px;
}

.vision-mission-section p:last-child {
  margin-bottom: 0;
}
</style>
