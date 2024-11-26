import { css } from 'styled-components';

export const StyledLoadingItemEffect = css`
    &::after {
        content: '';
        position: absolute;
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        transition: opacity 0.5s;
        animation: 0.8s linear infinite rotate_StyledLoadingItemEffect;
        transition-delay: 0.5s;
        transition-duration: 1s;
    }
    @keyframes rotate_StyledLoadingItemEffect {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
