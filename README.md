# RightMagic Tech Company Website

A modern, bilingual (Chinese/English) tech-style company website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🌟 Features

### Core Functionality
- **Bilingual Support**: Seamless switching between Chinese and English using `next-intl`
- **Theme Switcher**: 8 beautiful themes (4 dark + 4 light) with persistent user preference
- **Responsive Design**: Optimized for all devices with modern glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for enhanced UX

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd tech-company-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
tech-company-site/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── zerocraft/     # ZeroCraft product page
│   │   │   ├── gamium/        # Gamium product page
│   │   │   ├── partners/      # Partners page
│   │   │   └── about/         # About page
│   │   └── globals.css        # Global styles with Tailwind v4
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, ThemeSwitcher
│   │   └── sections/          # Page sections
│   ├── contexts/
│   │   └── ThemeContext.tsx   # Theme management
│   ├── i18n/
│   │   └── request.ts         # i18n configuration
│   └── navigation.ts          # next-intl navigation
├── messages/
│   ├── en.json                # English translations
│   └── zh.json                # Chinese translations
└── public/
    └── assets/                # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Icons**: Lucide React

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

## 📄 License

This project is proprietary software owned by Shanghai Zhengqi Information Technology Co., Ltd.

## 🤝 Contact

- Website: [Your Website]
- Email: [Your Email]

---

Built with ❤️ by RightMagic Team
