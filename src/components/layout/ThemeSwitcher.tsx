'use client';

import { useTheme, themes, ThemeName } from '@/contexts/ThemeContext';
import { Palette, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeSwitcher() {
    const { currentTheme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const darkThemes = Object.entries(themes).filter(([_, t]) => t.isDark);
    const lightThemes = Object.entries(themes).filter(([_, t]) => !t.isDark);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                aria-label="Change theme"
            >
                <Palette className="w-4 h-4 text-primary" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Theme Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 top-full mt-2 w-72 glass-panel rounded-xl p-4 z-50 border border-white/10 max-h-[80vh] overflow-y-auto"
                        >
                            <div className="text-sm font-medium text-gray-300 mb-3">选择主题 / Choose Theme</div>

                            {/* Dark Themes */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    <Moon className="w-3 h-3" />
                                    <span>深色主题 Dark</span>
                                </div>
                                <div className="space-y-2">
                                    {darkThemes.map(([key, theme]) => (
                                        <button
                                            key={key}
                                            onClick={() => {
                                                setTheme(key as ThemeName);
                                                setIsOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${currentTheme === key
                                                    ? 'bg-white/10 border border-white/20'
                                                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                                                }`}
                                        >
                                            {/* Color Preview */}
                                            <div className="flex gap-1">
                                                <div
                                                    className="w-4 h-4 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.colors.primary }}
                                                />
                                                <div
                                                    className="w-4 h-4 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.colors.secondary }}
                                                />
                                                <div
                                                    className="w-4 h-4 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.colors.accent }}
                                                />
                                            </div>

                                            <span className="text-sm text-gray-200 flex-1 text-left">
                                                {theme.displayName}
                                            </span>

                                            {currentTheme === key && (
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Light Themes */}
                            <div>
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    <Sun className="w-3 h-3" />
                                    <span>浅色主题 Light</span>
                                </div>
                                <div className="space-y-2">
                                    {lightThemes.map(([key, theme]) => (
                                        <button
                                            key={key}
                                            onClick={() => {
                                                setTheme(key as ThemeName);
                                                setIsOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${currentTheme === key
                                                    ? 'bg-white/10 border border-white/20'
                                                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                                                }`}
                                        >
                                            {/* Color Preview */}
                                            <div className="flex gap-1">
                                                <div
                                                    className="w-4 h-4 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.colors.primary }}
                                                />
                                                <div
                                                    className="w-4 h-4 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.colors.secondary }}
                                                />
                                                <div
                                                    className="w-4 h-4 rounded-full border border-white/20"
                                                    style={{ backgroundColor: theme.colors.accent }}
                                                />
                                            </div>

                                            <span className="text-sm text-gray-200 flex-1 text-left">
                                                {theme.displayName}
                                            </span>

                                            {currentTheme === key && (
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
