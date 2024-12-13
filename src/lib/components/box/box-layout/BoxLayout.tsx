import { CSSBaseLayout, CSSBaseLayoutStart, CSSBoxLayout } from '@src/lib/common-styled-component/StyledComponentBox';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSLayout } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    layout: TypeSSLayout;
};
type WrapperProps = {
    wrapperBg?: Hex;
} & React.HTMLAttributes<HTMLDivElement>;

export type BoxLayoutProps = {
    wrapperProps?: WrapperProps;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SWrapperProps = {
    $wrapperBg?: Hex;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    position: relative;
    max-width: 100%;

    ${(props) => CSSBaseLayout(props.$styles.layout)};
`;

const SWrapper = styled.div<SWrapperProps>`
    position: relative;
    margin: 0 auto;
    background-color: ${(props) => props.$wrapperBg ?? props.$colors.layoutBox};
    ${(props) => CSSBoxLayout(props.$styles.layout)};
    ${CSSBaseLayoutStart}
`;

export const BoxLayout = React.memo(
    React.forwardRef<HTMLDivElement, BoxLayoutProps>(({ wrapperProps, $styles, $colors, ...rest }, ref) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['layout'], $styles);

        return (
            <SRoot ref={ref} $styles={styles} {...rest}>
                <SWrapper $styles={styles} $colors={colors} {...wrapperProps}>
                    {rest.children}
                </SWrapper>
            </SRoot>
        );
    })
);

//export component
export const SBoxLayout = {
    Box: SRoot,
    Wrapper: SWrapper,
};

//export type
export namespace TBoxLayout {
    export type Styles = TypeStyles;
    export type Main = BoxLayoutProps;
    export type SRoot = SRootProps;
    export type SWrapper = SWrapperProps;
}
