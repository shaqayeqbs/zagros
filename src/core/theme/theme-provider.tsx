'use client'
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes, Theme } from './index';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const defaultContextData: ThemeContextType = {
    theme: themes.dark, // Default theme
    setTheme: () => { }
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextData);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(themes.dark); // Set initial theme to dark

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === themes.dark ? themes.light : themes.dark;
            localStorage.setItem('themeMode', newTheme === themes.dark ? 'dark' : 'light'); // Save theme mode to local storage
            return newTheme;
        });
    };

    useEffect(() => {
        const themeMode = localStorage.getItem('themeMode'); // Safely access localStorage here
        if (themeMode) {
            setTheme(themeMode === 'light' ? themes.light : themes.dark);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
