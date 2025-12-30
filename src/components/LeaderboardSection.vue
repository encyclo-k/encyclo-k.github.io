<script setup>
import { ref, computed } from 'vue'
import { NDataTable, NTabs, NTabPane, NTag, NSpace, NInput, NIcon } from 'naive-ui'
import { Search, TrendingUp, TrendingDown } from '@vicons/ionicons5'

const searchQuery = ref('')
const activeTab = ref('all')

// Leaderboard data based on paper
const chatModels = [
  { rank: 1, model: 'Qwen3-235B-A22B-Instruct-2507', avg: 50.40, sci: 53.30, eng: 51.42, lit: 48.97, med: 52.17, hist: 43.59, law: 47.62, econ: 56.45, agr: 34.82, edu: 56.88, mgt: 43.84, phil: 72.13, type: 'open' },
  { rank: 2, model: 'Kimi-K2-Instruct-0905', avg: 44.66, sci: 47.99, eng: 43.47, lit: 44.85, med: 45.79, hist: 40.96, law: 36.51, econ: 50.00, agr: 30.36, edu: 49.54, mgt: 39.73, phil: 57.38, type: 'open' },
  { rank: 3, model: 'DeepSeek-V3.1-Terminus-non-thinking', avg: 42.70, sci: 40.98, eng: 43.93, lit: 45.58, med: 45.79, hist: 38.19, law: 40.74, econ: 46.77, agr: 28.57, edu: 53.21, mgt: 27.40, phil: 57.38, type: 'open' },
  { rank: 4, model: 'Kimi-K2.volc.foreval', avg: 40.53, sci: 41.55, eng: 41.32, lit: 40.97, med: 39.81, hist: 36.88, law: 40.21, econ: 49.19, agr: 26.79, edu: 44.04, mgt: 39.73, phil: 55.74, type: 'open' },
  { rank: 5, model: 'Qwen3-30B-A3B-Instruct-2507', avg: 36.72, sci: 38.97, eng: 38.14, lit: 35.03, med: 37.50, hist: 32.51, law: 35.45, econ: 33.06, agr: 25.00, edu: 43.12, mgt: 39.73, phil: 49.18, type: 'open' },
  { rank: 6, model: 'GLM-4.6', avg: 36.52, sci: 33.98, eng: 37.57, lit: 36.61, med: 39.67, hist: 33.53, law: 39.15, econ: 40.32, agr: 31.25, edu: 47.71, mgt: 32.88, phil: 45.90, type: 'open' },
  { rank: 7, model: 'DeepSeek-V3-0324', avg: 30.85, sci: 28.58, eng: 31.78, lit: 32.24, med: 32.34, hist: 29.88, law: 32.80, econ: 29.84, agr: 24.11, edu: 38.53, mgt: 27.40, phil: 36.07, type: 'open' },
  { rank: 8, model: 'Qwen3-235B-A22B-non-thinking', avg: 28.70, sci: 26.57, eng: 31.44, lit: 31.39, med: 28.40, hist: 26.82, law: 26.46, econ: 29.03, agr: 13.39, edu: 37.61, mgt: 31.51, phil: 36.07, type: 'open' },
  { rank: 9, model: 'Qwen3-4B-Instruct-2507', avg: 28.60, sci: 29.79, eng: 31.44, lit: 26.30, med: 29.08, hist: 24.93, law: 25.93, econ: 31.45, agr: 16.96, edu: 33.94, mgt: 31.51, phil: 40.98, type: 'open' },
  { rank: 10, model: 'Qwen3-32B-no-thinking', avg: 27.81, sci: 26.33, eng: 27.13, lit: 28.48, med: 30.03, hist: 29.01, law: 26.46, econ: 23.39, agr: 21.43, edu: 36.70, mgt: 23.29, phil: 32.79, type: 'open' },
  { rank: 11, model: 'Qwen3-30B-A3B-non-thinking', avg: 25.59, sci: 25.76, eng: 27.92, lit: 24.61, med: 26.09, hist: 24.20, law: 21.16, econ: 23.39, agr: 18.75, edu: 34.86, mgt: 20.55, phil: 31.15, type: 'open' },
  { rank: 12, model: 'Qwen2.5-32B-Instruct', avg: 25.31, sci: 21.10, eng: 27.81, lit: 27.64, med: 25.14, hist: 25.22, law: 27.51, econ: 22.58, agr: 22.32, edu: 37.61, mgt: 20.55, phil: 34.43, type: 'open' },
  { rank: 13, model: 'Qwen2.5-72B-Instruct', avg: 25.03, sci: 22.95, eng: 26.11, lit: 26.55, med: 25.41, hist: 24.78, law: 25.40, econ: 23.39, agr: 19.64, edu: 35.78, mgt: 24.66, phil: 22.95, type: 'open' },
  { rank: 14, model: 'DeepSeek-V3', avg: 22.93, sci: 23.19, eng: 24.97, lit: 21.58, med: 23.10, hist: 22.16, law: 21.16, econ: 23.39, agr: 16.07, edu: 31.19, mgt: 16.44, phil: 22.95, type: 'open' },
  { rank: 15, model: 'Llama-3.3-70B-Instruct', avg: 20.07, sci: 19.00, eng: 23.95, lit: 17.94, med: 20.24, hist: 17.20, law: 24.87, econ: 16.13, agr: 25.00, edu: 22.94, mgt: 20.55, phil: 22.95, type: 'open' },
  { rank: 16, model: 'Qwen2.5-14B-Instruct', avg: 20.01, sci: 18.60, eng: 22.36, lit: 17.94, med: 21.60, hist: 21.72, law: 21.16, econ: 12.10, agr: 17.86, edu: 24.77, mgt: 9.59, phil: 24.59, type: 'open' },
  { rank: 17, model: 'Qwen3-8B-no-thinking', avg: 19.61, sci: 18.68, eng: 20.09, lit: 22.42, med: 20.24, hist: 19.68, law: 17.46, econ: 13.71, agr: 12.50, edu: 17.43, mgt: 21.92, phil: 18.03, type: 'open' },
  { rank: 18, model: 'Llama-3.1-70B-Instruct', avg: 19.37, sci: 19.24, eng: 21.00, lit: 19.76, med: 18.34, hist: 16.47, law: 19.58, econ: 19.35, agr: 18.75, edu: 31.19, mgt: 15.07, phil: 22.95, type: 'open' },
  { rank: 19, model: 'Qwen2.5-7B-Instruct', avg: 19.02, sci: 19.57, eng: 18.62, lit: 20.61, med: 20.52, hist: 16.91, law: 13.76, econ: 20.97, agr: 16.96, edu: 15.60, mgt: 15.07, phil: 24.59, type: 'open' },
  { rank: 20, model: 'Qwen3-4B-no-thinking', avg: 18.18, sci: 18.68, eng: 17.37, lit: 18.30, med: 19.16, hist: 18.08, law: 16.93, econ: 12.90, agr: 12.50, edu: 22.94, mgt: 17.81, phil: 24.59, type: 'open' },
  { rank: 21, model: 'Qwen3-14B-no-thinking', avg: 17.98, sci: 16.43, eng: 18.73, lit: 19.27, med: 19.43, hist: 18.66, law: 15.87, econ: 8.87, agr: 15.18, edu: 19.27, mgt: 19.18, phil: 22.95, type: 'open' },
  { rank: 22, model: 'Qwen2.5-3B-Instruct', avg: 17.75, sci: 16.75, eng: 17.48, lit: 19.39, med: 18.07, hist: 19.83, law: 14.81, econ: 13.71, agr: 13.39, edu: 18.35, mgt: 19.18, phil: 14.75, type: 'open' },
  { rank: 23, model: 'Yi-1.5-34B-Chat', avg: 17.65, sci: 14.57, eng: 17.37, lit: 19.76, med: 19.02, hist: 19.68, law: 20.63, econ: 12.10, agr: 15.18, edu: 20.18, mgt: 20.55, phil: 14.75, type: 'open' },
  { rank: 24, model: 'Yi-1.5-9B-Chat', avg: 17.43, sci: 16.83, eng: 18.16, lit: 17.82, med: 18.89, hist: 17.20, law: 14.81, econ: 16.94, agr: 16.07, edu: 15.60, mgt: 15.07, phil: 16.39, type: 'open' },
  { rank: 25, model: 'Qwen2.5-1.5B-Instruct', avg: 17.07, sci: 17.55, eng: 15.66, lit: 18.06, med: 17.93, hist: 17.20, law: 16.40, econ: 15.32, agr: 10.71, edu: 20.18, mgt: 16.44, phil: 14.75, type: 'open' },
  { rank: 26, model: 'Qwen3-1.7B-no-thinking', avg: 17.03, sci: 17.47, eng: 15.78, lit: 17.70, med: 16.17, hist: 16.76, law: 14.29, econ: 14.52, agr: 22.32, edu: 22.02, mgt: 17.81, phil: 24.59, type: 'open' },
  { rank: 27, model: 'MAP-Neo-7B-Instruct-v0.1', avg: 16.81, sci: 15.46, eng: 17.82, lit: 17.33, med: 16.85, hist: 17.20, law: 14.81, econ: 16.94, agr: 14.29, edu: 20.18, mgt: 17.81, phil: 21.31, type: 'open' },
  { rank: 28, model: 'gemma-2-9b-it', avg: 16.55, sci: 16.91, eng: 17.03, lit: 14.91, med: 17.12, hist: 15.31, law: 15.34, econ: 25.00, agr: 12.50, edu: 13.76, mgt: 24.66, phil: 21.31, type: 'open' },
  { rank: 29, model: 'Yi-1.5-6B-Chat', avg: 15.52, sci: 15.46, eng: 15.44, lit: 14.67, med: 14.54, hist: 17.64, law: 17.46, econ: 12.90, agr: 15.18, edu: 9.17, mgt: 19.18, phil: 24.59, type: 'open' },
  { rank: 30, model: 'Llama-3.1-8B-Instruct', avg: 15.38, sci: 15.78, eng: 15.78, lit: 13.33, med: 17.26, hist: 16.76, law: 16.40, econ: 12.90, agr: 8.93, edu: 16.51, mgt: 5.48, phil: 14.75, type: 'open' },
  { rank: 31, model: 'Qwen3-0.6B-no-thinking', avg: 15.32, sci: 15.78, eng: 16.23, lit: 15.52, med: 13.86, hist: 15.60, law: 14.81, econ: 13.71, agr: 14.29, edu: 18.35, mgt: 9.59, phil: 13.11, type: 'open' },
  { rank: 32, model: 'gemma-2-2b-it', avg: 12.94, sci: 12.16, eng: 12.60, lit: 12.36, med: 13.32, hist: 13.70, law: 14.29, econ: 16.94, agr: 8.93, edu: 20.18, mgt: 13.70, phil: 9.84, type: 'open' },
  { rank: 33, model: 'OLMo-2-1124-7B-Instruct', avg: 12.76, sci: 13.45, eng: 11.12, lit: 10.91, med: 12.23, hist: 14.14, law: 14.29, econ: 12.10, agr: 17.86, edu: 31.19, mgt: 2.74, phil: 4.92, type: 'open' },
  { rank: 34, model: 'Qwen2.5-0.5B-Instruct', avg: 11.61, sci: 11.03, eng: 12.15, lit: 8.00, med: 13.72, hist: 12.39, law: 12.17, econ: 12.10, agr: 15.18, edu: 18.35, mgt: 13.70, phil: 6.56, type: 'open' },
  { rank: 35, model: 'Llama-3.2-3B-Instruct', avg: 11.49, sci: 12.40, eng: 11.12, lit: 9.58, med: 11.82, hist: 12.39, law: 13.76, econ: 8.87, agr: 18.75, edu: 11.93, mgt: 4.11, phil: 3.28, type: 'open' },
  { rank: 36, model: 'Llama-3.2-1B-Instruct', avg: 9.71, sci: 9.02, eng: 8.51, lit: 7.03, med: 11.68, hist: 14.72, law: 11.64, econ: 4.03, agr: 13.39, edu: 10.09, mgt: 4.11, phil: 1.64, type: 'open' },
]

const reasoningModels = [
  { rank: 1, model: 'OpenAI-GPT-5.1-high', avg: 62.07, sci: 64.09, eng: 66.74, lit: 55.15, med: 65.08, hist: 51.17, law: 70.37, econ: 70.16, agr: 56.25, edu: 73.39, mgt: 68.49, phil: 73.77, type: 'closed' },
  { rank: 2, model: 'Gemini-3-Pro-Preview-Exp', avg: 61.75, sci: 62.56, eng: 63.00, lit: 56.97, med: 65.08, hist: 57.43, law: 64.02, econ: 74.19, agr: 51.79, edu: 69.72, mgt: 67.12, phil: 65.57, type: 'closed' },
  { rank: 3, model: 'Gemini-2.5-Pro', avg: 58.93, sci: 61.35, eng: 58.12, lit: 55.64, med: 61.96, hist: 51.17, law: 66.67, econ: 68.55, agr: 46.43, edu: 70.64, mgt: 61.64, phil: 72.13, type: 'closed' },
  { rank: 4, model: 'OpenAI-o3-high.code', avg: 58.36, sci: 60.95, eng: 63.22, lit: 49.70, med: 65.35, hist: 47.52, law: 57.67, econ: 62.90, agr: 52.68, edu: 75.23, mgt: 56.16, phil: 65.57, type: 'closed' },
  { rank: 5, model: 'OpenAI-GPT-5-high.code', avg: 57.26, sci: 59.26, eng: 60.84, lit: 49.21, med: 63.86, hist: 46.21, law: 66.14, econ: 64.52, agr: 50.89, edu: 62.39, mgt: 64.38, phil: 70.49, type: 'closed' },
  { rank: 6, model: 'Qwen3-235B-A22B-Thinking-2507', avg: 51.77, sci: 55.88, eng: 54.71, lit: 47.76, med: 54.48, hist: 45.19, law: 43.39, econ: 55.65, agr: 33.04, edu: 61.47, mgt: 47.95, phil: 60.66, type: 'open' },
  { rank: 7, model: 'Doubao-1.6-thinking.foreval', avg: 50.97, sci: 51.93, eng: 51.87, lit: 47.03, med: 55.43, hist: 47.08, law: 49.21, econ: 53.23, agr: 35.71, edu: 65.14, mgt: 54.79, phil: 60.66, type: 'open' },
  { rank: 8, model: 'DeepSeek-V3.1-Terminus', avg: 49.78, sci: 51.61, eng: 49.60, lit: 47.64, med: 52.17, hist: 45.04, law: 52.38, econ: 57.26, agr: 36.61, edu: 55.05, mgt: 42.47, phil: 68.85, type: 'open' },
  { rank: 9, model: 'DeepSeek-R1', avg: 48.99, sci: 51.21, eng: 49.60, lit: 45.33, med: 52.99, hist: 44.75, law: 50.26, econ: 56.45, agr: 33.93, edu: 54.13, mgt: 45.21, phil: 47.54, type: 'open' },
  { rank: 10, model: 'Claude-4-Sonnet-thinking-azure', avg: 48.57, sci: 50.56, eng: 51.53, lit: 45.94, med: 50.41, hist: 40.09, law: 49.74, econ: 57.26, agr: 36.61, edu: 67.89, mgt: 36.99, phil: 54.10, type: 'closed' },
  { rank: 11, model: 'OpenAI-o1-1217.high.code', avg: 46.80, sci: 48.71, eng: 43.47, lit: 40.48, med: 51.90, hist: 43.59, law: 50.26, econ: 57.26, agr: 50.00, edu: 58.72, mgt: 49.32, phil: 54.10, type: 'closed' },
  { rank: 12, model: 'Qwen3-235B-A22B', avg: 43.25, sci: 41.38, eng: 44.38, lit: 43.88, med: 48.91, hist: 37.90, law: 40.21, econ: 50.00, agr: 28.57, edu: 49.54, mgt: 45.21, phil: 57.38, type: 'open' },
  { rank: 13, model: 'QwQ-32B', avg: 40.97, sci: 41.79, eng: 44.49, lit: 37.58, med: 44.84, hist: 34.84, law: 35.45, econ: 48.39, agr: 20.54, edu: 60.55, mgt: 34.25, phil: 54.10, type: 'open' },
  { rank: 14, model: 'Qwen3-30B-A3B-Thinking-2507', avg: 40.57, sci: 43.56, eng: 43.25, lit: 37.45, med: 44.02, hist: 34.99, law: 36.51, econ: 40.32, agr: 25.00, edu: 43.12, mgt: 31.51, phil: 52.46, type: 'open' },
  { rank: 15, model: 'Qwen3-32B', avg: 37.28, sci: 37.04, eng: 40.41, lit: 35.76, med: 40.62, hist: 32.65, law: 31.22, econ: 38.71, agr: 29.46, edu: 43.12, mgt: 38.36, phil: 47.54, type: 'open' },
  { rank: 16, model: 'Qwen3-4B-Thinking-2507', avg: 33.45, sci: 38.08, eng: 35.98, lit: 29.94, med: 33.29, hist: 29.15, law: 21.69, econ: 37.10, agr: 22.32, edu: 41.28, mgt: 27.40, phil: 42.62, type: 'open' },
  { rank: 17, model: 'Qwen3-30B-A3B', avg: 31.56, sci: 32.13, eng: 33.48, lit: 32.48, med: 33.56, hist: 28.43, law: 27.51, econ: 29.03, agr: 19.64, edu: 38.53, mgt: 21.92, phil: 29.51, type: 'open' },
  { rank: 18, model: 'Qwen3-14B', avg: 30.79, sci: 32.61, eng: 34.17, lit: 28.73, med: 32.34, hist: 26.68, law: 28.04, econ: 18.55, agr: 25.00, edu: 37.61, mgt: 28.77, phil: 34.43, type: 'open' },
  { rank: 19, model: 'Qwen3-8B', avg: 26.78, sci: 28.26, eng: 29.06, lit: 23.52, med: 27.31, hist: 25.22, law: 23.81, econ: 24.19, agr: 14.29, edu: 42.20, mgt: 28.77, phil: 26.23, type: 'open' },
  { rank: 20, model: 'Qwen3-4B', avg: 23.64, sci: 26.25, eng: 25.09, lit: 22.42, med: 22.83, hist: 20.85, law: 17.99, econ: 21.77, agr: 17.86, edu: 33.03, mgt: 20.55, phil: 26.23, type: 'open' },
  { rank: 21, model: 'Qwen3-1.7B', avg: 18.30, sci: 17.87, eng: 20.20, lit: 18.79, med: 17.66, hist: 17.78, law: 16.93, econ: 17.74, agr: 16.96, edu: 15.60, mgt: 17.81, phil: 19.67, type: 'open' },
  { rank: 22, model: 'Qwen3-0.6B', avg: 16.04, sci: 16.02, eng: 17.14, lit: 16.61, med: 13.86, hist: 15.45, law: 13.76, econ: 19.35, agr: 19.64, edu: 13.76, mgt: 15.07, phil: 24.59, type: 'open' },
]

const columns = [
  {
    title: 'Rank',
    key: 'rank',
    width: 50,
    align: 'center',
    render: (row) => {
      const rankClass = row.rank <= 3 ? `rank-${row.rank}` : ''
      return h('span', { class: ['rank-badge', rankClass] }, row.rank)
    }
  },
  {
    title: 'Model',
    key: 'model',
    minWidth: 180,
    render: (row) => {
      return h('div', { class: 'model-cell' }, [
        h('span', { class: 'model-name' }, row.model),
        h(NTag, { 
          size: 'small', 
          type: row.type === 'open' ? 'success' : 'warning',
          round: true
        }, () => row.type)
      ])
    }
  },
  {
    title: 'Avg.',
    key: 'avg',
    width: 55,
    align: 'center',
    sorter: (a, b) => a.avg - b.avg,
    render: (row) => h('span', { class: 'accuracy-value' }, row.avg.toFixed(2))
  },
  {
    title: 'Sci.',
    key: 'sci',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.sci - b.sci,
    render: (row) => h('span', { class: 'score-cell' }, row.sci.toFixed(2))
  },
  {
    title: 'Eng.',
    key: 'eng',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.eng - b.eng,
    render: (row) => h('span', { class: 'score-cell' }, row.eng.toFixed(2))
  },
  {
    title: 'Lit.',
    key: 'lit',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.lit - b.lit,
    render: (row) => h('span', { class: 'score-cell' }, row.lit.toFixed(2))
  },
  {
    title: 'Med.',
    key: 'med',
    width: 52,
    align: 'center',
    sorter: (a, b) => a.med - b.med,
    render: (row) => h('span', { class: 'score-cell' }, row.med.toFixed(2))
  },
  {
    title: 'Hist.',
    key: 'hist',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.hist - b.hist,
    render: (row) => h('span', { class: 'score-cell' }, row.hist.toFixed(2))
  },
  {
    title: 'Law',
    key: 'law',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.law - b.law,
    render: (row) => h('span', { class: 'score-cell' }, row.law.toFixed(2))
  },
  {
    title: 'Econ.',
    key: 'econ',
    width: 52,
    align: 'center',
    sorter: (a, b) => a.econ - b.econ,
    render: (row) => h('span', { class: 'score-cell' }, row.econ.toFixed(2))
  },
  {
    title: 'Agr.',
    key: 'agr',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.agr - b.agr,
    render: (row) => h('span', { class: 'score-cell' }, row.agr.toFixed(2))
  },
  {
    title: 'Edu.',
    key: 'edu',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.edu - b.edu,
    render: (row) => h('span', { class: 'score-cell' }, row.edu.toFixed(2))
  },
  {
    title: 'Mgt.',
    key: 'mgt',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.mgt - b.mgt,
    render: (row) => h('span', { class: 'score-cell' }, row.mgt.toFixed(2))
  },
  {
    title: 'Phil.',
    key: 'phil',
    width: 50,
    align: 'center',
    sorter: (a, b) => a.phil - b.phil,
    render: (row) => h('span', { class: 'score-cell' }, row.phil.toFixed(2))
  },
]

const filteredChatModels = computed(() => {
  if (!searchQuery.value) return chatModels
  const query = searchQuery.value.toLowerCase()
  return chatModels.filter(m => m.model.toLowerCase().includes(query))
})

const filteredReasoningModels = computed(() => {
  if (!searchQuery.value) return reasoningModels
  const query = searchQuery.value.toLowerCase()
  return reasoningModels.filter(m => m.model.toLowerCase().includes(query))
})

// All models combined and sorted by avg
const allModels = computed(() => {
  const combined = [
    ...chatModels.map(m => ({ ...m, category: 'Chat' })),
    ...reasoningModels.map(m => ({ ...m, category: 'Reasoning' }))
  ]
  return combined.sort((a, b) => b.avg - a.avg).map((m, i) => ({ ...m, rank: i + 1 }))
})

const filteredAllModels = computed(() => {
  if (!searchQuery.value) return allModels.value
  const query = searchQuery.value.toLowerCase()
  return allModels.value.filter(m => m.model.toLowerCase().includes(query))
})

import { h } from 'vue'
</script>

<template>
  <section id="leaderboard" class="section leaderboard-section">
    <div class="container">
      <h2 class="section-title">Leaderboard</h2>

      <div class="leaderboard-header">
        <p class="leaderboard-desc">
          We evaluate <strong>50+ LLMs</strong> on Encyclo-K. The benchmark poses substantial challenges with strong discriminative power.
        </p>
        
        <div class="search-box">
          <NInput
            v-model:value="searchQuery"
            placeholder="Search models..."
            clearable
            size="large"
          >
            <template #prefix>
              <NIcon :component="Search" />
            </template>
          </NInput>
        </div>
      </div>

      <div class="top-performers">
        <div class="performer-card chat-top">
          <span class="performer-label">Best Chat Model</span>
          <span class="performer-model">Qwen3-235B-A22B-Instruct-2507</span>
          <span class="performer-score">50.40%</span>
        </div>
        <div class="performer-card reasoning-top">
          <span class="performer-label">Best Reasoning Model</span>
          <span class="performer-model">OpenAI-GPT-5.1-high</span>
          <span class="performer-score">62.07%</span>
        </div>
      </div>

      <NTabs v-model:value="activeTab" type="line" animated class="leaderboard-tabs">
        <NTabPane name="all" tab="All Models">
          <NDataTable
            :columns="columns"
            :data="filteredAllModels"
            :bordered="false"
            :single-line="false"
            striped
            class="leaderboard-table"
          />
        </NTabPane>
        <NTabPane name="chat" tab="Chat Models">
          <NDataTable
            :columns="columns"
            :data="filteredChatModels"
            :bordered="false"
            :single-line="false"
            striped
            class="leaderboard-table"
          />
        </NTabPane>
        <NTabPane name="reasoning" tab="Reasoning Models">
          <NDataTable
            :columns="columns"
            :data="filteredReasoningModels"
            :bordered="false"
            :single-line="false"
            striped
            class="leaderboard-table"
          />
        </NTabPane>
      </NTabs>
    </div>
  </section>
</template>

<style scoped>
.leaderboard-section {
  background: var(--bg-secondary);
}

.leaderboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;
}

.leaderboard-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  flex: 1;
}

.leaderboard-desc strong {
  color: var(--text-primary);
}

.search-box {
  width: 280px;
}

.search-box:deep(.n-input) {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

.search-box:deep(.n-input:focus-within) {
  border-color: var(--border-highlight);
}

.top-performers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

@media (max-width: 640px) {
  .top-performers {
    grid-template-columns: 1fr;
  }
}

.performer-card {
  padding: 24px 28px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.performer-card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.1;
  z-index: 0;
}

.chat-top {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.reasoning-top {
  background: linear-gradient(135deg, rgba(245, 87, 108, 0.15), rgba(240, 147, 251, 0.15));
  border: 1px solid rgba(245, 87, 108, 0.3);
}

.performer-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-weight: 500;
}

.performer-model {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}

.performer-score {
  font-size: 2rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.leaderboard-tabs:deep(.n-tabs-nav) {
  margin-bottom: 16px;
}

.leaderboard-tabs:deep(.n-tabs-tab) {
  font-weight: 500;
  font-size: 1rem;
}

.leaderboard-table {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-lg) !important;
  overflow-x: auto;
}

.leaderboard-table:deep(.n-data-table-wrapper) {
  min-width: 1000px;
}

.leaderboard-table:deep(.n-data-table-thead) {
  background: rgba(102, 126, 234, 0.1);
}

.leaderboard-table:deep(.n-data-table-th) {
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
  padding: 10px 6px !important;
}

.leaderboard-table:deep(.n-data-table-td) {
  padding: 8px 6px !important;
  font-size: 0.85rem;
}

.leaderboard-table:deep(.n-data-table-tr:hover) {
  background: rgba(102, 126, 234, 0.06) !important;
}

:deep(.rank-badge) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.85rem;
  background: rgba(102, 126, 234, 0.1);
  color: var(--text-primary);
}

:deep(.rank-badge.rank-1) {
  background: linear-gradient(135deg, #ffd700, #ffb700);
  color: #000;
}

:deep(.rank-badge.rank-2) {
  background: linear-gradient(135deg, #c0c0c0, #a0a0a0);
  color: #000;
}

:deep(.rank-badge.rank-3) {
  background: linear-gradient(135deg, #cd7f32, #b87333);
  color: #fff;
}

:deep(.model-cell) {
  display: flex;
  align-items: center;
  gap: 10px;
}

:deep(.model-name) {
  font-weight: 500;
}

:deep(.accuracy-value) {
  font-weight: 600;
  color: var(--text-primary);
}

:deep(.score-cell) {
  color: var(--text-secondary);
}

</style>

