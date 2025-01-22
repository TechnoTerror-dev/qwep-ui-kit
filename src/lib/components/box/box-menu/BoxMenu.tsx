import { TypeSSBox, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { css, styled } from 'styled-components';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { TBaseProps, EBaseProps } from '@src/lib/types/TypeBase';
import { EBoxProps, TBoxProps } from '@src/lib/types/TypeBox';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { opacity } from '@src/lib/common/getColor';
import { TMenuItem } from './MenuItem';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};

type BoxMenuProps = {
    mr?: TBaseProps.Margin;
    orientation?: TBaseProps.OrientationContent;
    boxWidthVariant?: TBoxProps.BoxWidthVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    bg?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxProps.BoxShadowVariant;
    boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
    onChangeActiveItem?: (value: string) => void | Promise<void>;
    activeItem?: string;

    //items
    itemSizeVariant?: TBaseProps.VariantSize;
    itemColor?: Hex;
    itemOpacityHover?: opacity;
    itemOpacityActive?: opacity;
    itemTextColor?: Hex;
    itemTextColorActive?: Hex;
    menuItemProps?: TMenuItem.Main;

    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $orientation: TBaseProps.OrientationContent;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxProps.BoxShadowVariant;
    $boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $mr?: TBaseProps.Margin;
} & React.HTMLAttributes<HTMLDivElement>;

const ORIENTATION = {
    [EBaseProps.OrientationContent.HORIZONTAL]: css`
        display: inline-flex;
        align-items: center;
    `,
    [EBaseProps.OrientationContent.VERTICAL]: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    box-sizing: border-box;
    background-color: ${(props) => props.$bg ?? props.$colors.secondary};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => ORIENTATION[props.$orientation]}
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BoxMenu = React.memo(
    React.forwardRef<HTMLDivElement, BoxMenuProps>(
        (
            {
                mr,
                boxWidthVariant,
                boxPaddingVariant = EBoxProps.BoxPaddingVariant.P1,
                bg,
                boxGapVariant = EBoxProps.BoxGapVariant.G1,
                boxRadiusVariant = EBoxProps.BoxRadiusVariant.BrS,
                boxShadowVariant = EBoxProps.BoxShadowVariant.ShdS,
                boxShadowColor,
                orientation = EBaseProps.OrientationContent.HORIZONTAL,

                onChangeActiveItem,
                activeItem,

                itemSizeVariant = EBaseProps.VariantSize.L,
                itemColor,
                itemOpacityHover,
                itemOpacityActive,
                itemTextColor,
                itemTextColorActive,

                $styles,
                $colors,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box', 'mr', 'btn', 'typography'], $styles);
            const [activeValue, setActiveValue] = useState<string>(activeItem ?? '');

            const handleClick = useCallback(
                (event: React.MouseEvent<HTMLButtonElement>) => {
                    const newValue = event.currentTarget.getAttribute('value');
                    setActiveValue(newValue || '');
                    if (onChangeActiveItem) {
                        onChangeActiveItem(newValue || '');
                    }
                },
                [onChangeActiveItem]
            );

            useEffect(() => {
                if (activeItem !== undefined && activeItem !== activeValue) {
                    setActiveValue(activeItem);
                }
            }, [activeItem, activeValue]);

            const renderItems = useMemo(() => {
                return React.Children.map(rest.children, (child: React.ReactNode) => {
                    if (React.isValidElement<TMenuItem.Main>(child) && child.props.value) {
                        return React.cloneElement(
                            child as React.ReactElement<{ value?: string | number; active?: boolean }>,
                            {
                                onClick: handleClick,
                                active: Boolean(child.props.value === activeValue),
                                sizeVariant: itemSizeVariant,
                                color: itemColor,
                                opacityHover: itemOpacityHover,
                                opacityActive: itemOpacityActive,
                                textColor: itemTextColor,
                                textColorActive: itemTextColorActive,
                                $styles,
                                $colors,
                                tabIndex: 0,
                                'aria-pressed': child.props.value === activeValue ? 'true' : 'false',
                                ...child.props,
                            }
                        );
                    }
                    return child;
                });
            }, [
                rest.children,
                handleClick,
                activeValue,
                itemSizeVariant,
                itemColor,
                $styles,
                $colors,
                itemOpacityActive,
                itemOpacityHover,
                itemTextColor,
                itemTextColorActive,
            ]);

            return (
                <SRoot
                    ref={ref}
                    $styles={styles}
                    $colors={colors}
                    $mr={mr}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxGapVariant={boxGapVariant}
                    $bg={bg}
                    $boxRadiusVariant={boxRadiusVariant}
                    $boxShadowVariant={boxShadowVariant}
                    $boxShadowColor={boxShadowColor}
                    $orientation={orientation}
                    {...rest}
                >
                    {renderItems}
                </SRoot>
            );
        }
    )
);
//export component
export const SBoxMenu = {
    Root: SRoot,
};

//export type
export namespace TBoxMenu {
    export type Main = BoxMenuProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
