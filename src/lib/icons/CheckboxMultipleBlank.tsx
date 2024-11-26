import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type CheckboxMultipleBlankProps = IconSVGContainerProps;

export const CheckboxMultipleBlank: React.FC<CheckboxMultipleBlankProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M8.75 8.75V3.75C8.75 3.41848 8.8817 3.10054 9.11612 2.86612C9.35054 2.6317 9.66848 2.5 10 2.5H26.25C26.5815 2.5 26.8995 2.6317 27.1339 2.86612C27.3683 3.10054 27.5 3.41848 27.5 3.75V20C27.5 20.3315 27.3683 20.6495 27.1339 20.8839C26.8995 21.1183 26.5815 21.25 26.25 21.25H21.25V26.2413C21.25 26.9363 20.6888 27.5 19.9913 27.5H3.75875C3.5934 27.5002 3.42965 27.4677 3.27685 27.4045C3.12406 27.3413 2.98523 27.2486 2.86831 27.1317C2.75139 27.0148 2.65868 26.8759 2.59548 26.7231C2.53228 26.5704 2.49984 26.4066 2.5 26.2413L2.50375 10.0087C2.50375 9.31375 3.065 8.75 3.7625 8.75H8.75ZM11.25 8.75H19.9913C20.6863 8.75 21.25 9.31125 21.25 10.0087V18.75H25V5H11.25V8.75ZM5.00375 11.25L5 25H18.75V11.25H5.00375Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
