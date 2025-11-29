'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, Blocks, Code, Settings, CheckCircle2 } from 'lucide-react';

export default function GDFSection() {
    const t = useTranslations('GDF');

    const capabilities = [
        { key: 'capability1', icon: Lightbulb, position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
        { key: 'capability2', icon: Blocks, position: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2' },
        { key: 'capability3', icon: Code, position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
        { key: 'capability4', icon: Settings, position: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2' },
    ];

    const values = ['value1', 'value2', 'value3', 'value4'];

    return (
        <section className="py-24 bg-background relative">
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
                    <p className="text-xl text-primary mb-2">{t('subtitle')}</p>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('description')}</p>
                </motion.div>

                {/* Circular Framework Visualization */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative aspect-square max-w-md mx-auto">
                        {/* Center Circle */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary flex items-center justify-center"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white mb-1">RightMagic</div>
                                <div className="text-sm text-primary">GDF</div>
                            </div>
                        </motion.div>

                        {/* Capability Nodes */}
                        {capabilities.map((cap, index) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div
                                    key={cap.key}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`absolute ${cap.position} w-32 h-32`}
                                >
                                    <div className="glass-panel p-4 rounded-xl border border-primary/20 text-center h-full flex flex-col items-center justify-center">
                                        <Icon className="w-8 h-8 text-primary mb-2" />
                                        <div className="text-xs font-bold text-white">{t(cap.key)}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {capabilities.map((cap, index) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={`desc-${cap.key}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white/5 rounded-xl border border-white/10"
                            >
                                <Icon className="w-8 h-8 text-primary mb-3" />
                                <h3 className="text-lg font-bold text-white mb-2">{t(cap.key)}</h3>
                                <p className="text-sm text-gray-400">{t(`${cap.key}Desc`)}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Implementation Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold text-center text-white mb-8">实施价值 / Implementation Value</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <span className="text-gray-300">{t(value)}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
