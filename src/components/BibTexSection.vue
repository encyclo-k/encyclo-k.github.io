<script setup>
import { ref } from 'vue'
import { NCard, NButton, NIcon, useMessage } from 'naive-ui'
import { Copy, Checkmark } from '@vicons/ionicons5'

const message = useMessage()
const copied = ref(false)

const bibtex = `@misc{encyclo-k2025,
    title={Encyclo-K: Dynamic Evaluation of LLMs' Comprehensive Understanding over Multiple Knowledge Statements},
    author={Yiming Liang and Yizhi Li and Ge Zhang and Yuchen Wu and Yinzhu Piao and Denghui Cao and Tong Sun and Ziniu Li and Li Du and Bo Lei and Jiaheng Liu and Chenghua Lin and Zhaoxiang Zhang and Yantao Du and Wenhao Huang and Jiajun Zhang},
    year={2025},
    eprint={},
    archivePrefix={arXiv},
    primaryClass={cs.CL},
    url={}, 
}`

const copyBibtex = async () => {
  try {
    await navigator.clipboard.writeText(bibtex)
    copied.value = true
    message.success('BibTeX copied to clipboard!')
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    message.error('Failed to copy')
  }
}
</script>

<template>
  <section class="section bibtex-section">
    <div class="container">
      <h2 class="section-title">Citation</h2>
      
      <p class="cite-desc">
        If you find Encyclo-K useful in your research, please cite our paper:
      </p>

      <NCard class="bibtex-card">
        <div class="bibtex-header">
          <span class="bibtex-label">BibTeX</span>
          <NButton
            :type="copied ? 'success' : 'default'"
            size="small"
            round
            @click="copyBibtex"
          >
            <template #icon>
              <NIcon :component="copied ? Checkmark : Copy" />
            </template>
            {{ copied ? 'Copied!' : 'Copy' }}
          </NButton>
        </div>
        <pre class="bibtex-code"><code>{{ bibtex }}</code></pre>
      </NCard>

      <div class="paper-links">
        <a href="#" class="paper-link" target="_blank" rel="noopener">
          <span class="link-icon">📄</span>
          <span class="link-text">Read the Paper</span>
        </a>
        <a href="#" class="paper-link" target="_blank" rel="noopener">
          <span class="link-icon">🤗</span>
          <span class="link-text">Dataset on HuggingFace</span>
        </a>
        <a href="#" class="paper-link" target="_blank" rel="noopener">
          <span class="link-icon">💻</span>
          <span class="link-text">GitHub Repository</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bibtex-section {
  background: var(--bg-secondary);
}

.cite-desc {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.bibtex-card {
  max-width: 900px;
  margin: 0 auto 40px;
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-lg) !important;
}

.bibtex-card:deep(.n-card__content) {
  padding: 0;
}

.bibtex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
  background: rgba(102, 126, 234, 0.05);
}

.bibtex-label {
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-primary);
}

.bibtex-code {
  margin: 0;
  padding: 24px;
  overflow-x: auto;
  background: transparent;
}

.bibtex-code code {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-secondary);
  white-space: pre-wrap;
  word-break: break-word;
}

.paper-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.paper-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
}

.paper-link:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-highlight);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.link-icon {
  font-size: 1.5rem;
}

.link-text {
  font-weight: 500;
  color: var(--text-primary);
}
</style>

