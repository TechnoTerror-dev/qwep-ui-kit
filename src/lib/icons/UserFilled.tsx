import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type UserFilledProps = IconSVGContainerProps;

export const UserFilled: React.FC<UserFilledProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M9.16732 12.4763V17.4246H10.834V12.4763C14.1223 12.8863 16.6673 15.6913 16.6673 19.0913H3.33398C3.33401 17.4675 3.92664 15.8994 5.00065 14.6815C6.07467 13.4636 7.55623 12.6795 9.16732 12.4763ZM10.0007 11.5913C7.23815 11.5913 5.00065 9.35381 5.00065 6.59131C5.00065 3.82881 7.23815 1.59131 10.0007 1.59131C12.7632 1.59131 15.0007 3.82881 15.0007 6.59131C15.0007 9.35381 12.7632 11.5913 10.0007 11.5913Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
