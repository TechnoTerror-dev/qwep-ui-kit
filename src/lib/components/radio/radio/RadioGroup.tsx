import { Root } from '@radix-ui/react-radio-group';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TBaseProps, EBaseProps } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { EBoxProps, TBoxProps } from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type RadioGroupProps = {
    mr?: TBaseProps.Margin;
    orientation?: TBaseProps.OrientationContent;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.ComponentPropsWithRef<typeof Root>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $styles: TypeStyles;
    $blocked?: boolean;
    $boxGapVariant: TBoxProps.BoxGapVariant;
    $orientation: TBaseProps.OrientationContent;
} & React.ComponentPropsWithRef<typeof Root>;

const ORIENTATION = {
    [EBaseProps.OrientationContent.HORIZONTAL]: css`
        flex-direction: row;
        align-items: center;
    `,
    [EBaseProps.OrientationContent.VERTICAL]: css`
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
        (
            {
                mr,
                blocked,
                $styles,
                boxGapVariant = EBoxProps.BoxGapVariant.G1,
                orientation = EBaseProps.OrientationContent.VERTICAL,
                ...rest
            },
            ref
        ) => {
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
