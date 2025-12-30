# Encyclo-K Project Page

A beautiful, interactive project page for **Encyclo-K**: Dynamic Evaluation of LLMs' Comprehensive Understanding over Multiple Knowledge Statements.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool
- **Naive UI** - A Vue 3 component library
- **ECharts** - Interactive charts (via vue-echarts)
- **Ionicons 5** - Icon library

## 📁 Project Structure

```
src/
├── App.vue                 # Main app component
├── main.js                 # Entry point
├── style.css               # Global styles
└── components/
    ├── HeroSection.vue     # Hero with title, stats, links
    ├── IntroSection.vue    # Introduction and key features
    ├── OverviewSection.vue # Dataset overview and distribution
    ├── StatisticsSection.vue # Interactive charts
    ├── LeaderboardSection.vue # Model rankings table
    ├── BibTexSection.vue   # Citation information
    └── FooterSection.vue   # Footer with links
```

## 🎨 Customization

### Update Content

1. **HeroSection.vue** - Update organizations, links, and key stats
2. **IntroSection.vue** - Modify feature descriptions
3. **OverviewSection.vue** - Update discipline data
4. **LeaderboardSection.vue** - Update model rankings
5. **BibTexSection.vue** - Update citation info

### Update Styles

- Edit `style.css` for global variables (colors, fonts, etc.)
- Each component has scoped styles that can be customized

### Add Pipeline Image

Place your pipeline diagram at `public/pipeline.png`

## 🚀 Deployment

### GitHub Pages (自动部署)

项目已配置 GitHub Actions 工作流，可以自动部署到 GitHub Pages。

#### 首次设置步骤：

1. **启用 GitHub Pages**：
   - 前往仓库的 `Settings` → `Pages`
   - 在 `Source` 部分，选择 `GitHub Actions` 作为部署源
   - 保存设置

2. **推送代码**：
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **等待部署完成**：
   - 在仓库的 `Actions` 标签页查看部署进度
   - 部署成功后，页面将在几分钟内可通过 `https://encyclo-k.github.io` 访问

#### 后续更新：

每次推送到 `main` 分支时，GitHub Actions 会自动：
- 安装依赖
- 构建项目
- 部署到 GitHub Pages

### 手动部署（备选方案）

如果需要手动部署：

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the built files

3. Configure GitHub Pages:
   - Go to repo Settings → Pages
   - Set source to `gh-pages` branch or `main/docs` folder

### Vite Base Path

如果部署到子目录（如 `username.github.io/repo-name`），需要更新 `vite.config.js`:

```js
export default defineConfig({
  base: '/repo-name/',
  // ...
})
```

当前配置为根路径 `/`，适用于 `encyclo-k.github.io` 这样的组织页面。

## 📝 License

MIT License
