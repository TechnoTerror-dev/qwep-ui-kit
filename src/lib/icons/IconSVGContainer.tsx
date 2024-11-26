import React from 'react';
import { StyledIconContainer, TypeStyleIconContainer } from '../common-styled-component/StyledIconContainer';
import { Hex, TypeColorScheme } from '../general/colors';
import { useColorScheme } from '../general/useColorScheme';
import { useStyleScheme } from '../general/useStyleScheme';
import { TVariantColor, TMargin, TVariantSize, EVariantColor, EVariantSize } from '../types/TypeBase';

export type IconSVGContainerProps = {
    children?: React.ReactNode;
    xmlns?: string;
    viewBox?: string;
    sizeVariant?: TVariantSize;
    colorVariant?: TVariantColor;
    color?: Hex;
    style?: React.CSSProperties;
    mr?: TMargin;
    disabled?: boolean;
    _importantColor?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleIconContainer;
} & React.SVGAttributes<SVGSVGElement>;

export const IconSVGContainer: React.FC<IconSVGContainerProps> = ({
    children,
    xmlns,
    viewBox,
    sizeVariant = EVariantSize.L,
    colorVariant = EVariantColor.DEFAULT,
    color,
    style,
    mr,
    disabled,
    _importantColor,
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
            $_importantColor={_importantColor}
            style={style}
            {...rest}
        >
            {children}
        </StyledIconContainer>
    );
};
