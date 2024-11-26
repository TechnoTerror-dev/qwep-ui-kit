import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type MenuFoldProps = { fold?: boolean } & IconSVGContainerProps;

export const MenuFold: React.FC<MenuFoldProps> = ({ fold = true, ...rest }) => {
    return (
        <IconSVGContainer
            style={{ transform: fold ? 'scaleX(1)' : 'scaleX(-1)' }}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M26.25 22.5V25H3.75V22.5H26.25ZM8.6875 4.4375V16.8125L2.5 10.625L8.6875 4.4375ZM26.25 13.75V16.25H15V13.75H26.25ZM26.25 5V7.5H15V5H26.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
