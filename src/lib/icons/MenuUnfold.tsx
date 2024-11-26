import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type MenuUnfoldProps = IconSVGContainerProps;

export const MenuUnfold: React.FC<MenuUnfoldProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M26.25 22.5V25H3.75V22.5H26.25ZM21.3125 4.4375L27.5 10.625L21.3125 16.8125V4.4375V4.4375ZM15 13.75V16.25H3.75V13.75H15ZM15 5V7.5H3.75V5H15Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
