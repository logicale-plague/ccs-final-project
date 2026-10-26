<script setup>
import { Container } from '@/features/shared/components'

defineProps({
  course: { type: String, default: '' },
  image: { type: String, default: '' },
  logo: { type: String, default: '' },
  introduction: { type: String, default: '' },
  educObjectives: { type: String, default: '' },
  programOutcomes: { type: String, default: '' },
  rationale: { type: String, default: '' },
  description: { type: String, default: '' },
  graduateOutcomes: { type: Array, default: () => [] },
  competenceAreas: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="program-page">
    <Container
      :image="image"
      width="100%"
      height="520px"
      overlay="rgba(0, 0, 0, 0.7)"
      fit="cover"
      alignment="center"
    >
      <div class="program-cover-content">
        <img v-if="logo" :src="logo" :alt="`${course} logo`" class="program-logo" />
        <p class="eyebrow">Academic Program</p>
        <h1>{{ course }}</h1>
        <p class="program-introduction">{{ introduction }}</p>
      </div>
    </Container>

    <div class="program-content">
      <section v-if="educObjectives" class="program-section" aria-labelledby="educational-objectives">
        <h2 id="educational-objectives">Program Educational Objectives</h2>
        <p v-html="educObjectives" />
      </section>

      <section v-if="programOutcomes" class="program-section" aria-labelledby="program-outcomes">
        <h2 id="program-outcomes">Program Outcomes</h2>
        <p v-html="programOutcomes" />
      </section>

      <section v-if="rationale" class="program-section" aria-labelledby="curriculum-rationale">
        <h2 id="curriculum-rationale">Curriculum Rationale</h2>
        <p v-html="rationale" />
      </section>

      <section v-if="description" class="program-section" aria-labelledby="curriculum-description">
        <h2 id="curriculum-description">Curriculum Description</h2>
        <div v-html="description" />
        <ol v-if="competenceAreas.length" class="competence-areas">
          <li v-for="area in competenceAreas" :key="area">{{ area }}</li>
        </ol>
      </section>

      <section
        v-if="graduateOutcomes.length"
        class="program-section"
        aria-labelledby="graduate-outcomes"
      >
        <h2 id="graduate-outcomes">Graduate Outcomes</h2>
        <div class="outcomes-table-wrapper">
          <table class="outcomes-table">
            <caption class="visually-hidden">{{ course }} graduate outcomes</caption>
            <thead>
              <tr>
                <th scope="col">Outcome</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="outcome in graduateOutcomes" :key="outcome.outcome">
                <td>{{ outcome.outcome }}</td>
                <td>{{ outcome.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.program-page {
  width: 100%;
  margin: 0;
  padding: 0 0 80px;
}

.program-cover-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  padding: 32px;
  color: #ffffff;
  text-align: center;
}

.program-logo {
  width: 150px;
  height: 150px;
  margin-bottom: 24px;
  object-fit: contain;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2 {
  color: var(--foreground);
}

.program-cover-content h1 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.15;
}

.program-introduction {
  margin: 16px 0 0;
  font-size: 16px;
  line-height: 1.7;
}

.program-content {
  width: 100%;
  padding: 0 32px;
}

.program-section {
  padding: 40px 0;
  border-bottom: 1px solid var(--border);
}

h2 {
  margin: 0 0 16px;
  font-size: 24px;
  line-height: 1.25;
}

.program-section :deep(p),
.program-section :deep(div) {
  color: var(--muted-foreground);
  font-size: 16px;
  line-height: 1.7;
}

.program-section :deep(p) {
  margin: 0;
}

.competence-areas {
  color: var(--muted-foreground);
  line-height: 1.7;
}

.outcomes-table-wrapper {
  overflow-x: auto;
}

.outcomes-table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  color: var(--foreground);
  font-size: 15px;
  line-height: 1.6;
}

.outcomes-table th,
.outcomes-table td {
  padding: 16px;
  border: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}

.outcomes-table th {
  color: var(--primary-foreground);
  background-color: var(--primary);
  font-weight: 700;
}

.outcomes-table td:first-child {
  width: 25%;
  font-weight: 600;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 576px) {
  .program-content {
    padding: 0 20px;
  }
}
</style>
