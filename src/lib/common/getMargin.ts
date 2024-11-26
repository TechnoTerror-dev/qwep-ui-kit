import { TypeSSMR } from '../general/styleScheme';
import { TMargin } from '../types/TypeBase';

export const getMargin = (margins: TypeSSMR, marginKey?: TMargin): string => {
    if (!marginKey) return '';
    const marginSizeRegex = /(?:m[trblxy]?)-(\d+)/;
    const matches = marginKey.match(marginSizeRegex);

    if (!matches) return '';

    const [, marginSizeKey] = matches;
    const marginValue = margins[`margin_${marginSizeKey}` as keyof TypeSSMR];

    // Обрабатываем случаи с mx и my, возвращая стиль для обеих сторон
    if (marginKey.startsWith('mx-')) {
        return `margin-left: ${marginValue}; margin-right: ${marginValue};`;
    } else if (marginKey.startsWith('my-')) {
        return `margin-top: ${marginValue}; margin-bottom: ${marginValue};`;
    }

    // Возвращаем отдельные значения отступов для m, mt, mb, ml, mr
    switch (marginKey.charAt(1)) {
        case 't':
            return `margin-top: ${marginValue};`;
        case 'r':
            return `margin-right: ${marginValue};`;
        case 'b':
            return `margin-bottom: ${marginValue};`;
        case 'l':
            return `margin-left: ${marginValue};`;
        default:
            return `margin: ${marginValue};`;
    }
};
