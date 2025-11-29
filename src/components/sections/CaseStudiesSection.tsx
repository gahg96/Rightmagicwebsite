'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Users, FileText, Shield, Database, Bot } from 'lucide-react';

const caseIcons = {
  bank: Building2,
  securities: Users,
  commercial: FileText,
  zerocraft1: Database,
  zerocraft2: Shield,
  ai: Bot,
};

export default function CaseStudiesSection() {
  const t = useTranslations('Cases');

  const cases = [
    {
      id: 'bank-email',
      icon: 'bank',
      category: 'email',
      title: t('bankEmail.title'),
      client: t('bankEmail.client'),
      challenge: t('bankEmail.challenge'),
      solution: t('bankEmail.solution'),
      results: t('bankEmail.results'),
      highlights: ['highlight1', 'highlight2', 'highlight3', 'highlight4'],
    },
    {
      id: 'securities-oa',
      icon: 'securities',
      category: 'oa',
      title: t('securitiesOA.title'),
      client: t('securitiesOA.client'),
      challenge: t('securitiesOA.challenge'),
      solution: t('securitiesOA.solution'),
      results: t('securitiesOA.results'),
      highlights: ['highlight1', 'highlight2', 'highlight3'],
    },
    {
      id: 'commercial-wps',
      icon: 'commercial',
      category: 'wps',
      title: t('commercialWPS.title'),
      client: t('commercialWPS.client'),
      challenge: t('commercialWPS.challenge'),
      solution: t('commercialWPS.solution'),
      results: t('commercialWPS.results'),
      highlights: ['highlight1', 'highlight2', 'highlight3', 'highlight4', 'highlight5'],
    },
    {
      id: 'zerocraft-requirement',
      icon: 'zerocraft1',
      category: 'zerocraft',
      title: t('zerocraftRequirement.title'),
      client: t('zerocraftRequirement.client'),
      challenge: t('zerocraftRequirement.challenge'),
      solution: t('zerocraftRequirement.solution'),
      results: t('zerocraftRequirement.results'),
      highlights: ['highlight1', 'highlight2', 'highlight3', 'highlight4'],
    },
    {
      id: 'zerocraft-defect',
      icon: 'zerocraft2',
      category: 'zerocraft',
      title: t('zerocraftDefect.title'),
      client: t('zerocraftDefect.client'),
      challenge: t('zerocraftDefect.challenge'),
      solution: t('zerocraftDefect.solution'),
      results: t('zerocraftDefect.results'),
      highlights: ['highlight1', 'highlight2', 'highlight3', 'highlight4', 'highlight5', 'highlight6'],
    },
    {
      id: 'ai-evaluation',
      icon: 'ai',
      category: 'ai',
      title: t('aiEvaluation.title'),
      client: t('aiEvaluation.client'),
      challenge: t('aiEvaluation.challenge'),
      solution: t('aiEvaluation.solution'),
      results: t('aiEvaluation.results'),
      highlights: ['highlight1', 'highlight2', 'highlight3'],
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseIcons[caseItem.icon as keyof typeof caseIcons];
            return (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-primary mb-2 font-medium">
                      {t(`categories.${caseItem.category}`)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {caseItem.client}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      {t('challenge')}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {caseItem.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      {t('solution')}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {caseItem.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">
                      {t('results')}
                    </h4>
                    <p className="text-sm text-white leading-relaxed">
                      {caseItem.results}
                    </p>
                  </div>

                  {caseItem.highlights.length > 0 && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {caseItem.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {t(`highlights.${highlight}`)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

