import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type CheckProps = IconSVGContainerProps;

export const Check: React.FC<CheckProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91063 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
