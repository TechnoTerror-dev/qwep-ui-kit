import { getColor } from '@src/lib/common/getColor';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { TypeSSBtn } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps } from '@src/lib/types/TypeBase';
import { EButtonProps } from '@src/lib/types/TypeBtn';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { SButton, TButton } from '../button/Button';

type IconButtonProps = { borderRadius?: 'default' | 'round' } & TButton.Main;

type VariantProps = {
    hover: boolean;
} & TButton.SRoot;

const BTN_ICON_VARIANT = {
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

const SIZE_VARIANT_ROUND = {
    [EBaseProps.VariantSize.L]: (btn: TypeSSBtn) => css`
        width: ${btn.btnHeight_L};
        height: ${btn.btnHeight_L};
    `,
    [EBaseProps.VariantSize.M]: (btn: TypeSSBtn) => css`
        width: ${btn.btnHeight_M};
        height: ${btn.btnHeight_M};
    `,
};

type SRootProps = {
    $borderRadius: 'default' | 'round';
} & TButton.SRoot;

const SRoot = styled(SButton.Root)<SRootProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.$borderRadius === 'round' &&
        css`
            border-radius: 50%;
            ${SIZE_VARIANT_ROUND[props.$sizeVariant](props.$styles.btn)}
        `}
    svg {
        ${(props) => BTN_ICON_VARIANT[props.$variant]({ ...props, hover: false })};
    }

    &:not([disabled]):hover {
        svg {
            ${(props) => BTN_ICON_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
        }
    }
`;

export const IconButton = React.memo(
    React.forwardRef<HTMLButtonElement, IconButtonProps>(
        (
            {
                borderRadius = 'default',
                sizeVariant = EBaseProps.VariantSize.L,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                variant = EButtonProps.VariantBtn.CONTAINED,
                _isActiveHover = true,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr'], $styles);

            const renderIcon = useMemo(() => {
                return renderIconButton({
                    icon: rest.children,
                    size: styles.btn,
                    sizeVariant,
                    rest: { $colors: colors },
                });
            }, [rest.children, colors, styles, sizeVariant]);

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
                    $color={rest.color}
                    color={rest.color}
                    $blocked={rest.blocked}
                    $mr={rest.mr}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $borderRadius={borderRadius}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    {renderIcon && renderIcon}
                </SRoot>
            );
        }
    )
);

//export component
export const SIconButton = {
    Button: SButton,
};

//export type
export namespace TIconButton {
    export type Main = IconButtonProps;
    export type SRoot = SRootProps;
}
