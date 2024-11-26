import { css } from 'styled-components';
import { Hex, TypeColorScheme } from '../general/colors';
import { getColor } from '../common/getColor';
import { TVariantColor } from '../types/TypeBase';

export type StyledScrollbarItemProps = {
    $color?: Hex;
    $colorVariant?: TVariantColor;
    $hover?: boolean;
    $colors: TypeColorScheme;
};

export const StyledScrollbarItem = (props: StyledScrollbarItemProps) => css`
    &::-webkit-scrollbar-track {
        width: 3px;
    }
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 3px;
        max-height: 3px;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.$hover,
        })};
    }
`;
