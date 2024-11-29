import * as Tooltip from '@radix-ui/react-tooltip';
import styled from 'styled-components';
import React from 'react';

type SContentProps = React.ComponentPropsWithRef<typeof Tooltip.Content>;

const SContent = styled(Tooltip.Content)<SContentProps>`
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &[data-state='delayed-open'][data-side='top'] {
        animation-name: slideDownAndFade;
    }
    &[data-state='delayed-open'][data-side='right'] {
        animation-name: slideLeftAndFade;
    }
    &[data-state='delayed-open'][data-side='bottom'] {
        animation-name: slideUpAndFade;
    }
    &[data-state='delayed-open'][data-side='left'] {
        animation-name: slideRightAndFade;
    }

    @keyframes slideUpAndFade {
        from {
            opacity: 0;
            transform: translateY(2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideRightAndFade {
        from {
            opacity: 0;
            transform: translateX(-2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDownAndFade {
        from {
            opacity: 0;
            transform: translateY(-2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideLeftAndFade {
        from {
            opacity: 0;
            transform: translateX(2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

//export component
export const SBaseTooltipComponent = {
    Content: SContent,
};

//export type
export namespace TBaseTooltipComponent {
    export type SContent = SContentProps;
}
