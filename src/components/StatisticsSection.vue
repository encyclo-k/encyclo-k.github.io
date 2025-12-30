<script setup>
import { ref, onMounted, computed } from 'vue'
import { NCard, NTabs, NTabPane } from 'naive-ui'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

const disciplines = [
  { name: 'Science', value: 1242, color: '#667eea' },
  { name: 'Engineering', value: 892, color: '#764ba2' },
  { name: 'Medicine', value: 654, color: '#4facfe' },
  { name: 'Economics', value: 489, color: '#00f2fe' },
  { name: 'Law', value: 387, color: '#f093fb' },
  { name: 'History', value: 312, color: '#f5576c' },
  { name: 'Education', value: 276, color: '#ffecd2' },
  { name: 'Management', value: 234, color: '#fcb69f' },
  { name: 'Sociology', value: 198, color: '#a8edea' },
  { name: 'Literature', value: 156, color: '#fed6e3' },
  { name: 'Philosophy', value: 198, color: '#d299c2' },
]

const pieOption = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(102, 126, 234, 0.3)',
    textStyle: { color: '#1a1a2e' },
    formatter: '{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: '5%',
    top: 'center',
    textStyle: { color: 'rgba(26,26,46,0.7)' },
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 12
  },
  series: [
    {
      name: 'Disciplines',
      type: 'pie',
      radius: ['45%', '75%'],
      center: ['35%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: 'rgba(15, 15, 26, 1)',
        borderWidth: 3
      },
  label: { show: false },
  emphasis: {
    label: {
      show: true,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1a1a2e'
    },
        itemStyle: {
          shadowBlur: 20,
          shadowColor: 'rgba(102, 126, 234, 0.5)'
        }
      },
      labelLine: { show: false },
      data: disciplines.map(d => ({
        name: d.name,
        value: d.value,
        itemStyle: { color: d.color }
      }))
    }
  ]
}))

const barOption = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(102, 126, 234, 0.3)',
    textStyle: { color: '#1a1a2e' },
    axisPointer: {
      type: 'shadow',
      shadowStyle: { color: 'rgba(102, 126, 234, 0.08)' }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '8%',
    top: '8%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: disciplines.map(d => d.name),
    axisLine: { lineStyle: { color: 'rgba(102,126,234,0.2)' } },
    axisLabel: { 
      color: 'rgba(26,26,46,0.6)', 
      rotate: 45,
      fontSize: 11
    },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisLabel: { color: 'rgba(26,26,46,0.6)' },
    splitLine: { lineStyle: { color: 'rgba(102,126,234,0.1)' } }
  },
  series: [
    {
      name: 'Questions',
      type: 'bar',
      barWidth: '60%',
      data: disciplines.map(d => ({
        value: d.value,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: d.color },
              { offset: 1, color: 'rgba(102, 126, 234, 0.2)' }
            ]
          },
          borderRadius: [6, 6, 0, 0]
        }
      })),
      emphasis: {
        itemStyle: {
          shadowBlur: 20,
          shadowColor: 'rgba(102, 126, 234, 0.5)'
        }
      }
    }
  ]
}))

const multiStatementData = [
  { model: 'Qwen2.5-72B-Instruct', mcq: 25.03, tf: 59.29 },
  { model: 'Qwen2.5-32B-Instruct', mcq: 25.31, tf: 59.11 },
  { model: 'DeepSeek-V3-0324', mcq: 30.85, tf: 57.20 },
  { model: 'Qwen3-32B', mcq: 37.28, tf: 66.89 },
  { model: 'DeepSeek-R1', mcq: 48.99, tf: 69.28 },
]

const comparisonOption = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: 'rgba(102, 126, 234, 0.3)',
    textStyle: { color: '#1a1a2e' }
  },
  legend: {
    data: ['Multiple Choice Question', 'True/False Overall'],
    textStyle: { color: 'rgba(26,26,46,0.7)' },
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: multiStatementData.map(d => d.model),
    axisLine: { lineStyle: { color: 'rgba(102,126,234,0.2)' } },
    axisLabel: { color: 'rgba(26,26,46,0.6)' },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    max: 100,
    axisLine: { show: false },
    axisLabel: { color: 'rgba(26,26,46,0.6)', formatter: '{value}%' },
    splitLine: { lineStyle: { color: 'rgba(102,126,234,0.1)' } }
  },
  series: [
    {
      name: 'Multiple Choice Question',
      type: 'bar',
      data: multiStatementData.map(d => d.mcq),
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#667eea' },
            { offset: 1, color: 'rgba(102, 126, 234, 0.3)' }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      }
    },
    {
      name: 'True/False Overall',
      type: 'bar',
      data: multiStatementData.map(d => d.tf),
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#f5576c' },
            { offset: 1, color: 'rgba(245, 87, 108, 0.3)' }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      }
    }
  ]
}))
</script>

<template>
  <section class="section statistics-section">
    <div class="container">
      <h2 class="section-title">Key Findings</h2>

      <NTabs type="segment" animated class="stats-tabs">
        <NTabPane name="multi-statement" tab="Multi-Statement Challenge">
          <NCard class="chart-card full-width">
            <h3 class="chart-title">Single vs Multi-Statement Performance</h3>
            <p class="chart-desc">
              Performance comparison between single-statement judgment and multi-statement comprehensive understanding tasks. 
              Each question aggregates 8–10 knowledge statements, requiring models to jointly comprehend multiple knowledge points.
            </p>
            <VChart class="chart comparison-chart" :option="comparisonOption" autoresize />
          </NCard>

          <div class="stats-note full-width-note">
            <p>
              <strong>Key Finding:</strong> Models consistently show significant performance degradation when transitioning from 
              single-statement judgment to multi-statement comprehensive understanding tasks. This reveals fundamental limitations 
              in current LLMs' ability to jointly reason over multiple knowledge points, rather than isolated factual recall.
            </p>
          </div>
        </NTabPane>

        <NTabPane name="dynamic" tab="Dynamic Question Generation">
          <div class="charts-grid">
            <NCard class="chart-card">
              <h3 class="chart-title">Ranking Consistency Across Seeds</h3>
              <div class="figure-image">
                <img src="/random_seed_line_plot.png" alt="Random Seed Line Plot" />
              </div>
            </NCard>
            <NCard class="chart-card">
              <h3 class="chart-title">Performance vs Number of Options</h3>
              <div class="figure-image">
                <img src="/line_plot.png" alt="Line Plot" />
              </div>
            </NCard>
          </div>

          <div class="stats-note full-width-note">
            <p>
              <strong>Dynamic Evaluation:</strong> Encyclo-K supports dynamic question generation by varying random seeds that control 
              statement selection and combination. Model rankings remain highly consistent across different question sets, confirming 
              that the combinatorial design creates a vast question space resistant to memorization-based shortcuts. This enables 
              periodic dataset refresh to prevent overfitting.
            </p>
            <p>
              <strong>Difficulty Control:</strong> The number of options can be adjusted to control question difficulty, providing 
              flexible evaluation granularity for different assessment needs.
            </p>
          </div>
        </NTabPane>
      </NTabs>
    </div>
  </section>
</template>

<style scoped>
.statistics-section {
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.stats-tabs {
  margin-bottom: 40px;
}

.stats-tabs:deep(.n-tabs-nav) {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 4px;
  border: 1px solid var(--border-color);
}

.stats-tabs:deep(.n-tabs-tab) {
  color: var(--text-secondary);
  font-weight: 500;
}

.stats-tabs:deep(.n-tabs-tab--active) {
  color: var(--text-primary);
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

.chart-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-lg) !important;
}

.chart-card:deep(.n-card__content) {
  padding: 24px;
}

.chart-card.full-width {
  grid-column: 1 / -1;
}

.chart-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.chart-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.chart {
  width: 100%;
  height: 350px;
}

.comparison-chart {
  height: 400px;
}

.stats-note {
  max-width: 800px;
  margin: 40px auto 0;
  padding: 24px 32px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  text-align: center;
}

.stats-note.full-width-note {
  max-width: 100%;
  width: 100%;
  margin: 24px 0 0;
  text-align: left;
}

.stats-note p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.stats-note p + p {
  margin-top: 16px;
}

.stats-note strong {
  color: var(--text-primary);
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.figure-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
}

.figure-image img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
}
</style>

