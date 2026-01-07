<script setup>
import { NButton, NSpace, NIcon } from 'naive-ui'
import { 
  DocumentText, 
  Trophy, 
  LogoGithub 
} from '@vicons/ionicons5'

const links = [
  { 
    label: 'Code', 
    icon: LogoGithub, 
    url: 'https://github.com/multimodal-art-projection/Encyclo-K',
    type: 'default'
  },
  { 
    label: 'Dataset', 
    img: '/huggingface_logo.svg',
    url: 'https://huggingface.co/datasets/m-a-p/Encyclo-K',
    type: 'default'
  },
  { 
    label: 'Leaderboard', 
    icon: Trophy, 
    url: 'https://encyclo-k.github.io/#:~:text=isolated%20factual%20recall.-,Leaderboard,-We%20evaluate%2050',
    type: 'primary'
  },
  { 
    label: 'ArXiv', 
    icon: DocumentText, 
    url: 'https://arxiv.org/abs/2512.24867',
    type: 'default'
  },
]

const organizations = [
  { name: 'M-A-P', url: 'https://m-a-p.ai/' },
  { name: 'ByteDance', url: '#' },
]
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <!-- Decorative Elements -->
      <div class="hero-decoration">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>

      <!-- Main Title -->
      <h1 class="hero-title fade-in-up">
        <span class="title-accent">Encyclo-K</span>
        <span class="title-separator">:</span>
        <span class="title-main">Evaluating LLMs with Dynamically Composed Knowledge Statements</span>
      </h1>

      <!-- Organizations -->
      <div class="organizations fade-in-up stagger-2">
        <a 
          v-for="org in organizations" 
          :key="org.name"
          :href="org.url"
          target="_blank"
          rel="noopener"
          class="org-badge"
        >
          {{ org.name }}
        </a>
      </div>

      <!-- Navigation Links -->
      <div class="hero-links fade-in-up stagger-3">
        <NSpace size="large" justify="center">
          <NButton
            v-for="link in links"
            :key="link.label"
            :type="link.type"
            size="large"
            round
            tag="a"
            :href="link.url"
            :target="link.url.startsWith('http') ? '_blank' : undefined"
            :rel="link.url.startsWith('http') ? 'noopener' : undefined"
            class="hero-btn"
          >
            <template #icon>
              <img v-if="link.img" :src="link.img" class="btn-icon-img" />
              <NIcon v-else :component="link.icon" />
            </template>
            {{ link.label }}
          </NButton>
        </NSpace>
      </div>

      <!-- Key Stats Preview -->
      <div class="hero-stats fade-in-up stagger-4">
        <div class="stat-item">
          <span class="stat-value">5,038</span>
          <span class="stat-label">Questions</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">11</span>
          <span class="stat-label">Disciplines</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">44</span>
          <span class="stat-label">Fields</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">62</span>
          <span class="stat-label">Subfields</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator fade-in-up stagger-5">
      <div class="scroll-line-horizontal"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  position: relative;
  overflow: hidden;
}

.hero-content {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 24px;
}

/* Decorative Orbs */
.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: -100px;
  right: -100px;
  animation-delay: 0s;
  opacity: 0.15;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  bottom: -50px;
  left: -100px;
  animation-delay: 2s;
  opacity: 0.12;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
  opacity: 0.1;
}

/* Title Styles */
.hero-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 36px;
  letter-spacing: -0.03em;
}

.title-accent {
  display: block;
  font-size: clamp(3.5rem, 10vw, 6rem);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.title-separator {
  display: none;
}

.title-main {
  display: block;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  font-weight: 400;
  color: var(--text-secondary);
  max-width: 850px;
  margin: 0 auto;
  line-height: 1.7;
  letter-spacing: 0.01em;
}

/* Organizations */
.organizations {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.org-badge {
  padding: 8px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
  cursor: pointer;
}

.org-badge:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-highlight);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* Hero Links */
.hero-links {
  margin-bottom: 60px;
}

.hero-btn {
  font-weight: 500;
  padding: 0 24px;
}

.hero-btn:deep(.n-button__content) {
  gap: 8px;
}

.btn-icon-img {
  width: 1.2em;
  height: 1.2em;
  object-fit: contain;
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
  padding: 40px 64px;
  background: transparent;
  border: none;
  border-top: 1px solid var(--border-color);
  border-radius: 0;
  backdrop-filter: none;
  box-shadow: none;
  margin-top: 40px;
  padding-top: 48px;
}

.stat-item {
  text-align: center;
  min-width: 100px;
}

.stat-value {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 500;
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 50px;
  background: var(--border-color);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line-horizontal {
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, transparent, #667eea, transparent);
  border-radius: 2px;
  animation: pulse-scroll-h 2s ease-in-out infinite;
}

@keyframes pulse-scroll-h {
  0%, 100% { 
    opacity: 0.3;
    transform: scaleX(0.8);
  }
  50% { 
    opacity: 1;
    transform: scaleX(1.2);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    padding: 24px;
    gap: 24px;
  }
  
  .stat-divider {
    display: none;
  }
  
  .stat-value {
    font-size: 2rem;
  }
}
</style>

