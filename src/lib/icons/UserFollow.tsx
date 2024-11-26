import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type UserFollowProps = IconSVGContainerProps;

export const UserFollow: React.FC<UserFollowProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <g clipPath="url(#clip0_1632_536)">
                <path
                    d="M17.5 17.815V20.4275C16.3687 20.0275 15.1578 19.9048 13.9693 20.0697C12.7807 20.2347 11.649 20.6824 10.6693 21.3753C9.68958 22.0682 8.89043 22.986 8.33895 24.0518C7.78748 25.1175 7.49977 26.3 7.5 27.5L5 27.4988C4.99961 25.9724 5.34865 24.4661 6.02037 23.0955C6.69209 21.7248 7.66867 20.5262 8.87527 19.5913C10.0819 18.6564 11.4865 18.0102 12.9814 17.7021C14.4764 17.3939 16.0221 17.4334 17.5 17.815ZM15 16.25C10.8562 16.25 7.5 12.8938 7.5 8.75C7.5 4.60625 10.8562 1.25 15 1.25C19.1438 1.25 22.5 4.60625 22.5 8.75C22.5 12.8938 19.1438 16.25 15 16.25ZM15 13.75C17.7625 13.75 20 11.5125 20 8.75C20 5.9875 17.7625 3.75 15 3.75C12.2375 3.75 10 5.9875 10 8.75C10 11.5125 12.2375 13.75 15 13.75ZM22.2412 24.8925L26.66 20.4737L28.4288 22.2412L22.2412 28.4288L17.8212 24.0088L19.59 22.2412L22.2412 24.8925Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_1632_536">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>{' '}
        </IconSVGContainer>
    );
};
