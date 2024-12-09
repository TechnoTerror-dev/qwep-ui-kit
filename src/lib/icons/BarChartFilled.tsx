import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BarChartFilledProps = IconSVGContainerProps;

export const BarChartFilled: React.FC<BarChartFilledProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M1.66602 11.5911H6.66602V18.2578H1.66602V11.5911ZM7.49935 3.25781H12.4993V18.2578H7.49935V3.25781ZM13.3327 7.42448H18.3327V18.2578H13.3327V7.42448Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
