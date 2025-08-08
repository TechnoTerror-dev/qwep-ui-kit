import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type SumProps = IconSVGContainerProps;

export const Sum: React.FC<SumProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M0.464844 0.833496H10.5314V1.87053H2.96825L6.59788 5.50016L2.96825 9.12979H10.5314V10.1668H0.464844L5.13151 5.50016L0.464844 0.833496Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
