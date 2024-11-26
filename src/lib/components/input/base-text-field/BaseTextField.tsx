import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantColor, EVariantSize, TMargin, TVariantColor, TVariantSize } from '@src/lib/types/TypeBase';
import { EInpVariant, TInpVariant } from '@src/lib/types/TypeInp';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SBaseInput, TBaseInput } from './BaseInput';
import { SRootTextField, TRootTextField } from './RootTextField';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type BaseTextFieldProps = {
    mr?: TMargin;
    iconStart?: React.ReactNode;
    sizeVariant?: TVariantSize;
    variant?: TInpVariant;
    colorVariant?: TVariantColor;
    color?: Hex;
    blocked?: boolean;
    inputAutofill?: Hex;
    inputAutofillText?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SInputProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $colorVariant: TVariantColor;
} & TBaseInput.SInput;

const SInput = styled(SBaseInput.Input)<SInputProps>`
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }

    &:not([disabled]) {
        color: ${(props) => props.$colors.subText};
        &::placeholder {
            user-select: none;
            color: ${(props) => props.$colors.lightElem};
        }
    }
`;

const SRoot = styled(SRootTextField.Root)<TRootTextField.SRoot>`
    display: inline-flex;
    align-items: center;
`;

export const BaseTextField = React.memo(
    React.forwardRef<HTMLInputElement, BaseTextFieldProps>(
        (
            {
                mr,
                blocked,
                color,
                variant = EInpVariant.OUTLINED,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                _isActiveHover = true,
                $colors,
                $styles,
                rootProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'inp', 'typography', 'mr'], $styles);
            const [isFocused, setIsFocused] = useState(false);
            const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), [rest.disabled]);
            const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), [rest.disabled]);

            return (
                <SRoot
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $sizeVariant={sizeVariant}
                    $disabled={rest.disabled}
                    $_isFocused={isFocused}
                    $_isActiveHover={_isActiveHover}
                    $blocked={blocked}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rootProps}
                >
                    <SInput
                        ref={ref}
                        $styles={{ typography: styles.typography }}
                        $colors={colors}
                        $color={color}
                        $colorVariant={colorVariant}
                        {...rest}
                    />
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseTextField = {
    Root: SRoot,
    Input: SInput,
};

//export type
export namespace TBaseTextField {
    export type Styles = TypeStyles;
    export type Main = BaseTextFieldProps;
    export type SInput = SInputProps;
    export type SRoot = TRootTextField.SRoot;
}
