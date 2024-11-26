import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type SpamProps = IconSVGContainerProps;

export const Spam: React.FC<SpamProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M19.92 3.125L26.875 10.0838V19.9213L19.92 26.875H10.0825L3.125 19.92V10.0825L10.0825 3.125H19.92ZM18.8838 5.625H11.1175L5.62625 11.1188V18.885L11.1175 24.3775H18.8838L24.3762 18.885V11.1175L18.8838 5.62625V5.625ZM13.75 18.75H16.25V21.25H13.75V18.75ZM13.75 8.75H16.25V16.25H13.75V8.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
