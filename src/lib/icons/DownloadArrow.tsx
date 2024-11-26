import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { EIconPosition, TIconPosition } from '../types/TypeIcon';
import { styled } from 'styled-components';

export type DownloadArrowProps = { position?: TIconPosition } & IconSVGContainerProps;

const IconSVGContainerDownloadArrow = styled(IconSVGContainer)<{ $rotate?: string }>`
    transform: ${(props) => props.$rotate};
`;

export const DownloadArrow: React.FC<DownloadArrowProps> = ({ position = EIconPosition.BOTTOM, ...rest }) => {
    const rotate = {
        [EIconPosition.LEFT]: 'rotate(90deg)',
        [EIconPosition.BOTTOM]: 'rotate(0deg)',
        [EIconPosition.TOP]: 'rotate(180deg)',
        [EIconPosition.RIGHT]: 'rotate(-90deg)',
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
