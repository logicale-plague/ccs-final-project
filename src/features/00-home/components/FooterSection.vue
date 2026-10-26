<script setup>
import { Icon } from '@iconify/vue'
import { Row } from '@/features/shared/components'

const quickLinks = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'About Us', to: { name: 'about-us' } },
  { label: 'Academic Programs', to: { name: 'academic-programs' } },
  { label: 'Faculty and Staff', to: { name: 'faculty-and-staff' } },
  { label: 'Event Calendar', to: { name: 'event-calendar' } },
  { label: 'Contact Us', to: { name: 'contact-us' } },
]
</script>

<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-column">
        <h2 class="footer-title">College of Computer Studies</h2>
        <p class="footer-text">
          Empowering students through technology, innovation, and excellence.
        </p>
      </div>

      <div class="footer-column">
        <h2 class="footer-heading">Quick Links</h2>
        <nav aria-label="Footer quick links">
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.to.name">
              <RouterLink :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer-column">
        <h2 class="footer-heading">Contact Us</h2>
        <address class="footer-contact">
          <Row :spacing="8">
            <Icon icon="mi:email" />
            <a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a>
          </Row>
          <Row :spacing="8">
            <Icon icon="akar-icons:location" />
            <span>CCS Faculty Office, 2nd floor Mary Thomas Building</span>
          </Row>
        </address>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  padding: 48px max(32px, 10vw) 32px;
  color: var(--secondary-foreground);
  background-color: var(--secondary);
}

.footer-content {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) repeat(2, minmax(0, 1fr));
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-title,
.footer-heading {
  margin: 0;
  color: var(--secondary-foreground);
  font-size: 18px;
  font-weight: 700;
}

.footer-heading {
  font-size: 16px;
}

.footer-text,
.footer-contact {
  margin: 0;
  color: var(--secondary-foreground);
  font-size: 14px;
  line-height: 1.6;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-style: normal;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-section a {
  color: var(--secondary-foreground);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-section a:hover,
.footer-section a:focus-visible {
  color: var(--primary);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
