'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Swords, Eye } from 'lucide-react';

export default function GamiumContent() {
    const t = useTranslations('Gamium');

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-10 rounded-3xl mb-16 border-primary/20"
                >
                    <p className="text-lg md:text-xl text-center leading-relaxed text-gray-200">
                        {t('concept')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20"
                    >
                        <Swords className="w-10 h-10 text-red-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">{t('feature1')}</h3>
                        <p className="text-gray-400 text-sm">Simulated attacks vs. Defense</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
                    >
                        <Shield className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">{t('feature2')}</h3>
                        <p className="text-gray-400 text-sm">1:1 High-fidelity Mock</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20"
                    >
                        <Eye className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">{t('feature3')}</h3>
                        <p className="text-gray-400 text-sm">Transparent Decision Process</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
