import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type FolderDeleteProps = IconSVGContainerProps;

export const FolderDelete: React.FC<FolderDeleteProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M15.5175 6.25H26.25C26.5815 6.25 26.8995 6.3817 27.1339 6.61612C27.3683 6.85054 27.5 7.16848 27.5 7.5V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H13.0175L15.5175 6.25ZM5 6.25V23.75H25V8.75H14.4825L11.9825 6.25H5ZM10 15H20V17.5H10V15Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
