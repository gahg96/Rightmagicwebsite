'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Building2, Users, GraduationCap, Globe } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  nameZh: string;
  type: 'domestic' | 'overseas';
  coordinates: { lat: number; lng: number };
  description: string;
  descriptionZh: string;
  address?: string;
  addressZh?: string;
  icon: any;
}

export default function GlobalStrategySection() {
    const t = useTranslations('Global');

    const locations: Location[] = [
        {
            id: 'shanghai',
            name: 'Shanghai',
            nameZh: '上海',
            type: 'domestic',
            coordinates: { lat: 31.2304, lng: 121.4737 },
            description: 'Headquarters and R&D Center',
            descriptionZh: '总部及研发中心',
            address: 'Shanghai, China',
            addressZh: '中国上海市',
            icon: Building2,
        },
        {
            id: 'guangdong',
            name: 'Guangdong',
            nameZh: '广东',
            type: 'domestic',
            coordinates: { lat: 23.1291, lng: 113.2644 },
            description: 'South China Operations',
            descriptionZh: '华南运营中心',
            address: 'Guangzhou, Guangdong, China',
            addressZh: '中国广东省广州市',
            icon: Users,
        },
        {
            id: 'fujian',
            name: 'Fujian',
            nameZh: '福建',
            type: 'domestic',
            coordinates: { lat: 26.0745, lng: 119.2965 },
            description: 'East China Branch',
            descriptionZh: '华东分支机构',
            address: 'Fuzhou, Fujian, China',
            addressZh: '中国福建省福州市',
            icon: Building2,
        },
        {
            id: 'loughborough',
            name: 'Loughborough',
            nameZh: '拉夫堡',
            type: 'overseas',
            coordinates: { lat: 52.7657, lng: -1.2263 },
            description: 'UK AI Joint Lab',
            descriptionZh: '英国AI联合实验室',
            address: 'Loughborough University, Leicestershire, UK',
            addressZh: '英国莱斯特郡拉夫堡大学',
            icon: GraduationCap,
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/50">
            <div className="container mx-auto px-6">
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
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* 地图区域 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl relative overflow-hidden"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-black/20 border border-white/10">
                            {/* 使用 OpenStreetMap 交互式地图 */}
                            <iframe
                                src={`https://www.openstreetmap.org/export/embed.html?bbox=-2,25,125,55&layer=mapnik&marker=${locations.map(loc => `${loc.coordinates.lat},${loc.coordinates.lng}`).join('&marker=')}`}
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Global Locations Map"
                            />
                            {/* 地图标记覆盖层 - 可点击 */}
                            <div className="absolute inset-0 pointer-events-none">
                                {locations.map((location, idx) => {
                                    // 计算标记位置（简化版，实际应该根据地图缩放计算）
                                    const positions = [
                                        { top: '45%', left: '75%' }, // 上海
                                        { top: '70%', left: '60%' }, // 广东
                                        { top: '60%', left: '80%' }, // 福建
                                        { top: '15%', left: '20%' }, // 拉夫堡
                                    ];
                                    const pos = positions[idx] || { top: '50%', left: '50%' };
                                    return (
                                        <div
                                            key={location.id}
                                            className="absolute pointer-events-auto cursor-pointer group"
                                            style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                                            onClick={() => {
                                                // 滚动到对应的位置卡片
                                                const element = document.getElementById(`location-${location.id}`);
                                                element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }}
                                        >
                                            <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all group-hover:scale-125 ${
                                                location.type === 'domestic' ? 'bg-primary' : 'bg-accent'
                                            }`} />
                                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                {location.nameZh}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        {/* 地图标记说明 */}
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-3 h-3 bg-primary rounded-full" />
                                <span>{t('domestic')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-3 h-3 bg-accent rounded-full" />
                                <span>{t('overseas')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 地区列表 */}
                    <div className="space-y-6">
                        {/* 国内地区 */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-primary" />
                                {t('domesticRegions')}
                            </h3>
                            <div className="space-y-4">
                                {locations
                                    .filter(loc => loc.type === 'domestic')
                                    .map((location, index) => {
                                        const Icon = location.icon;
                                        return (
                                            <motion.div
                                                id={`location-${location.id}`}
                                                key={location.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                                                onClick={() => {
                                                    // 打开地图链接
                                                    const url = `https://www.openstreetmap.org/?mlat=${location.coordinates.lat}&mlon=${location.coordinates.lng}&zoom=12`;
                                                    window.open(url, '_blank');
                                                }}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-white mb-2">
                                                            {location.nameZh} / {location.name}
                                                        </h4>
                                                        <p className="text-gray-400 mb-2">
                                                            {location.descriptionZh}
                                                        </p>
                                                        <p className="text-sm text-gray-500 mb-1">
                                                            {location.description}
                                                        </p>
                                                        {location.addressZh && (
                                                            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                                                <MapPin className="w-3 h-3" />
                                                                {location.addressZh}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <MapPin className="w-5 h-5 text-primary/50 flex-shrink-0" />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* 海外地区 */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-accent" />
                                {t('overseasRegions')}
                            </h3>
                            <div className="space-y-4">
                                {locations
                                    .filter(loc => loc.type === 'overseas')
                                    .map((location, index) => {
                                        const Icon = location.icon;
                                        return (
                                            <motion.div
                                                id={`location-${location.id}`}
                                                key={location.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group border-2 border-accent/20 cursor-pointer"
                                                onClick={() => {
                                                    // 打开地图链接
                                                    const url = `https://www.openstreetmap.org/?mlat=${location.coordinates.lat}&mlon=${location.coordinates.lng}&zoom=12`;
                                                    window.open(url, '_blank');
                                                }}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-white mb-2">
                                                            {location.nameZh} / {location.name}
                                                        </h4>
                                                        <p className="text-gray-400 mb-2">
                                                            {location.descriptionZh}
                                                        </p>
                                                        <p className="text-sm text-gray-500 mb-1">
                                                            {location.description}
                                                        </p>
                                                        {location.addressZh && (
                                                            <p className="text-xs text-gray-500 mt-2 mb-2 flex items-center gap-1">
                                                                <MapPin className="w-3 h-3" />
                                                                {location.addressZh}
                                                            </p>
                                                        )}
                                                        {location.id === 'loughborough' && (
                                                            <p className="text-sm text-primary mt-2">
                                                                {t('loughboroughDesc')}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <MapPin className="w-5 h-5 text-accent/50 flex-shrink-0" />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部说明 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="glass-panel p-8 rounded-2xl inline-block">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {t('footerText')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
