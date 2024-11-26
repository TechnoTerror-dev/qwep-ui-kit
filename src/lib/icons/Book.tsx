import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BookProps = IconSVGContainerProps;

export const Book: React.FC<BookProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M26.25 22.5H7.5C7.16848 22.5 6.85054 22.6317 6.61612 22.8661C6.3817 23.1005 6.25 23.4185 6.25 23.75C6.25 24.0815 6.3817 24.3995 6.61612 24.6339C6.85054 24.8683 7.16848 25 7.5 25H26.25V27.5H7.5C6.50544 27.5 5.55161 27.1049 4.84835 26.4017C4.14509 25.6984 3.75 24.7446 3.75 23.75V5C3.75 4.33696 4.01339 3.70107 4.48223 3.23223C4.95107 2.76339 5.58696 2.5 6.25 2.5H26.25V22.5ZM6.25 20.0625C6.4525 20.0212 6.66125 20 6.875 20H23.75V5H6.25V20.0625ZM20 11.25H10V8.75H20V11.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
