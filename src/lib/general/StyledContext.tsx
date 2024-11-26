import { createContext, ReactNode, useState, useContext } from 'react';
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
    const sanitizedCurrentStyles = Object.fromEntries(
        Object.entries(currentStyles).filter(([, value]) => value !== undefined)
    );

    const sanitizedCustomStyles = Object.fromEntries(
        Object.entries(addCustomStyles).filter(([, value]) => value !== undefined)
    );

    const initialStyles: TypeSS = {
        ...styleScheme,
        ...sanitizedCurrentStyles,
        ...sanitizedCustomStyles,
    };

    const [styles] = useState<TypeSS>(initialStyles);

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
