import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type InboxProps = IconSVGContainerProps;

export const Inbox: React.FC<InboxProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M5 3.75H25L27.5 8.75V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V8.755L5 3.75ZM25 11.25H5V23.75H25V11.25ZM24.705 8.75L23.455 6.25H6.54625L5.29625 8.75H24.705ZM16.25 17.5H20L15 22.5L10 17.5H13.75V12.5H16.25V17.5Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
