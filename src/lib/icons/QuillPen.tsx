import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type QuillPenProps = IconSVGContainerProps;

export const QuillPen: React.FC<QuillPenProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M8.675 17.545C8.38375 18.325 8.1375 19.045 7.9175 19.7738C9.1175 18.9025 10.5437 18.35 12.19 18.1438C15.3312 17.7513 18.1225 15.6775 19.535 13.0712L17.715 11.2525L19.4813 9.48375L20.7312 8.2325C21.2687 7.695 21.875 6.7025 22.5163 5.2725C15.525 6.35625 11.2438 10.6375 8.67375 17.545H8.675ZM21.25 11.2513L22.5 12.5C21.25 16.25 17.5 20 12.5 20.625C9.16375 21.0425 7.08 23.3338 6.2475 27.5H3.75C5 20 7.5 2.5 26.25 2.5C25 6.24625 23.7525 8.745 22.5038 9.99625L21.25 11.2513Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
