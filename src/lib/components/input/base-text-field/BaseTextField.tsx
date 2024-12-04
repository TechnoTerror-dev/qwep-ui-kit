import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
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
    mr?: TBaseProps.Margin;
    iconStart?: React.ReactNode;
    sizeVariant?: TBaseProps.VariantSize;
    colorVariant?: TBaseProps.VariantColor;
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
    $colorVariant: TBaseProps.VariantColor;
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
                sizeVariant = EBaseProps.VariantSize.L,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
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
