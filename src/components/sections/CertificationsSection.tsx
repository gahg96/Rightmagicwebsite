'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Certificate {
  id: string;
  image: string;
  name: string;
  nameZh: string;
  category: 'enterprise' | 'partnership' | 'quality' | 'technology';
  icon: any;
}

export default function CertificationsSection() {
  const t = useTranslations('Certifications');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates: Certificate[] = [
    {
      id: 'cert1',
      image: '/assets/documents/微信图片_20251130104904_308_490.png',
      name: 'High-tech Enterprise',
      nameZh: '高新技术企业',
      category: 'enterprise',
      icon: Star,
    },
    {
      id: 'cert2',
      image: '/assets/documents/微信图片_20251130104908_309_490.png',
      name: 'Specialized & Innovative Enterprise',
      nameZh: '专精特新企业',
      category: 'enterprise',
      icon: Star,
    },
    {
      id: 'cert3',
      image: '/assets/documents/微信图片_20251130105100_310_490.jpg',
      name: 'ISO20000/27001',
      nameZh: 'ISO20000/27001认证',
      category: 'quality',
      icon: Shield,
    },
    {
      id: 'cert4',
      image: '/assets/documents/微信图片_20251130105620_311_490.png',
      name: 'CMMI3 Certification',
      nameZh: 'CMMI3认证',
      category: 'technology',
      icon: CheckCircle2,
    },
    {
      id: 'cert5',
      image: '/assets/documents/微信图片_20251130105627_312_490.png',
      name: 'Strategic Partner',
      nameZh: '战略合作伙伴',
      category: 'partnership',
      icon: Award,
    },
    {
      id: 'cert6',
      image: '/assets/documents/微信图片_20251130105633_313_490.png',
      name: 'Gold Service Provider',
      nameZh: '金牌服务商',
      category: 'partnership',
      icon: Award,
    },
    {
      id: 'cert7',
      image: '/assets/documents/微信图片_2025-11-30_104129_255.jpg',
      name: 'Technical Certification',
      nameZh: '技术认证',
      category: 'technology',
      icon: CheckCircle2,
    },
  ];

  const categories = [
    { key: 'enterprise', label: t('categories.enterprise'), icon: Star },
    { key: 'partnership', label: t('categories.partnership'), icon: Award },
    { key: 'quality', label: t('categories.quality'), icon: Shield },
    { key: 'technology', label: t('categories.technology'), icon: CheckCircle2 },
  ];

  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('title')}
          </h1>
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
            const Icon = category.icon;
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden bg-black/20 border border-white/10">
                  <Image
                    src={cert.image}
                    alt={cert.nameZh}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cert.nameZh}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {cert.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl z-10"
              >
                ×
              </button>
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={selectedImage}
                  alt="Certificate"
                  fill
                  className="object-contain p-8"
                  sizes="90vw"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t('carouselTitle')}
          </h2>
          <Carousel certificates={certificates} onImageClick={setSelectedImage} />
        </motion.div>
      </div>
    </section>
  );
}

// 走马灯组件
function Carousel({ 
  certificates, 
  onImageClick 
}: { 
  certificates: Certificate[]; 
  onImageClick: (image: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 自动播放
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 3000); // 每3秒切换一次
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, certificates.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* 走马灯容器 */}
      <div className="relative h-80 overflow-hidden rounded-2xl bg-black/20 border border-white/10">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="min-w-full h-full flex items-center justify-center p-8 cursor-pointer"
              onClick={() => onImageClick(cert.image)}
            >
              <div className="relative w-full h-full max-w-2xl">
                <Image
                  src={cert.image}
                  alt={cert.nameZh}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {/* 左右切换按钮 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 指示器 */}
      <div className="flex justify-center gap-2 mt-6">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 证书信息 */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-2">
          {certificates[currentIndex].nameZh}
        </h3>
        <p className="text-gray-400">
          {certificates[currentIndex].name}
        </p>
      </motion.div>
    </div>
  );
}

