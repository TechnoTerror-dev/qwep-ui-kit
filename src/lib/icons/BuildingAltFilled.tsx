import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BuildingAltFilledProps = IconSVGContainerProps;

export const BuildingAltFilled: React.FC<BuildingAltFilledProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M14.166 16.5911H15.8327V9.92448H10.8327V16.5911H12.4993V11.5911H14.166V16.5911ZM2.49935 16.5911V4.09115C2.49935 3.87013 2.58715 3.65817 2.74343 3.50189C2.89971 3.34561 3.11167 3.25781 3.33268 3.25781H14.9993C15.2204 3.25781 15.4323 3.34561 15.5886 3.50189C15.7449 3.65817 15.8327 3.87013 15.8327 4.09115V8.25781H17.4993V16.5911H18.3327V18.2578H1.66602V16.5911H2.49935ZM5.83268 9.92448V11.5911H7.49935V9.92448H5.83268ZM5.83268 13.2578V14.9245H7.49935V13.2578H5.83268ZM5.83268 6.59115V8.25781H7.49935V6.59115H5.83268Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
