import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type LineChartProps = IconSVGContainerProps;

export const LineChart: React.FC<LineChartProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.25 3.75V23.75H26.25V26.25H3.75V3.75H6.25ZM25.3662 7.86625L27.1338 9.63375L20 16.7675L16.25 13.0187L10.8837 18.3837L9.11625 16.6163L16.25 9.4825L20 13.2313L25.3662 7.86625V7.86625Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
