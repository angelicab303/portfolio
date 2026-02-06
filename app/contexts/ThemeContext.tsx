'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Prevent browser from automatically restoring scroll position
  // when the user reopens the tab or navigates history. Some browsers
  // will restore the previous scroll, causing the site to jump to the
  // last section the user was on. Setting scrollRestoration to 'manual'
  // avoids that behavior. We restore the previous value on unmount.
  useEffect(() => {
    let previous: ScrollRestoration | undefined;
    try {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  // save previous value
  previous = window.history.scrollRestoration as unknown as ScrollRestoration;
        try {
          window.history.scrollRestoration = 'manual';
        } catch (e) {
          // ignore: some browsers may throw if not supported
        }
      }
    } catch (e) {
      // ignore any errors
    }

    return () => {
      try {
        if (previous !== undefined) {
          window.history.scrollRestoration = previous as unknown as any;
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // Preserve scroll position on explicit page reloads, but not when the
  // user closes and later reopens the tab. We save scroll position into
  // sessionStorage on pagehide/beforeunload and only restore it when the
  // navigation type is 'reload'. For other navigation types (including
  // tab restore), we force-scroll-to-top to avoid jumping back to a previous
  // section.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saveScroll = () => {
      try {
        sessionStorage.setItem('savedScrollY', String(window.scrollY || 0));
      } catch (e) {
        // ignore
      }
    };

    // Attach save handlers
    window.addEventListener('pagehide', saveScroll);
    window.addEventListener('beforeunload', saveScroll);

    // Detect navigation type
    let navType: string | undefined;
    try {
      const entries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      navType = entries && entries[0] && (entries[0] as any).type;
    } catch (e) {
      // ignore
    }

    // Fallback for older API
    if (!navType && (performance as any).navigation) {
      // 1 === TYPE_RELOAD in older spec
      const nav = (performance as any).navigation;
      navType = nav.type === 1 ? 'reload' : 'navigate';
    }

    try {
      if (navType === 'reload') {
        // If this load is a reload, restore last saved scroll position.
        const y = Number(sessionStorage.getItem('savedScrollY') || 0);
        window.scrollTo({ top: y, left: 0 });
      } else {
        // Otherwise force to top to prevent tab/session restore bringing
        // the user back to a previous section.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            try {
              window.scrollTo({ top: 0, left: 0 });
            } catch (e) {
              // ignore
            }
          });
        });
      }
    } catch (e) {
      // ignore
    }

    return () => {
      window.removeEventListener('pagehide', saveScroll);
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, []);

  // ALWAYS wrap in provider, just don't render theme-dependent content until mounted
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};