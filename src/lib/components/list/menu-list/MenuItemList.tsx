import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSList, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import { SItemList, TItemList } from '../list/ItemList';
import { SParagraph, TParagraph } from '../../typography';
import { ETextProps } from '@src/lib/types/TypeText';
import { getColor } from '@src/lib/common/getColor';

type TypeStyles = {
    typography: TypeSSTypography;
    list: TypeSSList;
} & TItemList.Styles;

type MenuItemListProps = {
    title?: React.ReactNode;
    isNoWrapTitle?: boolean;
    isNoWrapSubTitle?: boolean;
    color?: Hex;
    disabled?: boolean;
    icon?: React.ReactNode;

    subTitle?: React.ReactNode;
    colorTitle?: Hex;
    colorSubTitle?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    titleProps?: TParagraph.Main;
    subTitleProps?: TParagraph.Main;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
} & TItemList.Main;

type SRootProps = {
    $color?: Hex;
    $disabled?: boolean;
    $colorTitle?: Hex;
    $colorSubTitle?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
} & TItemList.SRoot;

type STitleProps = {
    $isNoWrapTitle?: boolean;
} & TParagraph.SRoot;

export const STitle = styled(SParagraph.Root)<STitleProps>`
    white-space: ${({ $isNoWrapTitle }) => ($isNoWrapTitle ? 'nowrap' : 'pre-wrap')};
    font-weight: ${(props) => props.$styles.typography.weightTitle};
`;

type SSubTitleProps = {
    $isNoWrapSubTitle?: boolean;
} & TParagraph.SRoot;
export const SSubTitle = styled(SParagraph.Root)<SSubTitleProps>`
    white-space: ${({ $isNoWrapSubTitle }) => ($isNoWrapSubTitle ? 'nowrap' : 'pre-wrap')};
`;

export const SRoot = styled(SItemList.Root)<SRootProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 24px;
    padding: ${(props) => props.$styles.list.paddingItem};
    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${props.$colors.disabled};
                pointer-events: none;
                ${STitle} {
                    color: ${props.$colors.disabled};
                }
                ${SSubTitle} {
                    color: ${props.$colors.disabled};
                }
                svg {
                    color: ${props.$colors.disabled};
                }
            `;
        }
    }}
    &:hover {
        svg {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.$disabled,
                })};
        }
        transition: 0.3s ease-out;
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.$disabled,
                opacity: '20',
            })};
    }
`;

export const MenuItemList = React.memo(
    React.forwardRef<HTMLLIElement, MenuItemListProps>(
        (
            {
                mr,
                icon,
                title,
                subTitle,
                colorTitle,
                colorSubTitle,
                disabled,
                color,

                isNoWrapTitle,
                isNoWrapSubTitle,

                $colors,
                $styles,

                titleProps,
                subTitleProps,
                iconContainerProps,
                contentProps,

                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'typography', 'list'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $color={color}
                    $disabled={disabled}
                    $colors={colors}
                    $styles={styles}
                    $mr={mr}
                    {...rest}
                >
                    <div {...iconContainerProps}>{icon}</div>
                    <div {...contentProps}>
                        {title && (
                            <STitle
                                $color={colorTitle}
                                $sizeVariant={ETextProps.TextVariant.TEXT}
                                $isNoWrapTitle={isNoWrapTitle}
                                $colors={colors}
                                $styles={styles}
                                {...titleProps}
                            >
                                {title}
                            </STitle>
                        )}
                        {subTitle && (
                            <SSubTitle
                                $color={colorSubTitle ?? colors.subText}
                                $sizeVariant={ETextProps.TextVariant.SUBTEXT}
                                $isNoWrapSubTitle={isNoWrapSubTitle}
                                $colors={colors}
                                $styles={styles}
                                {...subTitleProps}
                            >
                                {subTitle}
                            </SSubTitle>
                        )}
                    </div>
                </SRoot>
            );
        }
    )
);

//export component
export const SMenuItemList = {
    Root: SRoot,
    Title: STitle,
    SubTitle: SSubTitle,
};

//export type
export namespace TMenuItemList {
    export type Styles = TypeStyles;
    export type Main = MenuItemListProps;
    export type SRoot = SRootProps;
    export type STitle = TParagraph.SRoot;
    export type SSubTitle = TParagraph.SRoot;
}
