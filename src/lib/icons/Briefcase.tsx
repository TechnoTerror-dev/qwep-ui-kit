import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BriefcaseProps = IconSVGContainerProps;

export const Briefcase: React.FC<BriefcaseProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M8.75 6.25V2.5C8.75 2.16848 8.8817 1.85054 9.11612 1.61612C9.35054 1.3817 9.66848 1.25 10 1.25H20C20.3315 1.25 20.6495 1.3817 20.8839 1.61612C21.1183 1.85054 21.25 2.16848 21.25 2.5V6.25H26.25C26.5815 6.25 26.8995 6.3817 27.1339 6.61612C27.3683 6.85054 27.5 7.16848 27.5 7.5V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V7.5C2.5 7.16848 2.6317 6.85054 2.86612 6.61612C3.10054 6.3817 3.41848 6.25 3.75 6.25H8.75ZM25 16.25H5V23.75H25V16.25ZM25 8.75H5V13.75H8.75V11.25H11.25V13.75H18.75V11.25H21.25V13.75H25V8.75ZM11.25 3.75V6.25H18.75V3.75H11.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
