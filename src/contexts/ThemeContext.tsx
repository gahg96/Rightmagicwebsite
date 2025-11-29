'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeName = 'tech-blue' | 'business-purple' | 'vibrant-green' | 'sunset-orange' | 'light-blue' | 'light-purple' | 'light-green' | 'light-coral';

interface Theme {
    name: ThemeName;
    displayName: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    background: string;
    foreground: string;
    isDark: boolean;
}

export const themes: Record<ThemeName, Theme> = {
    'tech-blue': {
        name: 'tech-blue',
        displayName: '科技蓝 Tech Blue',
        colors: {
            primary: '#2f81f7',
            secondary: '#a371f7',
            accent: '#3fb950',
        },
        background: '#050b14',
        foreground: '#e6edf3',
        isDark: true,
    },
    'business-purple': {
        name: 'business-purple',
        displayName: '商务紫 Business Purple',
        colors: {
            primary: '#8b5cf6',
            secondary: '#ec4899',
            accent: '#f59e0b',
        },
        background: '#0a0514',
        foreground: '#e6edf3',
        isDark: true,
    },
    'vibrant-green': {
        name: 'vibrant-green',
        displayName: '活力绿 Vibrant Green',
        colors: {
            primary: '#10b981',
            secondary: '#06b6d4',
            accent: '#f59e0b',
        },
        background: '#051410',
        foreground: '#e6edf3',
        isDark: true,
    },
    'sunset-orange': {
        name: 'sunset-orange',
        displayName: '日落橙 Sunset Orange',
        colors: {
            primary: '#f97316',
            secondary: '#ec4899',
            accent: '#8b5cf6',
        },
        background: '#140a05',
        foreground: '#e6edf3',
        isDark: true,
    },
    'light-blue': {
        name: 'light-blue',
        displayName: '清新蓝 Fresh Blue',
        colors: {
            primary: '#0284c7',
            secondary: '#7c3aed',
            accent: '#059669',
        },
        background: '#f8fafc',
        foreground: '#0f172a',
        isDark: false,
    },
    'light-purple': {
        name: 'light-purple',
        displayName: '优雅紫 Elegant Purple',
        colors: {
            primary: '#7c3aed',
            secondary: '#db2777',
            accent: '#ea580c',
        },
        background: '#faf5ff',
        foreground: '#1e1b4b',
        isDark: false,
    },
    'light-green': {
        name: 'light-green',
        displayName: '自然绿 Nature Green',
        colors: {
            primary: '#059669',
            secondary: '#0891b2',
            accent: '#d97706',
        },
        background: '#f0fdf4',
        foreground: '#14532d',
        isDark: false,
    },
    'light-coral': {
        name: 'light-coral',
        displayName: '珊瑚粉 Coral Pink',
        colors: {
            primary: '#e11d48',
            secondary: '#c026d3',
            accent: '#0891b2',
        },
        background: '#fff1f2',
        foreground: '#4c0519',
        isDark: false,
    },
};

interface ThemeContextType {
    currentTheme: ThemeName;
    setTheme: (theme: ThemeName) => void;
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<ThemeName>('tech-blue');

    useEffect(() => {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem('theme') as ThemeName;
        if (savedTheme && themes[savedTheme]) {
            setCurrentTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Apply theme colors to CSS variables
        const theme = themes[currentTheme];
        document.documentElement.style.setProperty('--color-primary', theme.colors.primary);
        document.documentElement.style.setProperty('--color-secondary', theme.colors.secondary);
        document.documentElement.style.setProperty('--color-accent', theme.colors.accent);
        document.documentElement.style.setProperty('--background', theme.background);
        document.documentElement.style.setProperty('--foreground', theme.foreground);

        // Update body class for light/dark mode specific styles
        if (theme.isDark) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }

        // Save to localStorage
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const setTheme = (theme: ThemeName) => {
        setCurrentTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme, theme: themes[currentTheme] }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
