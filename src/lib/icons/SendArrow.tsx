import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { EIconPosition, TIconPosition } from '../types/TypeIcon';
import { styled } from 'styled-components';

export type SendArrowProps = { position?: TIconPosition } & IconSVGContainerProps;

const IconSVGContainerSendArrow = styled(IconSVGContainer)<{ $rotate?: string }>`
    transform: ${(props) => props.$rotate};
`;

export const SendArrow: React.FC<SendArrowProps> = ({ position = EIconPosition.LEFT, ...rest }) => {
    const rotate = {
        [EIconPosition.LEFT]: 'rotate(-180deg)',
        [EIconPosition.BOTTOM]: 'rotate(90deg)',
        [EIconPosition.TOP]: 'rotate(-90deg)',
        [EIconPosition.RIGHT]: 'rotate(0)',
    };

    return (
        <IconSVGContainerSendArrow
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $rotate={rotate[position]}
            {...rest}
        >
            <path
                d="M4.67625 1.75999L27.7537 14.4525C27.8517 14.5064 27.9335 14.5857 27.9904 14.682C28.0473 14.7783 28.0773 14.8881 28.0773 15C28.0773 15.1119 28.0473 15.2217 27.9904 15.318C27.9335 15.4143 27.8517 15.4935 27.7537 15.5475L4.67625 28.24C4.58109 28.2923 4.47394 28.319 4.36534 28.3173C4.25675 28.3156 4.15047 28.2857 4.05697 28.2304C3.96348 28.1752 3.886 28.0965 3.83217 28.0022C3.77834 27.9078 3.75002 27.8011 3.75 27.6925V2.30749C3.75002 2.19889 3.77834 2.09216 3.83217 1.99783C3.886 1.9035 3.96348 1.82483 4.05697 1.76957C4.15047 1.7143 4.25675 1.68435 4.36534 1.68268C4.47394 1.681 4.58109 1.70765 4.67625 1.75999V1.75999ZM6.25 16.25V24.5212L23.5625 15L6.25 5.47874V13.75H12.5V16.25H6.25Z"
                fill="currentColor"
            />
        </IconSVGContainerSendArrow>
    );
};
