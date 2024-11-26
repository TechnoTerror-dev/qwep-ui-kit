import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type PenProps = IconSVGContainerProps;

export const Pen: React.FC<PenProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M19.66 12.1075L17.8925 10.34L6.25 21.9825V23.75H8.0175L19.66 12.1075ZM21.4275 10.34L23.195 8.5725L21.4275 6.805L19.66 8.5725L21.4275 10.34ZM9.0525 26.25H3.75V20.9462L20.5437 4.1525C20.7782 3.91816 21.096 3.78651 21.4275 3.78651C21.759 3.78651 22.0768 3.91816 22.3113 4.1525L25.8475 7.68875C26.0818 7.92316 26.2135 8.24104 26.2135 8.5725C26.2135 8.90395 26.0818 9.22184 25.8475 9.45625L9.05375 26.25H9.0525Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
