import { BoxMenu, Icon, IconButton, MainContainer, MenuItem, NotificationProvider } from '@src/lib';
import { General } from '@src/lib';
import { useState } from 'react';
import { ShowBox } from './ShowBox';
import { ShowPopup } from './ShowPopup';
import { ShowProfile } from './ShowProfile';
import { ShowMenu } from './ShowMenu';
import { ShowIcon } from './ShowIcon';
import { ShowList } from './ShowList';
import { ShowSlider } from './ShowSlider';
import { ShowDialog } from './ShowDialog';
import { ShowNotification } from './ShowNotification';
import { styled } from 'styled-components';
import { ShowTooltip } from './ShowTooltip';
import { ShowColors } from './ShowColors';
import { ShowFilterBar } from './ShowFilterBar';
import { ShowSwitch } from './ShowSwitch';

const SMenu = styled(BoxMenu)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const pages = {
    box: <ShowBox />,
    popup: <ShowPopup />,
    profile: <ShowProfile />,
    menu: <ShowMenu />,
    list: <ShowList />,
    icons: <ShowIcon />,
    colors: <ShowColors />,
    slider: <ShowSlider />,
    dialog: <ShowDialog />,
    notification: <ShowNotification />,
    tooltip: <ShowTooltip />,
    filter: <ShowFilterBar />,
    switch: <ShowSwitch />,
};

export const Main = () => {
    const [pageName, setPageName] = useState(localStorage.getItem('page') ?? 'box');
    const { currentColorThemeName, changeColorThemeHandler } = General.useThemeContext();

    const themeChange = () => {
        if (currentColorThemeName === 'light') {
            changeColorThemeHandler('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            changeColorThemeHandler('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const menuHandler = (value: string) => {
        setPageName(value);
        localStorage.setItem('page', value);
    };

    return (
        <MainContainer>
            <NotificationProvider>
                <SMenu
                    activeItem={pageName}
                    itemSizeVariant={'M'}
                    onChangeActiveItem={menuHandler}
                    bgStyles={{
                        isBlur: true,
                        backgroundOpacity: 'dd',
                    }}
                >
                    <MenuItem value={'box'}>Box</MenuItem>
                    <MenuItem value={'popup'}>Popup</MenuItem>
                    <MenuItem value={'profile'}>Profile</MenuItem>
                    <MenuItem value={'menu'}>Menu</MenuItem>
                    <MenuItem value={'list'}>List</MenuItem>
                    <MenuItem value={'slider'}>Slider</MenuItem>
                    <MenuItem value={'dialog'}>Dialog</MenuItem>
                    <MenuItem value={'notification'}>Notification</MenuItem>
                    <MenuItem value={'tooltip'}>Tooltip</MenuItem>
                    <MenuItem value={'icons'}>Icons</MenuItem>
                    <MenuItem value={'colors'}>Colors</MenuItem>
                    <MenuItem value={'filter'}>Filter</MenuItem>
                    <MenuItem value={'switch'}>Switch</MenuItem>

                    <IconButton onClick={themeChange} sizeVariant={'M'}>
                        {currentColorThemeName === 'light' ? <Icon.ThemeDark /> : <Icon.ThemeLight />}
                    </IconButton>
                </SMenu>
                {/* @ts-ignore */}
                {pages[pageName]}
            </NotificationProvider>
        </MainContainer>
    );
};
