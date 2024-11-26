import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type EyeCloseProps = IconSVGContainerProps;

export const EyeClose: React.FC<EyeCloseProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M11.6775 23.4775L9.26372 22.83L10.2475 19.1562C8.77493 18.6132 7.40637 17.8217 6.20122 16.8162L3.50997 19.5087L1.74122 17.74L4.43372 15.0487C2.91382 13.2284 1.89258 11.0447 1.46997 8.71125L3.92997 8.2625C4.87872 13.515 9.47372 17.5 15 17.5C20.525 17.5 25.1212 13.515 26.07 8.2625L28.53 8.71C28.1079 11.0438 27.0871 13.228 25.5675 15.0487L28.2587 17.74L26.49 19.5087L23.7987 16.8162C22.5936 17.8217 21.225 18.6132 19.7525 19.1562L20.7362 22.8312L18.3225 23.4775L17.3375 19.8025C15.7904 20.0676 14.2095 20.0676 12.6625 19.8025L11.6775 23.4775Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
