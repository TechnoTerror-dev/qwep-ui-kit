import { Root } from '@radix-ui/react-radio-group';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TMargin, TOrientationContent, EOrientationContent } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBoxGapVariant } from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type RadioGroupProps = {
    mr?: TMargin;
    orientation?: TOrientationContent;
    boxGapVariant?: TBoxGapVariant;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.ComponentPropsWithRef<typeof Root>;

type SRootProps = {
    $mr?: TMargin;
    $styles: TypeStyles;
    $blocked?: boolean;
    $boxGapVariant: TBoxGapVariant;
    $orientation: TOrientationContent;
} & React.ComponentPropsWithRef<typeof Root>;

const ORIENTATION = {
    [EOrientationContent.HORIZONTAL]: css`
        flex-direction: row;
        align-items: center;
    `,
    [EOrientationContent.VERTICAL]: css`
        flex-direction: column;
        align-items: start;
    `,
};

const SRoot = styled(Root)<SRootProps>`
    position: relative;
    display: flex;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) => ORIENTATION[props.$orientation]};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const RadioGroup = React.memo(
    React.forwardRef<HTMLDivElement, RadioGroupProps>(
        ({ mr, blocked, $styles, boxGapVariant = 'g-1', orientation = EOrientationContent.VERTICAL, ...rest }, ref) => {
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $styles={styles}
                    $blocked={blocked}
                    $boxGapVariant={boxGapVariant}
                    $orientation={orientation}
                    {...rest}
                >
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const SRadioGroup = {
    Root: SRoot,
};

//export type
export namespace TRadioGroup {
    export type Styles = TypeStyles;
    export type Main = RadioGroupProps;
    export type SRoot = SRootProps;
}
