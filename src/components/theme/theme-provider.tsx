'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColor?: string
  storageKey?: string
  colorStorageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  color: string
  setColor: (color: string) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  color: '#3b82f6', // Default blue color
  setColor: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultColor = '#3b82f6',
  storageKey = 'ui-theme',
  colorStorageKey = 'ui-color',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [color, setColor] = useState<string>(defaultColor)

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | null
    const savedColor = localStorage.getItem(colorStorageKey)
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (defaultTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      setTheme(systemTheme)
    }

    if (savedColor) {
      setColor(savedColor)
    }
  }, [defaultTheme, defaultColor, storageKey, colorStorageKey])

  useEffect(() => {
    const root = window.document.documentElement
    
    root.classList.remove('light', 'dark')
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  // Apply the selected color to CSS variables
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Convert hex to RGB for CSS variables
    const hexToRgb = (hex: string) => {
      // Remove # if present
      hex = hex.replace(/^#/, '');
      
      // Parse hex values
      let r, g, b;
      if (hex.length === 3) {
        // Short notation (e.g. #ABC)
        r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
      } else {
        // Full notation (e.g. #AABBCC)
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      }
      
      return { r, g, b };
    };
    
    // Get current theme
    const isDark = root.classList.contains('dark');
    
    // Get RGB values from hex color
    const { r, g, b } = hexToRgb(color);
    
    // Set RGB variables directly
    root.style.setProperty('--primary-rgb', `${r} ${g} ${b}`);
    
    // Set primary color with proper opacity based on theme
    if (isDark) {
      // For dark theme - brighter primary
      root.style.setProperty('--primary', `rgb(${r} ${g} ${b} / 1)`);
      root.style.setProperty('--primary-foreground', `rgb(255 255 255 / 0.9)`);
    } else {
      // For light theme
      root.style.setProperty('--primary', `rgb(${r} ${g} ${b} / 0.9)`);
      root.style.setProperty('--primary-foreground', `rgb(255 255 255 / 1)`);
    }
    
    // Set ring color to match primary
    root.style.setProperty('--ring', `rgb(${r} ${g} ${b} / 0.7)`);
    
    // Set accent colors (lighter/darker versions of primary)
    if (isDark) {
      // Dark theme accents
      root.style.setProperty('--accent', `rgb(${r} ${g} ${b} / 0.2)`);
      root.style.setProperty('--accent-foreground', `rgb(${r} ${g} ${b} / 0.9)`);
      root.style.setProperty('--secondary', `rgb(${r} ${g} ${b} / 0.2)`);
      root.style.setProperty('--secondary-foreground', `rgb(${r} ${g} ${b} / 0.9)`);
    } else {
      // Light theme accents
      root.style.setProperty('--accent', `rgb(${r} ${g} ${b} / 0.1)`);
      root.style.setProperty('--accent-foreground', `rgb(${r} ${g} ${b} / 0.9)`);
      root.style.setProperty('--secondary', `rgb(${r} ${g} ${b} / 0.1)`);
      root.style.setProperty('--secondary-foreground', `rgb(${r} ${g} ${b} / 0.9)`);
    }
    
  }, [color, theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    color,
    setColor: (color: string) => {
      localStorage.setItem(colorStorageKey, color)
      setColor(color)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
} 