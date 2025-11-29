'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function PartnersPage() {
    const t = useTranslations('Partners');

    const partners = [
        {
            category: 'category1',
            items: [
                { key: 'wps', logo: '🏢', color: 'from-blue-500/20 to-blue-600/5', borderColor: 'border-blue-500/30' }
            ]
        },
        {
            category: 'category2',
            items: [
                { key: 'tongtech', logo: '⚙️', color: 'from-purple-500/20 to-purple-600/5', borderColor: 'border-purple-500/30' }
            ]
        },
        {
            category: 'category3',
            items: [
                { key: 'oceanbase', logo: '🌊', color: 'from-cyan-500/20 to-cyan-600/5', borderColor: 'border-cyan-500/30' },
                { key: 'dameng', logo: '💾', color: 'from-green-500/20 to-green-600/5', borderColor: 'border-green-500/30' },
                { key: 'gbase', logo: '📊', color: 'from-teal-500/20 to-teal-600/5', borderColor: 'border-teal-500/30' }
            ]
        },
        {
            category: 'category4',
            items: [
                { key: 'tongxin', logo: '💻', color: 'from-orange-500/20 to-orange-600/5', borderColor: 'border-orange-500/30' }
            ]
        }
    ];

    const certifications = ['cert1', 'cert2', 'cert3', 'cert4'];

    return (
        <div className="pt-20 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-primary mb-4">{t('subtitle')}</p>
                    <p className="text-gray-400 max-w-3xl mx-auto">{t('description')}</p>
                </motion.div>

                {/* Partners by Category */}
                <div className="space-y-16 mb-20">
                    {partners.map((category) => (
                        <div key={category.category}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                            >
                                <div className="w-1 h-8 bg-primary rounded-full" />
                                {t(category.category)}
                            </motion.h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((partner, index) => (
                                    <motion.div
                                        key={partner.key}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`p-8 rounded-2xl bg-gradient-to-br ${partner.color} border ${partner.borderColor} hover:scale-105 transition-all`}
                                    >
                                        {/* Logo Placeholder */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center text-4xl">
                                                {partner.logo}
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{t(partner.key)}</h3>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {t(`${partner.key}Desc`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-10 rounded-3xl"
                >
                    <h2 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-3">
                        <Award className="w-8 h-8 text-primary" />
                        {t('certifications')}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                            >
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                                <span className="text-gray-300 font-medium">{t(cert)}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partnership Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block glass-panel p-8 rounded-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                                <div className="text-sm text-gray-400">战略合作伙伴</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-accent mb-2">全栈</div>
                                <div className="text-sm text-gray-400">信创解决方案</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-2">金牌</div>
                                <div className="text-sm text-gray-400">服务商资质</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">深度</div>
                                <div className="text-sm text-gray-400">技术认证</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
