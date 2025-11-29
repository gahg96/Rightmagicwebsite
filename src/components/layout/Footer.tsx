'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Navigation');

    return (
        <footer className="bg-black/50 border-t border-white/5 py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <div className="text-2xl font-bold tracking-tighter text-white mb-2">
                            Right<span className="text-primary">Magic</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Shanghai Zhengqi Information Technology Co., Ltd.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('contact')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
