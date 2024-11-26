import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type NotificationProps = IconSVGContainerProps;

export const Notification: React.FC<NotificationProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M25 21.25H27.5V23.75H2.5V21.25H5V12.5C5 9.84784 6.05357 7.3043 7.92893 5.42893C9.8043 3.55357 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.55357 22.0711 5.42893C23.9464 7.3043 25 9.84784 25 12.5V21.25ZM22.5 21.25V12.5C22.5 10.5109 21.7098 8.60322 20.3033 7.1967C18.8968 5.79018 16.9891 5 15 5C13.0109 5 11.1032 5.79018 9.6967 7.1967C8.29018 8.60322 7.5 10.5109 7.5 12.5V21.25H22.5ZM11.25 26.25H18.75V28.75H11.25V26.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
