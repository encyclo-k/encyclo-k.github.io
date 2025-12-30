<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import HeroSection from './components/HeroSection.vue'
import IntroSection from './components/IntroSection.vue'
import OverviewSection from './components/OverviewSection.vue'
import StatisticsSection from './components/StatisticsSection.vue'
import LeaderboardSection from './components/LeaderboardSection.vue'
import BibTexSection from './components/BibTexSection.vue'
import FooterSection from './components/FooterSection.vue'

const themeOverrides = {
  common: {
    primaryColor: '#667eea',
    primaryColorHover: '#764ba2',
    primaryColorPressed: '#5a67d8',
    borderRadius: '12px',
    fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  Button: {
    borderRadiusMedium: '12px',
    borderRadiusLarge: '16px',
  },
  DataTable: {
    borderRadius: '12px',
    thColor: 'rgba(102, 126, 234, 0.08)',
    tdColor: 'transparent',
    thColorHover: 'rgba(102, 126, 234, 0.12)',
    tdColorHover: 'rgba(102, 126, 234, 0.06)',
    borderColor: 'rgba(102, 126, 234, 0.15)',
    thTextColor: '#1a1a2e',
    tdTextColor: 'rgba(26, 26, 46, 0.8)',
  },
  Card: {
    borderColor: 'rgba(102, 126, 234, 0.15)',
  },
  Tabs: {
    tabTextColorLine: 'rgba(26, 26, 46, 0.6)',
    tabTextColorActiveLine: '#667eea',
    tabTextColorHoverLine: '#764ba2',
  },
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NMessageProvider>
      <div class="app">
        <HeroSection />
        <IntroSection />
        <OverviewSection />
        <StatisticsSection />
        <LeaderboardSection />
        <BibTexSection />
        <FooterSection />
      </div>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
