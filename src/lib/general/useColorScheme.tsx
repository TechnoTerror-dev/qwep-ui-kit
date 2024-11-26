import { TypeColorScheme, colorsLight } from './colors';
import { useThemeContext } from './ThemeContext';

export const useColorScheme = ($colors?: TypeColorScheme) => {
    const { _isActive, currentColorScheme } = useThemeContext();
    if ($colors) {
        return $colors;
    }
    if (_isActive) {
        return currentColorScheme as TypeColorScheme;
    } else {
        return colorsLight as TypeColorScheme;
    }
};
