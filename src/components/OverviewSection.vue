<script setup>
import { ref } from 'vue'
import { NCard, NImage, NSpace } from 'naive-ui'

const highlights = [
  {
    label: '5,038',
    sublabel: 'Questions',
    description: 'Comprehensive coverage'
  },
  {
    label: '8-10',
    sublabel: 'Statements/Question',
    description: 'Multi-knowledge assessment'
  },
  {
    label: '4-8',
    sublabel: 'Options/Question',
    description: 'Challenging choices'
  },
  {
    label: '2-4',
    sublabel: 'Combinations',
    description: 'Complex reasoning'
  }
]

const disciplineData = [
  { name: 'Science', questions: 1242, percentage: 24.7, color: '#667eea' },
  { name: 'Engineering', questions: 892, percentage: 17.7, color: '#764ba2' },
  { name: 'Medicine', questions: 654, percentage: 13.0, color: '#4facfe' },
  { name: 'Economics', questions: 489, percentage: 9.7, color: '#00f2fe' },
  { name: 'Law', questions: 387, percentage: 7.7, color: '#f093fb' },
  { name: 'History', questions: 312, percentage: 6.2, color: '#f5576c' },
  { name: 'Education', questions: 276, percentage: 5.5, color: '#ffecd2' },
  { name: 'Management', questions: 234, percentage: 4.6, color: '#fcb69f' },
  { name: 'Sociology', questions: 198, percentage: 3.9, color: '#a8edea' },
  { name: 'Literature', questions: 156, percentage: 3.1, color: '#fed6e3' },
  { name: 'Philosophy', questions: 198, percentage: 3.9, color: '#d299c2' },
]
</script>

<template>
  <section class="section overview-section">
    <div class="container">
      <h2 class="section-title">Overview</h2>

      <!-- Highlights -->
      <div class="highlights-grid">
        <div 
          v-for="(item, index) in highlights" 
          :key="index" 
          class="highlight-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <span class="highlight-value">{{ item.label }}</span>
          <span class="highlight-sublabel">{{ item.sublabel }}</span>
          <span class="highlight-desc">{{ item.description }}</span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="overview-grid">
        <NCard class="overview-card distribution-card">
          <h3 class="card-title">Question Distribution</h3>
          <div class="distribution-list">
            <div 
              v-for="(item, index) in disciplineData" 
              :key="item.name"
              class="distribution-item"
            >
              <div class="dist-header">
                <span class="dist-name">{{ item.name }}</span>
                <span class="dist-count">{{ item.questions }}</span>
              </div>
              <div class="dist-bar-bg">
                <div 
                  class="dist-bar" 
                  :style="{ 
                    width: `${item.percentage * 4}%`, 
                    background: item.color,
                    animationDelay: `${index * 0.05}s`
                  }"
                ></div>
              </div>
              <span class="dist-percentage">{{ item.percentage }}%</span>
            </div>
          </div>
        </NCard>

        <NCard class="overview-card embeddings-card">
          <h3 class="card-title">Semantic Visualization</h3>
          <div class="embeddings-grid">
            <div class="embedding-item">
              <img src="/statement_embeddings.png" alt="Statement Embeddings Visualization" />
              <span class="embedding-label">Statement Embeddings</span>
            </div>
            <div class="embedding-item">
              <img src="/question_embeddings.png" alt="Question Embeddings Visualization" />
              <span class="embedding-label">Question Embeddings</span>
            </div>
          </div>
        </NCard>
      </div>

      <!-- Description -->
      <div class="overview-description">
        <p>
          The dataset comprises <strong>5,038 questions</strong> across <strong>11 disciplines</strong>, 
          <strong>44 fields</strong>, and <strong>62 subfields</strong>. The disciplinary distribution is proportional 
          to statement ratios: Science has the most questions (1,242, 24.7%), while Philosophy has the fewest (61, 1.2%). 
          Each question contains <strong>8–10 statements</strong>, <strong>4–8 options</strong>, and <strong>2–4 combinations</strong>.
        </p>
        <br>
        <p>
          In the statement embedding space, knowledge points from different disciplines exhibit a relatively mixed distribution with blurred disciplinary boundaries, reflecting the cross-disciplinary commonality and interconnectedness of basic knowledge units. In contrast, when multiple statements are combined into complete questions, disciplinary characteristics are significantly amplified—each discipline forms relatively independent semantic clusters with distinct boundaries. The density of domain-specific terminology, reasoning patterns, and knowledge organization methods work together to form distinguishable distribution patterns in high-dimensional semantic space. By combining multiple knowledge statements to construct questions, we successfully aggregate and strengthen disciplinary characteristics, enabling questions in the dataset to possess clear disciplinary differentiation.

        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.overview-section {
  background: var(--bg-secondary);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.highlight-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all var(--transition-normal);
  animation: fade-in-up 0.6s ease forwards;
  opacity: 0;
}

.highlight-card:hover {
  border-color: var(--border-highlight);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

.highlight-value {
  font-size: 2.2rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight-sublabel {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

.highlight-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

@media (max-width: 900px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

.overview-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-lg) !important;
}

.overview-card:deep(.n-card__content) {
  padding: 28px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.pipeline-image {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  min-height: 300px;
}

.pipeline-image img {
  width: 100%;
  height: auto;
  display: block;
}

.image-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-md);
}

.image-placeholder span {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.image-placeholder p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 8px;
}

.distribution-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.distribution-item {
  display: grid;
  grid-template-columns: 120px 1fr 50px;
  align-items: center;
  gap: 12px;
}

.dist-header {
  display: flex;
  flex-direction: column;
}

.dist-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

.dist-count {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.dist-bar-bg {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.dist-bar {
  height: 100%;
  border-radius: 4px;
  animation: grow-bar 1s ease forwards;
  transform-origin: left;
}

@keyframes grow-bar {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.dist-percentage {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-align: right;
}

.overview-description {
  width: 100%;
  margin: 0 0 48px;
  text-align: left;
}

.overview-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
}

.overview-description strong {
  color: var(--text-primary);
  font-weight: 600;
}

.embeddings-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.embedding-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.embedding-item img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.embedding-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.pipeline-card.full-width {
  margin-top: 24px;
}

.pipeline-card.full-width .pipeline-image {
  min-height: auto;
}

.pipeline-card.full-width .pipeline-image img {
  width: 100%;
  height: auto;
}
</style>

