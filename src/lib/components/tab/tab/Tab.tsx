import * as T from '@radix-ui/react-tabs';
import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    btn: TypeSSBtn;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type TabProps = {
    mr?: TBaseProps.Margin;
    color?: Hex;
    sizeVariant?: TBaseProps.VariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    blocked?: boolean;
} & React.ComponentPropsWithRef<typeof T.Trigger>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $blocked?: boolean;
    $sizeVariant: TBaseProps.VariantSize;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.ComponentPropsWithRef<typeof T.Trigger>;

const TAB_SIZE = {
    [EBaseProps.VariantSize.L]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_L};
        padding: ${`${btn.btnPadding_Y_L} ${btn.btnPadding_X_L}`};
    `,
    [EBaseProps.VariantSize.M]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_M};
        padding: ${`${btn.btnPadding_Y_M} ${btn.btnPadding_X_M}`};
    `,
};

const SRoot = styled(T.Trigger)<SRootProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: ${({ $styles }) => $styles.typography.lineHeightText};
    border: none;
    background-color: transparent;
    outline: 0;
    transition: all 400ms;
    color: ${(props) => props.$colors.text};
    border: 1px solid ${({ $colors }) => $colors.system};
    border-radius: ${({ $styles }) => $styles.box.boxBorderRadius_M};
    font-size: ${({ $styles }) => $styles.typography.weightGlobal};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => TAB_SIZE[props.$sizeVariant](props.$styles.btn)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};

    &[data-state='active'] {
        background-color: ${(props) => props.$colors.secondary};
        box-shadow: ${(props) => `${props.$styles.box.boxShadow_M} ${props.$colors.lightShadow}`};
        border-color: ${(props) => props.$colors.secondary};
        font-weight: ${({ $styles }) => $styles.typography.weightItem};

        &:disabled {
            border-color: ${(props) => props.$colors.disabled};
        }
    }
    &:not([disabled]):hover {
        box-shadow: ${(props) => `${props.$styles.box.boxShadow_M} ${props.$colors.lightShadow}`};
    }
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const Tab = React.memo(
    React.forwardRef<HTMLButtonElement, TabProps>(
        ({ mr, sizeVariant = EBaseProps.VariantSize.L, blocked, $colors, $styles, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'btn', 'typography'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $styles={styles}
                    $colors={colors}
                    $blocked={blocked}
                    $sizeVariant={sizeVariant}
                    {...rest}
                    value={rest.value}
                >
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const STab = {
    Root: SRoot,
};

//export type
export namespace TTab {
    export type Main = TabProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
