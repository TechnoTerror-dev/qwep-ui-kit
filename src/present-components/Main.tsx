import { MainContainer } from '@src/lib';
// import { useThemeContext } from '@src/lib/general';
import { useState } from 'react';
import { ShowBox } from './ShowBox';
import { ShowPopup } from './ShowPopup';
import { ShowProfile } from './ShowProfile';

export const Main = () => {
    const [val, setVal] = useState(<ShowPopup />);
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
                setVal(<ShowBox />);
                break;
            case 'popup':
                setVal(<ShowPopup />);
                break;
            case 'profile':
                setVal(<ShowProfile />);
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
        <MainContainer>
            {/* <NotificationProvider> */}
            <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0 }}>
                <button onClick={() => handler('box')}>Box</button>
                <button onClick={() => handler('popup')}>Popup</button>
                <button onClick={() => handler('profile')}>Profile</button>
                {/* <button onClick={() => handler('btn')}>buttons</button>
                <button onClick={() => handler('inp')}>inputs</button>
                <button onClick={() => handler('check')}>Checkbox Switch</button>
                <button onClick={() => handler('slider')}>Slider</button>
                <button onClick={() => handler('select')}>Select Popup</button>
                <button onClick={() => handler('dialog')}>Dialog tooltip</button>
         
                <button onClick={() => handler('text')}>Text</button>
                <button onClick={() => handler('colors')}>Colors</button>
                <button onClick={() => handler('icons')}>Icons</button>
                <button onClick={() => handler('ava')}>Avatar</button>
                <button onClick={() => handler('wrapper')}>WrapperItem</button>
                <button onClick={() => handler('tab')}>Tab</button>
                <button onClick={() => handler('alert')}>Alert</button> */}
                {/* <BaseButton onClick={themeChange}>{currentColorThemeName}</BaseButton> */}
            </div>
            <div>{val}</div>
            {/* </NotificationProvider> */}
        </MainContainer>
    );
};
