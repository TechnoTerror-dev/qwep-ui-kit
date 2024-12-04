import { getColor } from '@src/lib/common/getColor';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
import { TButtonProps, EButtonProps } from '@src/lib/types/TypeBtn';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { SButton, TButton } from '../button/Button';

type MainButtonProps = {
    position?: TButtonProps.BtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TBaseProps.ItemIconPosition;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
} & TButton.Main;

type VariantProps = {
    hover: boolean;
} & TButton.SRoot;

type SIconContainerProps = {
    $iconPosition: TBaseProps.ItemIconPosition;
} & React.HTMLAttributes<HTMLDivElement>;

type SContentContainerProps = {
    $position: TButtonProps.BtnPosition;
} & React.HTMLAttributes<HTMLDivElement>;

const SIconContainer = styled.div<SIconContainerProps>`
    ${(props) => {
        if (props.$iconPosition === EBaseProps.ItemIconPosition.RIGHT) {
            return css`
                order: 1;
                margin-left: 6px;
            `;
        } else {
            return css`
                order: 0;
                margin-right: 6px;
            `;
        }
    }}
`;

const BTN_VARIANT = {
    [EButtonProps.VariantBtn.CONTAINED]: (props: VariantProps) => css`
        color: ${props.$colors.textItem};
    `,
    [EButtonProps.VariantBtn.TEXT]: (props: VariantProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
    [EButtonProps.VariantBtn.OUTLINED]: (props: VariantProps) => css`
        color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
};

const SRoot = styled(SButton.Root)<TButton.SRoot>`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 70px;
    ${SIconContainer} {
        svg {
            ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: false })};
        }
    }
    &:not([disabled]):hover {
        ${SIconContainer} {
            svg {
                ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
            }
        }
    }
`;

const SContentContainer = styled.div<SContentContainerProps>`
    flex-grow: 1;
    display: inline-block;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: ${(props) => props.$position};
`;

export const MainButton = React.memo(
    React.forwardRef<HTMLButtonElement, MainButtonProps>(
        (
            {
                icon,
                sizeVariant = EBaseProps.VariantSize.L,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                variant = EButtonProps.VariantBtn.CONTAINED,
                position = EButtonProps.BtnPosition.CENTER,
                iconPosition = EBaseProps.ItemIconPosition.LEFT,
                _isActiveHover = true,
                iconContainerProps,
                contentProps,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr'], $styles);

            const renderIcon = useMemo(() => {
                return renderIconButton({ icon: icon, size: styles.btn, sizeVariant, rest: { $colors: colors } });
            }, [icon, colors, styles, sizeVariant]);

            const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
                itemRippleEffect(
                    event,
                    getColor({
                        cs: colors,
                        color: variant === EButtonProps.VariantBtn.CONTAINED ? colors.alpha : rest.color,
                        variant: colorVariant,
                        opacity: '40',
                    })
                );
                if (rest.onClick) {
                    await rest.onClick(event);
                }
            };

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    onClick={handleClick}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $color={rest.color}
                    color={rest.color}
                    $mr={rest.mr}
                    $blocked={rest.blocked}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    {renderIcon && (
                        <SIconContainer $iconPosition={iconPosition} {...iconContainerProps}>
                            {renderIcon}
                        </SIconContainer>
                    )}
                    <SContentContainer $position={position} {...contentProps}>
                        {rest.children}
                    </SContentContainer>
                </SRoot>
            );
        }
    )
);

//export component
export const SMainButton = {
    Root: SRoot,
    IconContainer: SIconContainer,
    ContentContainer: SContentContainer,
};

//export type
export namespace TMainButton {
    export type Main = MainButtonProps;
    export type SRoot = TButton.SRoot;
    export type SIconContainer = SIconContainerProps;
    export type SContentContainer = SContentContainerProps;
}
