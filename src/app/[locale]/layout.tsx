import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import "../globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return {
    title: {
      default: isZh ? 'RightMagic - 科技驱动未来，匠心铸就奇迹' : 'RightMagic - Tech-Driven Future, Crafted with Magic',
      template: `%s | RightMagic`
    },
    description: isZh
      ? '您的数字化战略合作伙伴，提供零匠开发平台与Gamium AI演武场。专注信创软件服务、产品代理和自研产品销售。'
      : 'Your Digital Strategy Partner. Powering enterprises with ZeroCraft and Gamium AI Sandbox. Specializing in IT innovation services, product distribution, and proprietary products.',
    keywords: isZh
      ? ['RightMagic', '零匠平台', 'Gamium', '信创软件', '数字化转型', 'AI演武场']
      : ['RightMagic', 'ZeroCraft', 'Gamium', 'AI Sandbox', 'Digital Transformation', 'IT Innovation'],
    authors: [{ name: 'RightMagic Team' }],
    creator: 'Shanghai Zhengqi Information Technology Co., Ltd.',
    publisher: 'Shanghai Zhengqi Information Technology Co., Ltd.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rightmagicwebsite.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'zh-CN': '/zh',
        'en-US': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rightmagicwebsite.vercel.app',
      siteName: 'RightMagic',
      title: isZh ? 'RightMagic - 科技驱动未来，匠心铸就奇迹' : 'RightMagic - Tech-Driven Future, Crafted with Magic',
      description: isZh
        ? '您的数字化战略合作伙伴，提供零匠开发平台与Gamium AI演武场'
        : 'Your Digital Strategy Partner. Powering enterprises with ZeroCraft and Gamium AI Sandbox.',
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? 'RightMagic - 科技驱动未来' : 'RightMagic - Tech-Driven Future',
      description: isZh
        ? '您的数字化战略合作伙伴'
        : 'Your Digital Strategy Partner',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#050b14" />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
