'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';
import { getCompanyInfo, getBrandName } from '@/config/company';

export default function AboutPage() {
    const t = useTranslations('About');
    const locale = useLocale();
    const companyInfo = getCompanyInfo();
    const brandName = getBrandName(locale);
    
    // 根据语言环境获取关于我们的标题
    const aboutTitle = locale === 'zh' 
        ? `关于${companyInfo.brandNameZh}`
        : `About ${brandName}`;

    const milestones = [
        { year: '2019', icon: '🌱' },
        { year: '2020', icon: '🤝' },
        { year: '2021', icon: '🚀' },
        { year: '2022', icon: '📈' },
        { year: '2023', icon: '🏆' },
        { year: '2024', icon: '💡' },
    ];

    return (
        <div className="pt-20 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        {aboutTitle}
                    </h1>
                    <p className="text-2xl text-primary mb-6 italic">{companyInfo.sloganZh}</p>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {companyInfo.region === 'domestic' 
                            ? `${companyInfo.companyNameZh}成立于2019年，由IBM专家创办，注册资金3000万，汇聚金融科技精英队伍。`
                            : `${companyInfo.companyNameZh}致力于为全球企业提供专业的数字化解决方案，专注于金融科技领域的创新与发展。`}
                        {companyInfo.region === 'domestic' 
                            ? '成立于2019年，由IBM专家创办，注册资金3000万，汇聚金融科技精英队伍。'
                            : '致力于为全球企业提供专业的数字化解决方案。'}
                    </p>
                </motion.div>

                {/* Vision, Mission, Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-2xl text-center"
                    >
                        <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3 text-white">{t('vision')}</h3>
                        <p className="text-gray-300">{t('visionText')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-2xl text-center"
                    >
                        <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3 text-white">{t('mission')}</h3>
                        <p className="text-gray-300">{t('missionText')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-2xl text-center"
                    >
                        <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-3 text-white">{t('values')}</h3>
                        <p className="text-gray-300">{t('valuesText')}</p>
                    </motion.div>
                </div>

                {/* Milestones Timeline */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        {t('milestones')}
                    </h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="glass-panel p-6 rounded-xl inline-block">
                                            <h3 className="text-2xl font-bold text-primary mb-2">{t(milestone.year)}</h3>
                                            <p className="text-gray-300">{t(`${milestone.year}Desc`)}</p>
                                        </div>
                                    </div>
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-3xl border-4 border-primary z-10">
                                        {milestone.icon}
                                    </div>
                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        {t('certifications')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['cert1', 'cert2', 'cert3', 'cert4'].map((cert, index) => (
                            <motion.div
                                key={cert}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-xl text-center hover:scale-105 transition-transform"
                            >
                                <Award className="w-10 h-10 text-accent mx-auto mb-3" />
                                <p className="text-sm font-medium text-gray-300">{t(cert)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
