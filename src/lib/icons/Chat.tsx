import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { Hex } from '../general/colors';
import { useColorScheme } from '../general/useColorScheme';

export type ChatProps = {
    secondColor?: Hex;
} & IconSVGContainerProps;

export const Chat: React.FC<ChatProps> = ({ secondColor, ...rest }) => {
    const colors = useColorScheme(rest.$colors);
    return (
        <IconSVGContainer viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" $colors={colors} {...rest}>
            <rect width="60" height="60" rx="30" fill="currentColor" />
            <path
                transform="translate(12 12)"
                d="M9.17908 22.5L2.49658 27.75V4.5C2.49658 4.10218 2.65462 3.72064 2.93592 3.43934C3.21723 3.15804 3.59876 3 3.99658 3H26.4966C26.8944 3 27.2759 3.15804 27.5572 3.43934C27.8385 3.72064 27.9966 4.10218 27.9966 4.5V22.5H9.17908ZM8.14108 19.5H24.9966V6H5.49658V21.5775L8.14108 19.5ZM12.9966 25.5H28.3521L30.9966 27.5775V12H32.4966C32.8944 12 33.2759 12.158 33.5572 12.4393C33.8385 12.7206 33.9966 13.1022 33.9966 13.5V33.75L27.3141 28.5H14.4966C14.0988 28.5 13.7172 28.342 13.4359 28.0607C13.1546 27.7794 12.9966 27.3978 12.9966 27V25.5Z"
                fill={secondColor ?? colors.alpha}
                stroke="none"
            />
        </IconSVGContainer>
    );
};
