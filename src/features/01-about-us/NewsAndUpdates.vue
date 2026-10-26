<script setup>
import { Card, Container, ImageContainer } from '@/features/shared/components'
import { news } from '@/features/00-home/configs/news'
</script>

<template>
  <Container>
    <div class="news-page">
      <Container class="news-header" color="var(--secondary)" :padding="{ top: 96, bottom: 64 }">
        <h1 class="news-title">News and Updates</h1>
        <p class="news-subtitle">Be updated with the College and student events.</p>
      </Container>

      <div class="news-list">
        <Card
          v-for="article in news"
          :key="article.title"
          shadow="sm"
          :borderWidth="1"
          borderColor="var(--border)"
          color="var(--card)"
          class="news-card"
          :margin="{ x: 192 }"
        >
          <ImageContainer :src="article.src" :alt="article.title" width="100%" height="280px" />
          <div class="news-card-content">
            <h2>{{ article.title }}</h2>
            <p class="news-date">{{ article.publishDate }}</p>
            <p v-for="paragraph in article.excerpt.split('\n\n')" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </Card>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.news-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 96px;
}

.news-header {
  text-align: center;
}

.news-title {
  margin: 0 0 8px;
  color: var(--secondary-foreground);
  font-size: 36px;
  font-weight: 700;
}

.news-subtitle {
  margin-bottom: 0;
  color: var(--secondary-foreground);
  font-size: 16px;
}

.news-list {
  display: grid;
  gap: 24px;
}

.news-card {
  overflow: hidden;
}

.news-card :deep(.card-body) {
  padding: 0;
}

.news-card-content {
  padding: 24px;
}

.news-card-content h2 {
  margin-bottom: 8px;
  color: var(--foreground);
  font-size: 24px;
  font-weight: 700;
}

.news-card-content p {
  color: var(--foreground);
  font-size: 16px;
  line-height: 1.7;
}

.news-card-content .news-date {
  margin-bottom: 20px;
  color: var(--muted-foreground);
  font-size: 14px;
  font-weight: 600;
}

.news-card-content p:last-child {
  margin-bottom: 0;
}
</style>
