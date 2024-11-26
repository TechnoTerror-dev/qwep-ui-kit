import React from 'react';
import { IconSVGContainer, IconSVGContainerProps } from './IconSVGContainer';

export type StarFillProps = IconSVGContainerProps;

export const StarFill: React.FC<StarFillProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M8.00027 12.1735L3.29827 14.8055L4.34827 9.52016L0.391602 5.8615L5.74294 5.22683L8.00027 0.333496L10.2576 5.22683L15.6089 5.8615L11.6523 9.52016L12.7023 14.8055L8.00027 12.1735Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
