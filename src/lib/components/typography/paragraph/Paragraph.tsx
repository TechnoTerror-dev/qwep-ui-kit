import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import { ETextProps } from '@src/lib/types/TypeText';
import React from 'react';
import styled, { css } from 'styled-components';
import { SBaseText, TBaseText } from '../base/BaseText';

type TypeStyles = {
    mr: TypeSSMR;
} & TBaseText.Styles;

type ParagraphProps = {
    mr?: TBaseProps.Margin;
    isEllipsis?: boolean;
    $styles?: TypeStyles;
} & TBaseText.Main;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $styles: TypeStyles;
    $isEllipsis?: boolean;
} & TBaseText.SRoot;

const SRoot = styled(SBaseText.Root)<SRootProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        props.$isEllipsis &&
        css`
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`;

export const Paragraph: React.FC<ParagraphProps> = React.memo(
    ({ children, mr, sizeVariant = ETextProps.TextVariant.TEXT, color, isEllipsis, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography', 'mr'], $styles);

        return (
            <SRoot
                $mr={mr}
                $sizeVariant={sizeVariant}
                $colors={colors}
                $styles={styles}
                $isEllipsis={isEllipsis}
                $color={color}
                {...rest}
            >
                {children}
            </SRoot>
        );
    }
);

//export component
export const SParagraph = {
    Root: SRoot,
};

//export type
export namespace TParagraph {
    export type Styles = TypeStyles;
    export type Main = ParagraphProps;
    export type SRoot = SRootProps;
}
