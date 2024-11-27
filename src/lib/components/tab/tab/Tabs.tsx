import * as T from '@radix-ui/react-tabs';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox.ts';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin, TOrientationContent } from '@src/lib/types/TypeBase';
import { TBoxGapVariant, TBoxPaddingVariant, TBoxWidthVariant } from '@src/lib/types/TypeBox.ts';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type Box = {
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    mr?: TMargin;
    $styles?: TypeStyles;
};

type TypeTabsListProps = {
    orientation?: TOrientationContent;
} & Box &
    React.ComponentPropsWithRef<typeof T.List>;

type TabsProps = {
    component?: React.ReactNode;
    tabs: React.ReactNode;
    tabsListProps?: TypeTabsListProps;
} & Box &
    React.ComponentPropsWithRef<typeof T.Root>;

type SBox = {
    $mr?: TMargin;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $styles: TypeStyles;
};

type SRootProps = SBox & React.ComponentPropsWithRef<typeof T.Root>;
const SRoot = styled(T.Root)<SRootProps>`
    &[data-orientation='vertical'] {
        display: flex;
        flex-direction: column;
    }

    &[data-orientation='horizontal'] {
        display: flex;
    }

    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

type SListProps = {
    $orientation: TOrientationContent;
} & SBox &
    React.ComponentPropsWithRef<typeof T.List>;

const SList = styled(T.List)<SListProps>`
    &[data-orientation] {
        display: ${(props) => (props.$orientation === 'vertical' ? 'block' : 'inline-flex')};
    }

    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const Tabs = React.memo(
    React.forwardRef<HTMLDivElement, TabsProps>(
        ({ mr, tabs, component, boxPaddingVariant, tabsListProps, $styles, ...rest }, ref) => {
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $styles={styles}
                    $boxPaddingVariant={boxPaddingVariant}
                    orientation={'vertical'}
                    {...rest}
                >
                    {component}
                    <T.List {...tabsListProps}>{tabs}</T.List>
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const STabs = {
    Root: SRoot,
    List: SList,
};

//export type
export namespace TTabs {
    export type Main = TabsProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
    export type SList = SListProps;
}
