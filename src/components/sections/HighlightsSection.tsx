'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, DollarSign, Award, TrendingUp } from 'lucide-react';

export default function HighlightsSection() {
    const t = useTranslations('Highlights');

    const highlights = [
        { key: 'highlight1', icon: Users, color: 'from-primary/20 to-primary/5', iconColor: 'text-primary' },
        { key: 'highlight2', icon: DollarSign, color: 'from-accent/20 to-accent/5', iconColor: 'text-accent' },
        { key: 'highlight3', icon: Award, color: 'from-secondary/20 to-secondary/5', iconColor: 'text-secondary' },
        { key: 'highlight4', icon: TrendingUp, color: 'from-primary/20 to-primary/5', iconColor: 'text-primary' },
    ];

    return (
        <section className="py-20 bg-black/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid opacity-5" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-6 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 hover:scale-105 transition-transform`}
                            >
                                <Icon className={`w-10 h-10 ${item.iconColor} mb-4`} />
                                <h3 className="text-lg font-bold text-white mb-2">{t(item.key)}</h3>
                                <p className="text-sm text-gray-400">{t(`${item.key}Desc`)}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
