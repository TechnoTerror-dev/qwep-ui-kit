import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BuildingProps = IconSVGContainerProps;

export const Building: React.FC<BuildingProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M26.25 25H28.75V27.5H1.25V25H3.75V3.75C3.75 3.41848 3.8817 3.10054 4.11612 2.86612C4.35054 2.6317 4.66848 2.5 5 2.5H25C25.3315 2.5 25.6495 2.6317 25.8839 2.86612C26.1183 3.10054 26.25 3.41848 26.25 3.75V25ZM23.75 25V5H6.25V25H23.75ZM10 13.75H13.75V16.25H10V13.75ZM10 8.75H13.75V11.25H10V8.75ZM10 18.75H13.75V21.25H10V18.75ZM16.25 18.75H20V21.25H16.25V18.75ZM16.25 13.75H20V16.25H16.25V13.75ZM16.25 8.75H20V11.25H16.25V8.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
