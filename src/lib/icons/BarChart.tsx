import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BarChartProps = IconSVGContainerProps;

export const BarChart: React.FC<BarChartProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M2.5 16.25H10V26.25H2.5V16.25ZM20 10H27.5V26.25H20V10ZM11.25 3.75H18.75V26.25H11.25V3.75ZM5 18.75V23.75H7.5V18.75H5ZM13.75 6.25V23.75H16.25V6.25H13.75ZM22.5 12.5V23.75H25V12.5H22.5Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
