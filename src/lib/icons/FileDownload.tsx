import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type FileDownloadProps = IconSVGContainerProps;

export const FileDownload: React.FC<FileDownloadProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M16.25 15H20L15 20L10 15H13.75V10H16.25V15ZM18.75 5H6.25V25H23.75V10H18.75V5ZM3.75 3.74C3.75 3.055 4.30875 2.5 4.99875 2.5H20L26.25 8.75V26.2413C26.2512 26.4054 26.22 26.5682 26.1582 26.7203C26.0965 26.8724 26.0053 27.0108 25.8901 27.1277C25.7748 27.2446 25.6377 27.3376 25.4864 27.4015C25.3352 27.4654 25.1729 27.4989 25.0087 27.5H4.99125C4.66297 27.4977 4.34877 27.3664 4.11652 27.1344C3.88427 26.9023 3.75262 26.5883 3.75 26.26V3.74Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
