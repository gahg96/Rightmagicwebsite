'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Layout, Cloud, Box, Zap } from 'lucide-react';

const icons = {
    feature1: Layout,
    feature2: Cloud,
    feature3: Box,
    feature4: Zap,
};

export default function ZeroCraftFeatures() {
    const t = useTranslations('ZeroCraft');

    const features = ['feature1', 'feature2', 'feature3', 'feature4'] as const;

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((key, index) => {
                        const Icon = icons[key];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{t(key)}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {t(`${key}Desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
