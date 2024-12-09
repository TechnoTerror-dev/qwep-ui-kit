import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
};

type ItemListProps = {
    mr?: TBaseProps.Margin;

    $styles?: TypeStyles;
} & React.ButtonHTMLAttributes<HTMLLIElement>;

type SRootProps = {
    $mr?: TBaseProps.Margin;

    $styles: TypeStyles;
} & React.ButtonHTMLAttributes<HTMLLIElement>;

export const SRoot = styled.li<SRootProps>`
    box-sizing: border-box;
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const ItemList = React.memo(
    React.forwardRef<HTMLLIElement, ItemListProps>(({ mr, $styles, ...rest }, ref) => {
        const styles = useStyleScheme(['mr'], $styles);

        return (
            <SRoot ref={ref} $styles={styles} $mr={mr} {...rest}>
                {rest.children}
            </SRoot>
        );
    })
);

//export component
export const SItemList = {
    Root: SRoot,
};

//export type
export namespace TItemList {
    export type Styles = TypeStyles;
    export type Main = ItemListProps;
    export type SRoot = SRootProps;
}
