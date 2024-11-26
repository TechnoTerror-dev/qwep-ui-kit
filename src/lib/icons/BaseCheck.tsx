import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BaseCheckProps = IconSVGContainerProps;

export const BaseCheck: React.FC<BaseCheckProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M2 7l4 4 7-7" strokeWidth="1.5" stroke="currentColor" fill="none" />
        </IconSVGContainer>
    );
};
