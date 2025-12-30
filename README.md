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

#### 首次设置步骤（重要！必须按顺序执行）：

**⚠️ 重要提示：必须先启用 GitHub Pages，再推送代码，否则工作流会失败！**

1. **首先启用 GitHub Pages**（在推送代码之前）：
   - 前往 GitHub 仓库页面
   - 点击 `Settings`（设置）
   - 在左侧菜单中找到 `Pages`
   - 在 `Build and deployment` 部分：
     - `Source` 选择 `GitHub Actions`
     - 如果看不到 `GitHub Actions` 选项，先选择 `Deploy from a branch`，然后改回 `GitHub Actions`
   - 保存设置（不需要等待部署，因为还没有工作流运行）

2. **推送代码到 GitHub**：
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **等待部署完成**：
   - 在仓库的 `Actions` 标签页查看部署进度
   - 如果看到 "Get Pages site failed" 错误，说明 Pages 还没有启用，请返回步骤 1
   - 部署成功后，页面将在几分钟内可通过 `https://encyclo-k.github.io` 访问

#### 故障排除：

**如果遇到 "Get Pages site failed" 或 "HttpError: Not Found" 错误：**
- 确保已经在 `Settings` → `Pages` 中启用了 Pages
- 确保选择了 `GitHub Actions` 作为部署源
- 如果仍然失败，尝试：
  1. 在 `Settings` → `Pages` 中，先选择 `Deploy from a branch`
  2. 选择任意分支（如 `main`），保存
  3. 然后再改回 `GitHub Actions`，保存
  4. 重新运行失败的 Actions 工作流（点击 "Re-run jobs"）

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
