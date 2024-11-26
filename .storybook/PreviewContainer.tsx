import '../src/styles/index.css';
import React from 'react';
import { BaseBox, SimpleBox, SimpleButton, General, BaseLayout, BaseText, BaseContainer } from '../src/lib';
import { Decorator } from '@storybook/react';

const Content = ({ StoryFn, context }: any) => {
    const { currentColorThemeName, changeColorThemeHandler } = General.useBaseThemeContext();

    const changeThemeHandler = () => {
        if (currentColorThemeName === 'light') {
            changeColorThemeHandler('dark');
        } else {
            changeColorThemeHandler('light');
        }
    };

    return (
        <BaseContainer style={{ minHeight: '100%', padding: '12px' }}>
            <BaseLayout>
                <SimpleBox
                    as={'header'}
                    boxDisplay={'flex'}
                    boxGapVariant={'g-2'}
                    boxPaddingVariant={'p-1'}
                    boxShadowVariant={'shd-1'}
                    boxRadiusVariant={'br-1'}
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <SimpleButton sizeVariant={'M'} onClick={changeThemeHandler}>
                        Change theme
                    </SimpleButton>
                    <BaseText>Current color: {currentColorThemeName}</BaseText>
                </SimpleBox>
                <BaseBox>
                    <StoryFn {...context} />
                </BaseBox>
            </BaseLayout>
        </BaseContainer>
    );
};

export const PreviewContainer: Decorator = (StoryFn, context) => {
    return (
        <General.BaseThemeProvider>
            <Content StoryFn={StoryFn} context={context} />
        </General.BaseThemeProvider>
    );
};
