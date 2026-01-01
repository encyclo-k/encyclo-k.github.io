<script setup>
import { NIcon } from 'naive-ui'
import { Heart } from '@vicons/ionicons5'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="brand-name gradient-text">Encyclo-K</span>
          <p class="brand-tagline">
            Dynamic Evaluation of LLMs' Comprehensive Understanding over Multiple Knowledge Statements
          </p>
        </div>


        <div class="footer-orgs">
          <span class="org-label">Contributors:</span>
          <a href="https://m-a-p.ai/" target="_blank" rel="noopener" class="org-link">M-A-P</a>
          <span class="org-sep">·</span>
          <a href="#" class="org-link">ByteDance</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © 2025 Encyclo-K Team. Released under MIT License.
        </p>
        <p class="made-with">
          Made with <NIcon :component="Heart" class="heart-icon" /> by the research community
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: 60px 0 32px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
}

.footer-brand {
  text-align: center;
}

.brand-name {
  font-size: 2rem;
  font-weight: 700;
}

.brand-tagline {
  margin-top: 8px;
  font-size: 0.95rem;
  color: var(--text-muted);
}


.footer-orgs {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.org-label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.org-link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.org-link:hover {
  color: var(--text-primary);
}

.org-sep {
  color: var(--text-muted);
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.copyright {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.made-with {
  font-size: 0.85rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.heart-icon {
  color: #f5576c;
  animation: pulse 1.5s ease infinite;
}

/* Override for light mode */
.footer {
  background: var(--bg-primary);
  border-top-color: var(--border-color);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
</style>

