import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BuildingFilledProps = IconSVGContainerProps;

export const BuildingFilled: React.FC<BuildingFilledProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M17.5006 16.6665H19.1673V18.3332H0.833984V16.6665H2.50065V2.49984C2.50065 2.27882 2.58845 2.06686 2.74473 1.91058C2.90101 1.7543 3.11297 1.6665 3.33398 1.6665H16.6673C16.8883 1.6665 17.1003 1.7543 17.2566 1.91058C17.4129 2.06686 17.5006 2.27882 17.5006 2.49984V16.6665ZM6.66732 9.1665V10.8332H9.16732V9.1665H6.66732ZM6.66732 5.83317V7.49984H9.16732V5.83317H6.66732ZM6.66732 12.4998V14.1665H9.16732V12.4998H6.66732ZM10.834 12.4998V14.1665H13.334V12.4998H10.834ZM10.834 9.1665V10.8332H13.334V9.1665H10.834ZM10.834 5.83317V7.49984H13.334V5.83317H10.834Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
