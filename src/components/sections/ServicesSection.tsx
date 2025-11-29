'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Server, Package, Cpu } from 'lucide-react';

export default function ServicesSection() {
    const t = useTranslations('Services');

    const services = [
        {
            icon: Server,
            key: '信创软件服务',
            color: 'from-primary/20 to-primary/5',
            borderColor: 'border-primary/20'
        },
        {
            icon: Package,
            key: '信创产品代理',
            color: 'from-secondary/20 to-secondary/5',
            borderColor: 'border-secondary/20'
        },
        {
            icon: Cpu,
            key: '自研产品',
            color: 'from-accent/20 to-accent/5',
            borderColor: 'border-accent/20'
        }
    ];

    return (
        <section className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`glass-panel p-8 rounded-2xl hover:scale-105 transition-transform border ${service.borderColor}`}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {t(service.key)}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {t(`${service.key}Desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
