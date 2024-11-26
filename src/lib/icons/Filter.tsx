import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type FilterProps = IconSVGContainerProps;

export const Filter: React.FC<FilterProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M26.25 5V7.5H25L18.75 16.875V27.5H11.25V16.875L5 7.5H3.75V5H26.25ZM8.005 7.5L13.75 16.1175V25H16.25V16.1175L21.995 7.5H8.005Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
