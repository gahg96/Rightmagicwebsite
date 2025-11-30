'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Award, Briefcase, Shield } from 'lucide-react';
import { useState } from 'react';

interface Client {
  id: string;
  name: string;
  nameEn?: string;
  category: 'bank' | 'securities' | 'futures' | 'fund' | 'insurance' | 'other';
  icon?: any;
}

export default function ClientWallSection() {
  const t = useTranslations('ClientWall');

  const clients: Client[] = [
    // 银行
    { id: 'icbc', name: '中国工商银行', nameEn: 'ICBC', category: 'bank' },
    { id: 'bocom', name: '交通银行', nameEn: 'Bank of Communications', category: 'bank' },
    { id: 'cib', name: '兴业银行', nameEn: 'Industrial Bank', category: 'bank' },
    { id: 'spdb', name: '浦发银行', nameEn: 'SPD Bank', category: 'bank' },
    { id: 'bob', name: '宁波银行', nameEn: 'Bank of Ningbo', category: 'bank' },
    { id: 'fjrc', name: '福建农信', nameEn: 'FJRC', category: 'bank' },
    { id: 'shrcb', name: '上海农商银行', nameEn: 'SHRCB', category: 'bank' },
    { id: 'haixia', name: '福建海峡银行', nameEn: 'Haixia Bank', category: 'bank' },
    
    // 交易所/清算所
    { id: 'cfets', name: '中国外汇交易中心', nameEn: 'CFETS', category: 'other' },
    { id: 'shcpe', name: '上海票据交易所', nameEn: 'Shanghai Commercial Paper Exchange', category: 'other' },
    { id: 'shch', name: '上海清算所', nameEn: 'Shanghai Clearing House', category: 'other' },
    { id: 'sse', name: '上海证券交易所', nameEn: 'Shanghai Stock Exchange', category: 'securities' },
    { id: 'shfe', name: '上海期货交易所', nameEn: 'Shanghai Futures Exchange', category: 'futures' },
    
    // 证券
    { id: 'gtja', name: '国泰君安证券', nameEn: 'Guotai Junan Securities', category: 'securities' },
    { id: 'ebsc', name: '光大证券', nameEn: 'Everbright Securities', category: 'securities' },
    { id: 'xyzq', name: '兴业证券', nameEn: 'Industrial Securities', category: 'securities' },
    { id: 'hfsc', name: '华福证券', nameEn: 'Huafu Securities', category: 'securities' },
    
    // 期货
    { id: 'ccbf', name: '建信期货', nameEn: 'CCB Futures', category: 'futures' },
    { id: 'orient', name: '东证期货', nameEn: 'Orient Futures', category: 'futures' },
    
    // 基金
    { id: 'htf', name: '汇添富基金', nameEn: 'HTF Fund', category: 'fund' },
    { id: 'topsperity', name: '德邦基金', nameEn: 'Topsperity Fund', category: 'fund' },
    
    // 保险
    { id: 'taiping', name: '中国太平', nameEn: 'China Taiping', category: 'insurance' },
    { id: 'citic', name: '中信保诚', nameEn: 'CITIC Prudential', category: 'insurance' },
    
    // 其他
    { id: 'suae', name: '上海联合产权交易所', nameEn: 'Shanghai United Assets Exchange', category: 'other' },
    { id: 'cmcc', name: '中国移动', nameEn: 'China Mobile', category: 'other' },
    { id: 'sig', name: '上海国际集团', nameEn: 'Shanghai International Group', category: 'other' },
    { id: 'sicc', name: '上咨集团', nameEn: 'SICC', category: 'other' },
    { id: 'dhl', name: '东浩兰生', nameEn: 'Donghao Lansheng', category: 'other' },
    { id: 'se', name: '上海电气', nameEn: 'Shanghai Electric', category: 'other' },
    { id: 'sgh', name: '上海市第一人民医院', nameEn: 'Shanghai General Hospital', category: 'other' },
    { id: 'sitt', name: '上海智能交通', nameEn: 'Shanghai Intelligent Transportation', category: 'other' },
    { id: 'saic', name: '上汽集团', nameEn: 'SAIC Motor', category: 'other' },
    { id: 'opg', name: '东方明珠', nameEn: 'Oriental Pearl', category: 'other' },
    { id: 'ocn', name: '东方有线', nameEn: 'Oriental Cable Network', category: 'other' },
    { id: 'xmu', name: '厦门大学', nameEn: 'Xiamen University', category: 'other' },
    { id: 'sichuan', name: '四川省经济和信息化厅', nameEn: 'Sichuan Economic and Information Department', category: 'other' },
    { id: 'guizhou', name: '贵州消防网', nameEn: 'Guizhou Fire Protection', category: 'other' },
    { id: 'rundian', name: '润电能源', nameEn: 'Rundian Energy', category: 'other' },
    { id: 'shenergy', name: '申能', nameEn: 'Shenergy', category: 'other' },
    { id: 'sha', name: '上海机场', nameEn: 'Shanghai Airport', category: 'other' },
    { id: 'fujian', name: '福建省高速公路信息科技', nameEn: 'Fujian Expressway IT', category: 'other' },
    { id: 'meec', name: '上海机械设备成套', nameEn: 'Shanghai M&E Equipment', category: 'other' },
    { id: 'faf', name: 'FAF瑞福德', nameEn: 'FAF Ruifude', category: 'other' },
  ];

  const categoryIcons = {
    bank: Building2,
    securities: TrendingUp,
    futures: Briefcase,
    fund: Award,
    insurance: Shield,
    other: Building2,
  };

  const categoryColors = {
    bank: 'from-blue-500/20 to-blue-600/5 border-blue-500/30',
    securities: 'from-green-500/20 to-green-600/5 border-green-500/30',
    futures: 'from-purple-500/20 to-purple-600/5 border-purple-500/30',
    fund: 'from-yellow-500/20 to-yellow-600/5 border-yellow-500/30',
    insurance: 'from-red-500/20 to-red-600/5 border-red-500/30',
    other: 'from-gray-500/20 to-gray-600/5 border-gray-500/30',
  };

  const categories = [
    { key: 'bank', label: t('categories.bank') },
    { key: 'securities', label: t('categories.securities') },
    { key: 'futures', label: t('categories.futures') },
    { key: 'fund', label: t('categories.fund') },
    { key: 'insurance', label: t('categories.insurance') },
    { key: 'other', label: t('categories.other') },
  ];

  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');

  const filteredClients = activeCategory === 'all'
    ? clients
    : clients.filter(client => client.category === activeCategory);

  return (
    <section className="py-24 bg-black/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {t('all')}
          </button>
          {categories.map((category) => {
            const Icon = categoryIcons[category.key as keyof typeof categoryIcons];
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.key
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredClients.map((client, index) => {
            const Icon = categoryIcons[client.category];
            const colorClass = categoryColors[client.category];
            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className={`glass-panel p-4 md:p-6 rounded-xl hover:scale-105 transition-all cursor-pointer bg-gradient-to-br ${colorClass} border`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/70" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1 leading-tight">
                    {client.name}
                  </h3>
                  {client.nameEn && (
                    <p className="text-xs text-gray-400 leading-tight">
                      {client.nameEn}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: t('stats.total'), value: clients.length },
            { label: t('stats.banks'), value: clients.filter(c => c.category === 'bank').length },
            { label: t('stats.securities'), value: clients.filter(c => c.category === 'securities').length },
            { label: t('stats.others'), value: clients.filter(c => c.category !== 'bank' && c.category !== 'securities').length },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}+
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

