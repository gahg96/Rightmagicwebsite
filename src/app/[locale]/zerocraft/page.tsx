'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Layout, Cloud, Box, Zap, Lightbulb, Blocks, Code, Rocket } from 'lucide-react';

const featureIcons = {
    feature1: Layout,
    feature2: Cloud,
    feature3: Box,
    feature4: Zap,
};

const advantageIcons = {
    亮点1: Lightbulb,
    亮点2: Blocks,
    亮点3: Code,
    亮点4: Rocket,
};

export default function ZeroCraftPage() {
    const t = useTranslations('ZeroCraft');

    const features = ['feature1', 'feature2', 'feature3', 'feature4'] as const;
    const advantages = ['亮点1', '亮点2', '亮点3', '亮点4'] as const;

    return (
        <div className="pt-10">
            {/* Hero Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
                            {t('subtitle')}
                        </p>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            {t('intro')}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {features.map((key, index) => {
                            const Icon = featureIcons[key];
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

                    {/* Advantages Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            {t('亮点')}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {advantages.map((key, index) => {
                                const Icon = advantageIcons[key];
                                return (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center p-6 bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 hover:border-primary/20 transition-all"
                                    >
                                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 text-white">{t(key)}</h4>
                                        <p className="text-sm text-gray-400">{t(`${key}Desc`)}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            {t('案例标题')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-2xl border-l-4 border-primary"
                            >
                                <h3 className="text-xl font-bold mb-4 text-primary">{t('案例1')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('案例1Desc')}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-2xl border-l-4 border-secondary"
                            >
                                <h3 className="text-xl font-bold mb-4 text-secondary">{t('案例2')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('案例2Desc')}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
