'use client';

import { useTranslations } from 'next-intl';
import { getBrandName, getCompanyName } from '@/config/company';

export default function Footer() {
    const t = useTranslations('Navigation');
    const brandName = getBrandName('en');
    const companyName = getCompanyName('en');

    return (
        <footer className="bg-black/50 border-t border-white/5 py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <div className="text-2xl font-bold tracking-tighter text-white mb-2">
                            {brandName.includes('RightMagic') ? (
                                <>
                                    Right<span className="text-primary">Magic</span>
                                </>
                            ) : brandName.includes('RightNova') ? (
                                <>
                                    Right<span className="text-primary">Nova</span> <span className="text-primary">Labs</span>
                                </>
                            ) : (
                                brandName.split(' ').map((word, idx) => (
                                    <span key={idx}>
                                        {idx === 0 ? word : <span className="text-primary">{word}</span>}
                                        {idx < brandName.split(' ').length - 1 && ' '}
                                    </span>
                                ))
                            )}
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} {companyName}
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
