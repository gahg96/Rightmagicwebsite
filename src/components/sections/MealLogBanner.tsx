'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Salad, ArrowRight, Sparkles } from 'lucide-react';

export default function MealLogBanner() {
    const t = useTranslations('MealLog');

    return (
        <section className="py-14 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.a
                    href="/meal-log/"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-white/10 hover:border-primary/40 hover:scale-[1.01] transition-all group"
                >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <Salad className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-1.5 text-xs text-accent mb-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            {t('badge')}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">{t('title')}</h2>
                        <p className="text-sm text-gray-400">{t('desc')}</p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium group-hover:gap-3 transition-all">
                        {t('button')}
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </motion.a>
            </div>
        </section>
    );
}
