import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledProvider } from './lib/general/StyledContext';
import { ThemeProvider, TypeColorTheme } from './lib/general/ThemeContext';
import { Main } from './present-components/Main';
import './styles/index.css';

const Root = () => {
    const storedThemeName = localStorage.getItem('theme');

    return (
        <ThemeProvider colorThemeName={storedThemeName as TypeColorTheme}>
            <StyledProvider
                addCustomStyles={{
                    customBackground: { backgroundColor: 'lightblue', padding: '10px' },
                    customButton: { color: 'white', backgroundColor: 'darkblue' },
                }}
                currentStyles={{
                    layout: { backgroundOpacity: 'dd' },
                    dialog: {
                        backgroundOpacity: 'dd',
                    },
                    menu: {
                        backgroundOpacity: 'dd',
                    },
                    popup: {
                        backgroundOpacity: 'dd',
                    },
                }}
            >
                <Main />
            </StyledProvider>
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <>
            <Root />
        </>
    </React.StrictMode>
);
