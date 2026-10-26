<script setup></script>

<template>
  <section class="promotion-section" aria-label="Discover CCS">
    <video
      class="promotion-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="College of Computer Studies promotional video"
    >
      <source src="@/assets/videos/ccspromotional.mp4" type="video/mp4" />
      Your browser does not support HTML video.
    </video>

    <div class="promotion-overlay" aria-hidden="true"></div>

    <div class="promotion-content">
      <h2 class="promotion-title">DISCOVER CCS</h2>
      <div class="promotion-accent" aria-hidden="true"></div>
    </div>
  </section>
</template>

<style scoped>
.promotion-section {
  position: relative;
  width: 100vw;

  margin-left: calc(50% - 50vw);

  height: clamp(320px, 56.25vw, 760px);
  overflow: hidden;
  isolation: isolate;
  background-color: var(--secondary);
}

.promotion-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.promotion-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgb(10 25 23 / 85%) 0%,
    rgb(10 25 23 / 35%) 35%,
    rgb(10 25 23 / 5%) 75%
  );
  pointer-events: none;
}

.promotion-content {
  position: absolute;
  right: clamp(24px, 7vw, 112px);
  bottom: clamp(28px, 6vw, 80px);
  left: clamp(24px, 7vw, 112px);
  z-index: 1;
  color: #fff;
}

.promotion-title {
  margin: 0;
  max-width: 900px;
  font-size: clamp(2rem, 6vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0.04em;
  color: #fff;
  text-transform: uppercase;
  text-wrap: balance;
}

.promotion-accent {
  width: clamp(64px, 9vw, 120px);
  height: 5px;
  margin-top: clamp(14px, 2vw, 24px);
  background-color: var(--primary);
  border-radius: var(--radius);
}

@media (max-width: 576px) {
  .promotion-section {
    height: 60vh;
    min-height: 320px;
    max-height: 520px;
  }

  .promotion-content {
    right: 24px;
    bottom: 32px;
    left: 24px;
  }

  .promotion-title {
    letter-spacing: 0.02em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .promotion-video {
    visibility: hidden;
  }
}
</style>
```
