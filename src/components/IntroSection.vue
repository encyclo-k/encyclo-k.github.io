<script setup>
import { NCard, NGrid, NGridItem, NIcon } from 'naive-ui'
import { 
  Shuffle, 
  LayersOutline, 
  CashOutline, 
  ShieldCheckmark 
} from '@vicons/ionicons5'

const features = [
  {
    icon: Shuffle,
    title: 'Dynamic Evaluation',
    description: 'Extract standalone knowledge statements from authoritative textbooks and dynamically compose them into evaluation questions through random sampling at test time.',
    color: '#667eea'
  },
  {
    icon: LayersOutline,
    title: 'Multi-Statement Comprehension',
    description: 'Each question aggregates 8-10 statements for comprehensive multi-knowledge assessment, going beyond what single-statement questions can probe.',
    color: '#764ba2'
  },
  {
    icon: CashOutline,
    title: 'Cost-Effective Annotation',
    description: 'Annotators only verify formatting compliance without requiring domain expertise, substantially reducing annotation costs.',
    color: '#4facfe'
  },
  {
    icon: ShieldCheckmark,
    title: 'Contamination Resistance',
    description: 'Even if individual statements appear in training data, their compositions form a combinatorial space too vast to memorize.',
    color: '#f5576c'
  }
]
</script>

<template>
  <section class="section intro-section">
    <div class="container">
      <h2 class="section-title">Introduction</h2>
      
      <div class="intro-content">
        <p class="intro-text">
          <!-- <strong>Encyclo-K</strong> is a statement-based benchmark that rethinks benchmark construction from the ground up. 
          Our key observation is that the question itself need not be the atomic unit of curation—<em>individual knowledge statements can be</em>. -->
          Existing benchmarks curate evaluation data at the question level—collecting questions from textbooks or websites. This paradigm suffers from three key limitations: vulnerability to data contamination, restriction to single-concept assessment, and reliance on costly domain expert annotation. We introduce <strong>Encyclo-K</strong>, which rethinks benchmark construction from the ground up. <em>Our key insight is that knowledge statements, not questions, can serve as the unit of curation, and questions can then be constructed from them</em>.
        </p>
        
        <p class="intro-text">
          <!-- We extract standalone knowledge statements from authoritative textbooks and dynamically compose them into evaluation questions 
          through random sampling at test time. The combinatorial space is too vast to memorize, enabling reliable periodic dataset refresh. -->
          We compose statements into questions via random sampling, yielding two key properties: (1) Dynamic—the combinatorial space is too vast to memorize, with experiments across multiple random seeds confirming stable model rankings; (2) Multi-statement—each question requires joint comprehension of multiple statements, posing greater challenges than single-concept questions.
        </p>
      </div>

      <h3 class="features-title">Key Features</h3>
      
      <NGrid :cols="4" :x-gap="24" :y-gap="24" responsive="screen" item-responsive>
        <NGridItem v-for="(feature, index) in features" :key="index" span="4 m:2 l:1">
          <NCard class="feature-card" :style="{ '--accent-color': feature.color }">
            <div class="feature-icon">
              <NIcon :component="feature.icon" :size="32" />
            </div>
            <h4 class="feature-title">{{ feature.title }}</h4>
            <p class="feature-desc" lang="en">{{ feature.description }}</p>
          </NCard>
        </NGridItem>
      </NGrid>
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.intro-content {
  width: 100%;
  margin: 0 0 60px;
  text-align: left;
}

.intro-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 20px;
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.intro-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.intro-text em {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: normal;
  font-weight: 500;
}

.features-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 32px;
  color: var(--text-primary);
}

.feature-card {
  height: 100%;
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-lg) !important;
  transition: all var(--transition-normal);
  cursor: default;
}

.feature-card:hover {
  background: var(--bg-card-hover) !important;
  border-color: var(--accent-color) !important;
  transform: translateY(-4px);
  box-shadow: 0 0 30px color-mix(in srgb, var(--accent-color) 30%, transparent);
}

.feature-card:deep(.n-card__content) {
  padding: 28px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-color), color-mix(in srgb, var(--accent-color) 60%, #764ba2));
  border-radius: var(--radius-md);
  margin: 0 auto 20px;
  color: white;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
  text-align: left;
}

.feature-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted);
  text-align-last: left;
  word-spacing: 0.5px;
  flex: 1;
}
</style>

