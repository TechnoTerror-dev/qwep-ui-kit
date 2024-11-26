import { TypeColorScheme, colorsLight } from './colors';
import { useThemeContext } from './ThemeContext';

export const useColorScheme = () => {
    const { _isActive, currentColorScheme } = useThemeContext();
    if (_isActive) {
        return currentColorScheme as TypeColorScheme;
    } else {
        return colorsLight as TypeColorScheme;
    }
};
