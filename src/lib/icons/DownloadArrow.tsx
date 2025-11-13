import React from 'react';
import styled from 'styled-components';
import { EIconProps, TIconProps } from '../types/TypeIcon';
import { IconSVGContainer, IconSVGContainerProps } from './IconSVGContainer';

export type DownloadArrowProps = { position?: TIconProps.IconPosition } & IconSVGContainerProps;

const IconSVGContainerDownloadArrow = styled(IconSVGContainer)<{ $rotate?: string }>`
    transform: ${(props) => props.$rotate};
`;

export const DownloadArrow: React.FC<DownloadArrowProps> = ({ position = EIconProps.IconPosition.BOTTOM, ...rest }) => {
    const rotate = {
        [EIconProps.IconPosition.LEFT]: 'rotate(90deg)',
        [EIconProps.IconPosition.BOTTOM]: 'rotate(0deg)',
        [EIconProps.IconPosition.TOP]: 'rotate(180deg)',
        [EIconProps.IconPosition.RIGHT]: 'rotate(-90deg)',
    };
    return (
        <IconSVGContainerDownloadArrow
            style={{ transform: rotate[position] }}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $rotate={rotate[position]}
            {...rest}
        >
            <path
                d="M3.75 23.75H26.25V26.25H3.75V23.75ZM16.25 16.465L23.8387 8.875L25.6063 10.6425L15 21.25L4.39375 10.6438L6.16125 8.875L13.75 16.4625V2.5H16.25V16.465Z"
                fill="currentColor"
            />
        </IconSVGContainerDownloadArrow>
    );
};
