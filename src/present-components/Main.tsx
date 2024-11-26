import { BaseContainer } from '@src/lib';
// import { useThemeContext } from '@src/lib/general';
import { useState } from 'react';
import { PresentBox } from './PresentBox';

export const Main = () => {
    const [val, setVal] = useState(<PresentBox />);
    // const { currentColorThemeName, changeColorThemeHandler } = useBaseThemeContext();

    // const { currentColorThemeName, changeColorThemeHandler } = useThemeContext();
    // const { currentStyles } = useStyledContext();

    // const themeChange = () => {
    //     if (currentColorThemeName === 'light') {
    //         changeColorThemeHandler('dark');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         changeColorThemeHandler('light');
    //         localStorage.setItem('theme', 'light');
    //     }
    // };

    const handler = (val: string) => {
        switch (val) {
            // case 'btn':
            //     setVal(<Buttons />);
            //     break;
            // case 'inp':
            //     setVal(<Inputs />);
            //     break;
            // case 'check':
            //     setVal(<Checkbox />);
            //     break;
            // case 'slider':
            //     setVal(<Slider />);
            //     break;
            // case 'colors':
            //     setVal(<Colors />);
            //     break;
            // case 'select':
            //     setVal(<Select />);
            //     break;
            // case 'dialog':
            //     setVal(<DialogTooltip />);
            //     break;
            case 'box':
                setVal(<PresentBox />);
                break;
            // case 'text':
            //     setVal(<Text />);
            //     break;
            // case 'icons':
            //     setVal(<Icons />);
            //     break;
            // case 'ava':
            //     setVal(<Avatar />);
            //     break;
            // case 'wrapper':
            //     setVal(<WrapperItem />);
            //     break;
            // case 'tab':
            //     setVal(<Tab />);
            //     break;
            // case 'alert':
            //     setVal(<Alert />);
            //     break;
        }
    };

    return (
        <BaseContainer>
            {/* <NotificationProvider> */}
            <div style={{ display: 'flex' }}>
                <button onClick={() => handler('btn')}>buttons</button>
                <button onClick={() => handler('inp')}>inputs</button>
                <button onClick={() => handler('check')}>Checkbox Switch</button>
                <button onClick={() => handler('slider')}>Slider</button>
                <button onClick={() => handler('select')}>Select Popup</button>
                <button onClick={() => handler('dialog')}>Dialog tooltip</button>
                <button onClick={() => handler('box')}>Box</button>
                <button onClick={() => handler('text')}>Text</button>
                <button onClick={() => handler('colors')}>Colors</button>
                <button onClick={() => handler('icons')}>Icons</button>
                <button onClick={() => handler('ava')}>Avatar</button>
                <button onClick={() => handler('wrapper')}>WrapperItem</button>
                <button onClick={() => handler('tab')}>Tab</button>
                <button onClick={() => handler('alert')}>Alert</button>
                {/* <BaseButton onClick={themeChange}>{currentColorThemeName}</BaseButton> */}
            </div>
            <div>{val}</div>
            {/* </NotificationProvider> */}
        </BaseContainer>
    );
};
