import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { TypeSS, styleScheme } from './styleScheme';

export type TypeStyledContext = {
    currentStyles: TypeSS;
};

type TypeStyledProvider = {
    children: ReactNode;
    currentStyles?: TypeSS | object;
    addCustomStyles?: Partial<TypeSS>;
};

const StyledContext = createContext<TypeStyledContext>({
    currentStyles: styleScheme,
});

export const StyledProvider = ({ children, currentStyles = {}, addCustomStyles = {} }: TypeStyledProvider) => {
    const calculateStyles = () => {
        const sanitizedCurrentStyles = Object.fromEntries(
            Object.entries(currentStyles)
                .filter(([, value]) => value !== undefined)
                .map(([name, value]) => {
                    const base = styleScheme[name] || {};
                    //@ts-ignore
                    return [name, { ...base, ...value }];
                })
        );

        const sanitizedCustomStyles = Object.fromEntries(
            Object.entries(addCustomStyles).filter(([, value]) => value !== undefined)
        );

        return {
            ...styleScheme,
            ...sanitizedCurrentStyles,
            ...sanitizedCustomStyles,
        };
    };

    const [styles, setStyles] = useState<TypeSS>(calculateStyles());

    useEffect(() => {
        setStyles(calculateStyles());
    }, [currentStyles, addCustomStyles]);

    const contextValue: TypeStyledContext = {
        currentStyles: styles,
    };

    return <StyledContext.Provider value={contextValue}>{children}</StyledContext.Provider>;
};

export const useStyledContext = (): TypeStyledContext => {
    const context = useContext(StyledContext);
    if (!context) {
        throw new Error('useStyledContext must be used within a StyledProvider');
    }
    return context;
};
