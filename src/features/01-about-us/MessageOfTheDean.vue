<script setup>
import { Card, Container } from '@/features/shared/components'

const messageParagraphs = [
  'In every school year for the College of Computer Studies, we look forward with great anticipation to the contributions the new class will make to campus life. In both the aspect of academic and non academic, each students is unique enough to achieve whatever they want to reach for in our college.',
  'The primary focus of CCS is teaching and learning. Our undergraduates are encouraged to think about their education as a whole, rather than just a term taken one thing at a time, and the different faculty members work with them not only during the start of the school year, but throughout the whole as well.',
  'Learning and growth with us does not always come in classroom and academic experiences. Other kinds of opportunities abound, not the least of them the daily occasions for friendship and fellowship with people from many different backgrounds and with a wide variety of interests. In addition, students participate in rich and varied extracurricular activities that the College and University has got to offer.',
  'As another year starts, a new challenge comes for each and everyone with us. Take this into your mind and hearts and be able to reach the dream that you have ever dreamt to succeed. Welcome dear students and have a great school year ahead of you.',
]
</script>

<template>
  <Container padding="112px 24px 48px">
    <Card shadow="sm" :borderWidth="1" borderColor="var(--border)" :padding="32">
      <h1 class="dean-message-title">Message Of The Dean</h1>

      <div class="dean-message-content">
        <p v-for="paragraph in messageParagraphs" :key="paragraph">
          {{ paragraph }}
        </p>

        <div class="dean-attribution">
          <strong>Ma. Christina A. Quijano, MSCS</strong>
          <strong>Dean</strong>
        </div>
      </div>
    </Card>
  </Container>
</template>

<style scoped>
.dean-message-title {
  margin-bottom: 32px;
  color: var(--foreground);
  font-size: 36px;
  font-weight: 700;
}

.dean-message-content {
  color: var(--foreground);
  font-size: 16px;
  font-style: italic;
  line-height: 1.8;
}

.dean-message-content p {
  margin-bottom: 20px;
}

.dean-attribution {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 28px;
  font-style: normal;
}
</style>
