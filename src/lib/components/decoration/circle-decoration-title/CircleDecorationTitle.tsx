import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme, useStyleScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSMR } from '@src/lib/general/styleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import { styled } from 'styled-components';
import { STitle, TTitle } from '../../typography/title/Title';
import { TTextProps, ETextProps } from '@src/lib/types/TypeText';

type TypeStyles = {
    mr: TypeSSMR;
    base: TypeSSBase;
};

type CircleDecorationTitleProps = {
    mr?: TBaseProps.Margin;
    icon: React.ReactNode;
    title: string;
    bgIcon?: Hex;
    titleSizeVariant?: TTextProps.TitleVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    titleProps?: TTitle.Main;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLSpanElement>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $bgIcon?: Hex;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLSpanElement>;

const SIconContent = styled.div`
    border-radius: 50%;
    position: relative;
`;

const SRoot = styled.div<SRootProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    ${SIconContent} {
        background-color: ${(props) => props.$bgIcon ?? props.$colors.secondary};
        width: ${(props) => props.$styles.base.circleDecorationElem};
        height: ${(props) => props.$styles.base.circleDecorationElem};
        min-width: ${(props) => props.$styles.base.circleDecorationElem};
        min-height: ${(props) => props.$styles.base.circleDecorationElem};
    }
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const CircleDecorationTitle = React.memo(
    React.forwardRef<HTMLDivElement, CircleDecorationTitleProps>(
        (
            {
                mr,
                title,
                icon,
                bgIcon,
                $colors,
                $styles,
                titleProps,
                titleSizeVariant = ETextProps.TitleVariant.M,
                iconContainerProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'base', 'typography'], $styles);

            const renderIcon = useMemo(() => {
                return React.cloneElement(icon as React.ReactElement, {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                    //@ts-ignore
                    ...icon?.props,
                });
            }, [icon]);

            return (
                <SRoot ref={ref} $bgIcon={bgIcon} $colors={colors} $styles={styles} $mr={mr} {...rest}>
                    <SIconContent {...iconContainerProps}>{renderIcon}</SIconContent>
                    <STitle.Root $sizeVariant={titleSizeVariant} $colors={colors} $styles={styles} {...titleProps}>
                        {title}
                    </STitle.Root>
                </SRoot>
            );
        }
    )
);

//export component
export const SCircleDecorationTitle = {
    Root: SRoot,
};

//export type
export namespace TCircleDecorationTitle {
    export type Main = CircleDecorationTitleProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
