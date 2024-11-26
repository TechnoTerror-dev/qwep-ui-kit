import { createContext, ReactNode, useState, useContext, useMemo } from 'react';
import { Hex, TypeColorScheme, colorsDark, colorsLight } from './colors';

export type TypeColorTheme = 'light' | 'dark' | `_custom_${string}`;

export type TypeCustomColorTheme = {
    type: TypeColorTheme;
    name: string;
    colors: TypeColorScheme;
};

export type TypeThemeContext = {
    currentColorThemeName: TypeColorTheme;
    currentColorScheme: TypeColorScheme;
    themes: TypeCustomColorTheme[];
    changeColorThemeHandler: (themeName: TypeColorTheme) => void;
    _isActive: boolean;
};

type ThemeProvider = {
    children: ReactNode;
    colorThemeName?: TypeColorTheme;
    customColorThemes?: TypeCustomColorTheme[];
    addColorsLight?: { [key: string]: Hex };
    addColorsDark?: { [key: string]: Hex };
};

const ThemeContext = createContext<TypeThemeContext>({
    currentColorThemeName: 'light',
    currentColorScheme: colorsLight,
    themes: [],
    changeColorThemeHandler: () => {},
    _isActive: false,
});

export const ThemeProvider = ({
    children,
    customColorThemes = [],
    colorThemeName = 'light',
    addColorsLight,
    addColorsDark,
}: ThemeProvider) => {
    const initialThemes: TypeCustomColorTheme[] = useMemo(
        () => [
            { type: 'light', name: 'Light Theme', colors: { ...colorsLight, ...addColorsLight } },
            { type: 'dark', name: 'Dark Theme', colors: { ...colorsDark, ...addColorsDark } },
            ...customColorThemes,
        ],
        [addColorsLight, addColorsDark, customColorThemes]
    );

    const [currentTheme, setCurrentTheme] = useState<TypeCustomColorTheme>(
        initialThemes.find((theme) => theme.type === colorThemeName) ?? initialThemes[0]
    );

    const changeColorThemeHandler = (themeName: TypeColorTheme) => {
        const theme = initialThemes.find((theme) => theme.type === themeName);
        if (theme) {
            setCurrentTheme(theme as TypeCustomColorTheme);
        }
    };

    const contextValue: TypeThemeContext = {
        //values
        currentColorThemeName: currentTheme.type,
        currentColorScheme: currentTheme.colors,
        themes: initialThemes,
        _isActive: true,
        //methods
        changeColorThemeHandler,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): TypeThemeContext => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
