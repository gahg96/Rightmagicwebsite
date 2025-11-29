'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Swords, Eye, Target, Users, TrendingUp } from 'lucide-react';

export default function GamiumPage() {
    const t = useTranslations('Gamium');

    return (
        <div className="pt-10">
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Core Concept */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 rounded-3xl mb-16 border-primary/20"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-primary text-center">{t('核心理念')}</h2>
                        <p className="text-lg text-center leading-relaxed text-gray-200 mb-4">
                            {t('concept')}
                        </p>
                        <p className="text-md text-center leading-relaxed text-gray-400">
                            {t('理念Desc')}
                        </p>
                    </motion.div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20"
                        >
                            <Swords className="w-10 h-10 text-red-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-white">{t('feature1')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('feature1Desc')}</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
                        >
                            <Shield className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-white">{t('feature2')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('feature2Desc')}</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20"
                        >
                            <Eye className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-white">{t('feature3')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('feature3Desc')}</p>
                        </motion.div>
                    </div>

                    {/* Application Scenarios */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            {t('应用场景')}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="w-8 h-8 text-accent" />
                                    <h3 className="text-xl font-bold text-white">{t('场景1')}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{t('场景1Desc')}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-8 h-8 text-accent" />
                                    <h3 className="text-xl font-bold text-white">{t('场景2')}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{t('场景2Desc')}</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Value Highlights */}
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            {t('价值亮点')}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {['价值1', '价值2', '价值3'].map((key, index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-gradient-to-b from-accent/10 to-transparent rounded-xl border border-accent/20"
                                >
                                    <TrendingUp className="w-8 h-8 text-accent mb-3" />
                                    <h4 className="text-lg font-bold mb-2 text-white">{t(key)}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{t(`${key}Desc`)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
