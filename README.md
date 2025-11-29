# RightMagic Tech Company Website

一个现代化的双语（中英文）科技风格公司网站，使用 Next.js 16、TypeScript 和 Tailwind CSS v4 构建。

A modern, bilingual (Chinese/English) tech-style company website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🌟 Features / 功能特性

### Core Functionality / 核心功能
- **Bilingual Support / 双语支持**: 使用 `next-intl` 实现中英文无缝切换
- **Theme Switcher / 主题切换**: 8 种精美主题（4 种深色 + 4 种浅色），支持用户偏好持久化
- **Responsive Design / 响应式设计**: 针对所有设备优化，采用现代玻璃态效果
- **Smooth Animations / 流畅动画**: 使用 Framer Motion 增强用户体验
- **SEO Optimized / SEO 优化**: 完整的元数据配置和搜索引擎优化
- **Performance Optimized / 性能优化**: 图片优化、代码分割、字体优化等
- **Mobile Menu / 移动端菜单**: 完善的移动端导航体验
- **Error Handling / 错误处理**: 友好的错误页面和加载状态

### Pages
1. **Home** - Hero section, company highlights, services, GDF methodology, clients showcase
2. **ZeroCraft** - Low-code platform with features, advantages, and case studies
3. **Gamium** - AI sandbox with red teaming, mock environment, and XAI features
4. **Partners** - Ecosystem partners categorized by type (Office, Middleware, Database, OS)
5. **About** - Company timeline, vision/mission, certifications

### Theme Options

**Dark Themes** 🌙
- Tech Blue (Default)
- Business Purple
- Vibrant Green
- Sunset Orange

**Light Themes** ☀️
- Fresh Blue
- Elegant Purple
- Nature Green
- Coral Pink

## 🚀 Getting Started / 快速开始

### Prerequisites / 前置要求
- Node.js 18+ 
- npm 或 yarn

### Installation / 安装

```bash
# 克隆仓库
git clone https://github.com/gahg96/Rightmagicwebsite.git
cd Rightmagicwebsite

# 安装依赖
npm install

# 配置环境变量（可选）
cp .env.example .env.local
# 编辑 .env.local 文件，设置 NEXT_PUBLIC_SITE_URL 等变量

# 运行开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### Build for Production / 生产构建

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### Environment Variables / 环境变量

创建 `.env.local` 文件（参考 `.env.example`）：

```env
# 网站基础配置
NEXT_PUBLIC_SITE_URL=https://rightmagicwebsite.vercel.app

# 环境配置
NODE_ENV=production
```

## 📁 Project Structure / 项目结构

```
Rightmagicwebsite/
├── src/
│   ├── app/
│   │   ├── [locale]/          # 国际化路由
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── error.tsx      # 错误页面
│   │   │   ├── loading.tsx    # 加载状态
│   │   │   ├── zerocraft/     # ZeroCraft 产品页
│   │   │   ├── gamium/        # Gamium 产品页
│   │   │   ├── partners/      # 合作伙伴页
│   │   │   ├── about/         # 关于我们页
│   │   │   └── layout.tsx     # 布局组件（含 SEO）
│   │   └── globals.css        # 全局样式（Tailwind v4）
│   ├── components/
│   │   ├── layout/            # 布局组件（Navbar, Footer, ThemeSwitcher）
│   │   ├── sections/          # 页面区块组件
│   │   └── ui/                # UI 组件（Button 等）
│   ├── contexts/
│   │   └── ThemeContext.tsx   # 主题管理
│   ├── i18n/
│   │   └── request.ts         # i18n 配置
│   ├── middleware.ts          # 中间件（路由、国际化）
│   └── navigation.ts          # next-intl 导航
├── messages/
│   ├── en.json                # 英文翻译
│   └── zh.json                # 中文翻译
├── public/
│   └── assets/                # 静态资源
├── .env.example               # 环境变量示例
├── next.config.ts             # Next.js 配置（性能优化）
├── tsconfig.json              # TypeScript 配置
└── package.json               # 项目依赖
```

## 🛠️ Tech Stack / 技术栈

- **Framework / 框架**: Next.js 16 (App Router)
- **Language / 语言**: TypeScript
- **Styling / 样式**: Tailwind CSS v4
- **Internationalization / 国际化**: next-intl
- **Animations / 动画**: Framer Motion
- **Icons / 图标**: Lucide React

## ⚡ Performance Optimizations / 性能优化

本项目已实施以下性能优化：

- ✅ **SEO 优化**: 完整的 metadata 配置，支持 Open Graph 和 Twitter Cards
- ✅ **图片优化**: Next.js Image 组件配置，支持 AVIF 和 WebP 格式
- ✅ **代码分割**: 自动代码分割和包导入优化
- ✅ **字体优化**: 使用系统字体栈，减少加载时间
- ✅ **压缩优化**: Gzip/Brotli 压缩，移除生产环境 console
- ✅ **安全头**: 配置安全 HTTP 头
- ✅ **响应式设计**: 完善的移动端菜单和响应式布局
- ✅ **错误处理**: 友好的错误页面和加载状态
- ✅ **TypeScript 严格模式**: 增强类型安全

## 🎨 Customization

### Adding New Themes

Edit `src/contexts/ThemeContext.tsx`:

```typescript
export const themes: Record<ThemeName, Theme> = {
  'your-theme': {
    name: 'your-theme',
    displayName: 'Your Theme Name',
    colors: {
      primary: '#yourcolor',
      secondary: '#yourcolor',
      accent: '#yourcolor',
    },
    background: '#yourcolor',
    foreground: '#yourcolor',
    isDark: true, // or false
  },
  // ... other themes
};
```

### Adding New Languages

1. Create a new message file in `messages/` (e.g., `ja.json`)
2. Update `src/i18n/request.ts` to include the new locale
3. Update `src/middleware.ts` to add the locale to the routing

## 📝 Available Scripts / 可用脚本

```bash
# 开发模式
npm run dev          # 启动开发服务器

# 生产构建
npm run build        # 构建生产版本
npm start            # 启动生产服务器

# 代码检查
npm run lint         # 运行 ESLint
```

## 🔧 Configuration / 配置说明

### Next.js 配置优化

- **图片优化**: 自动格式转换（AVIF/WebP）、响应式尺寸
- **包导入优化**: 自动优化 `lucide-react` 和 `framer-motion` 的导入
- **生产环境优化**: 自动移除 console（保留 error 和 warn）
- **安全头**: 配置 DNS 预取、X-Frame-Options 等

### TypeScript 配置

- **严格模式**: 启用所有严格检查
- **未使用变量检测**: 自动检测未使用的变量和参数
- **现代 ES 特性**: 使用 ES2020 目标

## 🐛 Troubleshooting / 故障排除

### 常见问题

1. **构建失败**: 确保 Node.js 版本 >= 18
2. **样式不生效**: 检查 Tailwind CSS v4 配置
3. **国际化不工作**: 确认 `messages/` 目录下的 JSON 文件存在

## 📄 License / 许可证

本项目为专有软件，版权归上海正奇信息科技有限公司所有。

This project is proprietary software owned by Shanghai Zhengqi Information Technology Co., Ltd.

## 🤝 Contact / 联系方式

- **Website / 网站**: [rightmagicwebsite.vercel.app](https://rightmagicwebsite.vercel.app)
- **Company / 公司**: 上海正奇信息科技有限公司

---

Built with ❤️ by RightMagic Team / 由 RightMagic 团队用 ❤️ 构建
