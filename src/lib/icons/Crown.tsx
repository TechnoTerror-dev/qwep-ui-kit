import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type CrownProps = IconSVGContainerProps;

export const Crown: React.FC<CrownProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M1.33203 12.6668H14.6654V14.0002H1.33203V12.6668ZM1.33203 3.3335L4.66536 5.66683L7.9987 1.3335L11.332 5.66683L14.6654 3.3335V11.3335H1.33203V3.3335ZM2.66536 5.89416V10.0002H13.332V5.89416L11.052 7.49016L7.9987 3.52016L4.94536 7.49016L2.66536 5.8935V5.89416Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
