import { TypeGeneral, useColorScheme } from '@src/lib/general';
import React from 'react';
import { css, styled } from 'styled-components';

export type TStickerConfig = {
    id: string;
    title?: string;
    icon?: React.ReactNode;
    isActive: boolean;
};

export type TSticker = {
    onCheck: (isActive: boolean) => void;
} & TStickerConfig;

type SRootProps = {
    $colors: TypeGeneral.ColorScheme;
    $isActive: boolean;
    $isTitle: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SIconContainer = styled.div``;

const SRoot = styled.button<SRootProps>`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    box-sizing: border-box;
    user-select: none;
    position: relative;
    overflow: hidden;
    outline: 0;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    height: 32px;
    padding: 3px 8px;
    border-radius: 8px;
    background-color: transparent;
    line-height: 18px;
    border: 1px solid ${(props) => props.$colors.lightElem};
    color: ${(props) => props.$colors.lightElem};
    ${SIconContainer} {
        ${(props) => props.$isTitle && `padding-right: 4px`};
        svg {
            color: ${(props) => (props.$isActive ? props.$colors.primary : props.$colors.lightElem)};
        }
    }
    &:not([disabled]):hover {
        transition: all 0.3s ease-in-out;
        border-color: ${(props) => props.$colors.primary};
        color: ${(props) => props.$colors.primary};
        ${SIconContainer} {
            svg {
                color: ${(props) => props.$colors.primary};
            }
        }
    }
    ${(props) => {
        if (props.$isActive) {
            return css`
                border: 1px solid ${props.$colors.primary};
                color: ${props.$colors.primary};
                background-color: ${`${props.$colors.primary}10`};
            `;
        }
    }}
`;

export const StickerButton = React.memo(({ title, icon, isActive = false, onCheck, ...props }: TSticker) => {
    const colors = useColorScheme();

    const renderIconButton = () =>
        React.cloneElement(icon as React.ReactElement, {
            // @ts-ignore
            sizeVariant: 'M',
        });

    return (
        <SRoot
            $colors={colors}
            $isActive={isActive}
            $isTitle={Boolean(title)}
            onClick={() => onCheck?.(!isActive)}
            {...props}
        >
            {icon && <SIconContainer>{renderIconButton()}</SIconContainer>}
            {title}
        </SRoot>
    );
});
