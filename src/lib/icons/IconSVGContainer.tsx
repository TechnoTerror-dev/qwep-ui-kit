import React from 'react';
import { StyledIconContainer, TypeStyleIconContainer } from '../common-styled-component/StyledIconContainer';
import { Hex, TypeColorScheme } from '../general/colors';
import { useColorScheme } from '../general/useColorScheme';
import { useStyleScheme } from '../general/useStyleScheme';
import { TBaseProps, EBaseProps } from '../types/TypeBase';

export type IconSVGContainerProps = {
    children?: React.ReactNode;
    xmlns?: string;
    viewBox?: string;
    sizeVariant?: TBaseProps.VariantSize;
    colorVariant?: TBaseProps.VariantColor;
    color?: Hex;
    style?: React.CSSProperties;
    mr?: TBaseProps.Margin;
    disabled?: boolean;
    $importantColor?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleIconContainer;
} & React.SVGAttributes<SVGSVGElement>;

export const IconSVGContainer: React.FC<IconSVGContainerProps> = ({
    children,
    xmlns,
    viewBox,
    sizeVariant = EBaseProps.VariantSize.L,
    colorVariant = EBaseProps.VariantColor.DEFAULT,
    color,
    style,
    mr,
    disabled,
    $importantColor,
    $colors,
    $styles,
    ...rest
}) => {
    const colors = useColorScheme($colors);
    const styles = useStyleScheme(['mr', 'icon'], $styles);

    return (
        <StyledIconContainer
            viewBox={viewBox}
            xmlns={xmlns}
            fill="none"
            $mr={mr}
            $color={color}
            $colors={colors}
            $styles={styles}
            $colorVariant={colorVariant}
            $sizeVariant={sizeVariant}
            $disabled={disabled}
            $$importantColor={$importantColor}
            style={style}
            {...rest}
        >
            {children}
        </StyledIconContainer>
    );
};

export namespace TIconContainer {
    export type Main = IconSVGContainerProps;
}
