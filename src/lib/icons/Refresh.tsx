import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type RefreshProps = IconSVGContainerProps;

export const Refresh: React.FC<RefreshProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.82875 5.54125C9.09695 3.57582 11.9987 2.49581 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 17.67 26.6625 20.145 25.2375 22.175L21.25 15H25C25.0002 13.0395 24.4241 11.1223 23.3433 9.48657C22.2626 7.85088 20.7249 6.56895 18.9215 5.80015C17.118 5.03136 15.1284 4.80962 13.1999 5.16252C11.2715 5.51541 9.48932 6.42737 8.075 7.785L6.82875 5.54125ZM23.1713 24.4587C20.9031 26.4242 18.0013 27.5042 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 12.33 3.3375 9.855 4.7625 7.825L8.75 15H5C4.99984 16.9605 5.57594 18.8777 6.65667 20.5134C7.7374 22.1491 9.27508 23.431 11.0785 24.1998C12.882 24.9686 14.8716 25.1904 16.8001 24.8375C18.7285 24.4846 20.5107 23.5726 21.925 22.215L23.1713 24.4587Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
