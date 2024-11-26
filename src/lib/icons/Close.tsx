import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type CloseProps = IconSVGContainerProps;

export const Close: React.FC<CloseProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M14.9999 13.2325L21.1874 7.045L22.9549 8.8125L16.7674 15L22.9549 21.1875L21.1874 22.955L14.9999 16.7675L8.81242 22.955L7.04492 21.1875L13.2324 15L7.04492 8.8125L8.81242 7.045L14.9999 13.2325Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
