import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import "../globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { getCompanyInfo } from '@/config/company';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === 'zh';
  
  // 从环境变量获取域名配置，如果没有则使用默认值
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const companyInfo = getCompanyInfo(siteUrl);

  return {
    title: {
      default: isZh 
        ? `${companyInfo.brandNameZh} - ${companyInfo.sloganZh}` 
        : `${companyInfo.brandName} - ${companyInfo.slogan}`,
      template: `%s | ${companyInfo.brandName}`
    },
    description: isZh
      ? `${companyInfo.descriptionZh}专注信创软件服务、产品代理和自研产品销售。`
      : `${companyInfo.description} Specializing in IT innovation services, product distribution, and proprietary products.`,
    keywords: isZh
      ? [companyInfo.brandNameZh, '零匠平台', 'Gamium', '信创软件', '数字化转型', 'AI演武场']
      : [companyInfo.brandName, 'ZeroCraft', 'Gamium', 'AI Sandbox', 'Digital Transformation', 'IT Innovation'],
    authors: [{ name: `${companyInfo.brandName} Team` }],
    creator: companyInfo.companyName,
    publisher: companyInfo.companyName,
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
      siteName: companyInfo.brandName,
      title: isZh 
        ? `${companyInfo.brandNameZh} - ${companyInfo.sloganZh}` 
        : `${companyInfo.brandName} - ${companyInfo.slogan}`,
      description: isZh
        ? companyInfo.descriptionZh
        : companyInfo.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh 
        ? `${companyInfo.brandNameZh} - ${companyInfo.sloganZh.split('，')[0]}` 
        : `${companyInfo.brandName} - ${companyInfo.slogan.split(',')[0]}`,
      description: isZh
        ? companyInfo.descriptionZh.split('。')[0]
        : companyInfo.description.split('.')[0],
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
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    themeColor: '#050b14',
    icons: {
      icon: '/favicon.ico',
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
