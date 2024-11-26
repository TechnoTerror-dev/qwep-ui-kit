import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type RangeGroupProps = IconSVGContainerProps;

export const RangeGroup: React.FC<RangeGroupProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M10 11.25H15V12.5H12.1375L20.525 20.9L19.65 21.775L11.25 13.3875V16.25H10V11.25ZM3.75 5H18.75V16.25L17.5 15V6.25H5V18.75H13.75L15 20H3.75V5ZM25 11.25V26.25H10V22.5H11.25V25H23.75V12.5H21.25V11.25H25Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
            />
        </IconSVGContainer>
    );
};
