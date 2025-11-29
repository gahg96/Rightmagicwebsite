'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, GraduationCap } from 'lucide-react';

export default function GlobalStrategySection() {
    const t = useTranslations('Global');

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-12 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[64px] -translate-y-1/2 translate-x-1/2" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                {t('title')}
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                {t('description')}
                            </p>

                            <div className="flex gap-6">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <span>UK Expansion</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <span>AI Joint Labs</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[300px] rounded-2xl overflow-hidden bg-black/20 border border-white/5 flex items-center justify-center">
                            {/* Placeholder for a map or abstract visualization */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
