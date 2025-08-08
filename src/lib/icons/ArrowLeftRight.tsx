import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type ArrowLeftRightProps = IconSVGContainerProps;

export const ArrowLeftRight: React.FC<ArrowLeftRightProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M10.6667 10.6668V8.00016L14 11.3335L10.6667 14.6668V12.0002H2.66667V10.6668H10.6667ZM5.33333 1.3335V3.9995L13.3333 4.00016V5.3335H5.33333V8.00016L2 4.66683L5.33333 1.3335Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
