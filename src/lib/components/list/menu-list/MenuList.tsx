import { TypeSSList, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';
import { SList, TList } from '../list/List';
import { SParagraph, TParagraph } from '../../typography';
import { ETextProps } from '@src/lib/types/TypeText';

type TypeStyles = {
    typography: TypeSSTypography;
    list: TypeSSList;
} & TList.Styles;

type MenuListProps = {
    title?: React.ReactNode;
    titleProps?: TParagraph.Main;
    $styles?: TypeStyles;
} & TList.Main;

type SRootProps = {
    $styles?: TypeStyles;
} & TList.SRoot;

export const STitle = styled(SParagraph.Root)<TParagraph.SRoot>`
    text-transform: capitalize;
`;

export const SRoot = styled(SList.Root)<SRootProps>`
    overflow-x: hidden;
    ${STitle} {
        padding: ${(props) => props.$styles.list.paddingTitle};
    }
`;

export const MenuList = React.memo(
    React.forwardRef<HTMLUListElement, MenuListProps>(
        ({ mr, title, height, $colors, $styles, titleProps, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'typography', 'list'], $styles);

            return (
                <SRoot ref={ref} $colors={colors} $height={height} $styles={styles} $mr={mr} {...rest}>
                    {title && (
                        <STitle
                            $color={colors.lightElem}
                            $colors={colors}
                            $styles={styles}
                            $sizeVariant={ETextProps.TextVariant.TEXT}
                            {...titleProps}
                        >
                            {title}
                        </STitle>
                    )}
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const SMenuList = {
    Root: SRoot,
    Title: STitle,
};

//export type
export namespace TMenuList {
    export type Styles = TypeStyles;
    export type Main = MenuListProps;
    export type SRoot = SRootProps;
    export type STitle = TParagraph.SRoot;
}
