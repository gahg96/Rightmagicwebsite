'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users } from 'lucide-react';

export default function ClientsSection() {
    const t = useTranslations('Clients');

    const clients = [
        {
            key: 'bank1',
            icon: Building2,
            gradient: 'from-blue-500/20 to-blue-600/5',
            borderColor: 'border-blue-500/30'
        },
        {
            key: 'securities',
            icon: TrendingUp,
            gradient: 'from-purple-500/20 to-purple-600/5',
            borderColor: 'border-purple-500/30'
        },
        {
            key: 'commercial',
            icon: Users,
            gradient: 'from-green-500/20 to-green-600/5',
            borderColor: 'border-green-500/30'
        },
    ];

    return (
        <section className="py-24 bg-black/20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-400">{t('subtitle')}</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {clients.map((client, index) => {
                        const Icon = client.icon;
                        return (
                            <motion.div
                                key={client.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-2xl bg-gradient-to-br ${client.gradient} border ${client.borderColor} hover:scale-105 transition-all`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{t(client.key)}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {t(`${client.key}Desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 glass-panel p-8 rounded-2xl"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">90+</div>
                            <div className="text-sm text-gray-400">服务分支机构</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-accent mb-2">40万+</div>
                            <div className="text-sm text-gray-400">迁移用户数</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-secondary mb-2">数百项</div>
                            <div className="text-sm text-gray-400">业务流程迁移</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">6年+</div>
                            <div className="text-sm text-gray-400">行业深耕</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
