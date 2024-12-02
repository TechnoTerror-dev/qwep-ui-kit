import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors.ts';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseInputProps = {
    inputAutofill?: Hex;
    inputAutofillText?: Hex;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SInputProps = {
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $inputAutofill?: Hex;
    $inputAutofillText?: Hex;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SInput = styled.input<SInputProps>`
    border: none;
    outline: 0;
    width: 100%;
    line-height: ${({ $styles }) => $styles.typography.lineHeightText};
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.text};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: 0 0 0 10px ${(props) => props.$inputAutofill ?? props.$colors.backgroundBox} inset !important;
        -webkit-text-fill-color: ${(props) => props.$inputAutofillText ?? props.$colors.subText} !important;
        color: ${(props) => props.$inputAutofillText ?? props.$colors.subText} !important;
    }
`;

export const BaseInput: React.FC<BaseInputProps> = React.memo(
    ({ inputAutofill, inputAutofillText, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography'], $styles);
        return (
            <SInput
                $inputAutofill={inputAutofill}
                $inputAutofillText={inputAutofillText}
                $styles={styles}
                $colors={colors}
                {...rest}
            />
        );
    }
);

//export component
export const SBaseInput = {
    Input: SInput,
};

//export type
export namespace TBaseInput {
    export type Main = BaseInputProps;
    export type Styles = TypeStyles;
    export type SInput = SInputProps;
}
