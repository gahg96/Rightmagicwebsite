'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { getBrandName } from '@/config/company';

export default function Navbar() {
    const t = useTranslations('Navigation');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const brandName = getBrandName('en'); // 品牌名称使用英文

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // 防止移动菜单打开时背景滚动
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { key: 'home', href: '/' },
        { key: 'zerocraft', href: '/zerocraft' },
        { key: 'gamium', href: '/gamium' },
        { key: 'partners', href: '/partners' },
        { key: 'cases', href: '/cases' },
        { key: 'about', href: '/about' },
    ];

    return (
        <motion.header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link 
                    href="/" 
                    className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {brandName.includes('RightMagic') ? (
                        <>
                            Right<span className="text-primary">Magic</span>
                        </>
                    ) : brandName.includes('RightNova') ? (
                        <>
                            Right<span className="text-primary">Nova</span> <span className="text-primary">Labs</span>
                        </>
                    ) : (
                        brandName.split(' ').map((word, idx) => (
                            <span key={idx}>
                                {idx === 0 ? word : <span className="text-primary">{word}</span>}
                                {idx < brandName.split(' ').length - 1 && ' '}
                            </span>
                        ))
                    )}
                </Link>

                {/* 桌面端导航 */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative group"
                        >
                            {t(link.key)}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* 桌面端控制按钮 */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>

                {/* 移动端菜单按钮 */}
                <button
                    className="md:hidden p-2 text-white hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* 移动端菜单 */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* 背景遮罩 */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        {/* 菜单内容 */}
                        <motion.nav
                            className="fixed top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 z-40 md:hidden"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="container mx-auto px-6 py-6">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.key}
                                            href={link.href}
                                            className="text-base font-medium text-gray-300 hover:text-primary transition-colors py-2 border-b border-white/5 last:border-0"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t(link.key)}
                                        </Link>
                                    ))}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                                        <ThemeSwitcher />
                                        <LanguageSwitcher />
                                    </div>
                                </div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
