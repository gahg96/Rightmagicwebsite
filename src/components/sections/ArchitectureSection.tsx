'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Network, Shield, Zap } from 'lucide-react';

const architectureIcons = {
  presentation: Layers,
  application: Server,
  data: Database,
  integration: Network,
  security: Shield,
  platform: Zap,
};

export default function ArchitectureSection() {
  const t = useTranslations('Architecture');

  const layers = [
    {
      id: 'presentation',
      name: t('layers.presentation.name'),
      description: t('layers.presentation.description'),
      components: ['component1', 'component2', 'component3', 'component4'],
    },
    {
      id: 'application',
      name: t('layers.application.name'),
      description: t('layers.application.description'),
      components: ['component1', 'component2', 'component3', 'component4', 'component5', 'component6'],
    },
    {
      id: 'data',
      name: t('layers.data.name'),
      description: t('layers.data.description'),
      components: ['component1', 'component2', 'component3'],
    },
    {
      id: 'integration',
      name: t('layers.integration.name'),
      description: t('layers.integration.description'),
      components: ['component1', 'component2', 'component3', 'component4'],
    },
    {
      id: 'security',
      name: t('layers.security.name'),
      description: t('layers.security.description'),
      components: ['component1', 'component2', 'component3'],
    },
    {
      id: 'platform',
      name: t('layers.platform.name'),
      description: t('layers.platform.description'),
      components: ['component1', 'component2', 'component3', 'component4'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 架构图可视化 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-12 rounded-3xl mb-12"
          >
            <div className="space-y-6">
              {layers.map((layer, index) => {
                const Icon = architectureIcons[layer.id as keyof typeof architectureIcons];
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {layer.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
                      {layer.components.map((component, compIndex) => (
                        <div
                          key={compIndex}
                          className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors text-center"
                        >
                          {t(`layers.${layer.id}.components.${component}`)}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 架构特点 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {['feature1', 'feature2', 'feature3'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-xl text-center"
              >
                <h4 className="text-lg font-bold text-primary mb-3">
                  {t(`features.${feature}.title`)}
                </h4>
                <p className="text-sm text-gray-400">
                  {t(`features.${feature}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

