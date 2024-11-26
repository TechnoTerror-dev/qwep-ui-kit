import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type ListCheckProps = IconSVGContainerProps;

export const ListCheck: React.FC<ListCheckProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M10 5H26.25V7.5H10V5ZM3.75 4.375H7.5V8.125H3.75V4.375ZM3.75 13.125H7.5V16.875H3.75V13.125ZM3.75 21.875H7.5V25.625H3.75V21.875ZM10 13.75H26.25V16.25H10V13.75ZM10 22.5H26.25V25H10V22.5Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
