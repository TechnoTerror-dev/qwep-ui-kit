import React from 'react';
import styled from 'styled-components';
import { EIconProps, TIconProps } from '../types/TypeIcon';
import { IconSVGContainer, IconSVGContainerProps } from './IconSVGContainer';

export type ArrowProps = {
    position?: TIconProps.IconPosition;
} & IconSVGContainerProps;

const IconSVGContainerArrow = styled(IconSVGContainer)<{ $rotate?: string }>`
    transform: ${(props) => props.$rotate};
`;

export const Arrow: React.FC<ArrowProps> = ({ position = EIconProps.IconPosition.TOP, ...rest }) => {
    const rotate = {
        [EIconProps.IconPosition.LEFT]: 'rotate(90deg)',
        [EIconProps.IconPosition.BOTTOM]: 'rotate(0deg)',
        [EIconProps.IconPosition.TOP]: 'rotate(180deg)',
        [EIconProps.IconPosition.RIGHT]: 'rotate(-90deg)',
    };
    return (
        <IconSVGContainerArrow
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $rotate={rotate[position]}
            {...rest}
        >
            <path
                d="M14.9999 16.465L21.1874 10.2775L22.9549 12.045L14.9999 20L7.04492 12.045L8.81242 10.2775L14.9999 16.465Z"
                fill="currentColor"
            />
        </IconSVGContainerArrow>
    );
};
