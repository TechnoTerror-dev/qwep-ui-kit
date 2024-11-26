import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { SBaseText, TBaseText } from '@src/lib/components/typography/base/BaseText.tsx';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import { TBoxGapVariant } from '@src/lib/types/TypeBox';
import { EPositionInpLabel, TPositionInpLabel } from '@src/lib/types/TypeInp';
import { ETextVariant, TTextVariant } from '@src/lib/types/TypeText';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { MessageBox, TMessageBox } from './MessageBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type WrapperInputProps = {
    id?: string;
    label?: string;
    width?: string;
    labelSize?: TTextVariant;
    customLabel?: React.ReactNode;
    required?: boolean;
    positionLabel?: TPositionInpLabel;
    mr?: TMargin;
    boxGapVariant?: TBoxGapVariant;
    message?: TMessageBox.Message;
    labelColor?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    messageProps?: React.HTMLAttributes<HTMLSpanElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $mr?: TMargin;
    $width?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $positionLabel: TPositionInpLabel;
    $boxGapVariant: TBoxGapVariant;
} & React.HTMLAttributes<HTMLDivElement>;

const POSITION = {
    [EPositionInpLabel.TOP]: css`
        display: grid;
    `,
    [EPositionInpLabel.RIGHT]: css`
        display: flex;
        align-items: center;
        > * {
            order: 1;
        }
        > :first-child {
            order: 2;
        }
    `,
    [EPositionInpLabel.LEFT]: css`
        display: flex;
        align-items: center;
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    max-width: 100%;
    width: ${(props) => props.$width ?? '100%'};
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
    ${(props) => POSITION[props.$positionLabel]}
`;

type SLabelProps = {
    $required?: boolean;
} & TBaseText.SRoot;

const SLabel = styled(SBaseText.Root)<SLabelProps>`
    position: relative;
    cursor: pointer;
    user-select: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;
    width: fit-content;
    font-weight: ${({ $styles }) => $styles.typography.weightItem};
    ${(props) =>
        props.$required &&
        css`
            padding-right: 8px;
            &:before {
                content: '*';
                position: absolute;
                top: 0;
                right: 0;
                color: ${props.$colors.errorItem};
            }
        `};
`;

export const WrapperInput = React.memo(
    React.forwardRef<HTMLDivElement, WrapperInputProps>(
        (
            {
                mr,
                id,
                children,
                required,
                blocked,
                customLabel,
                positionLabel = EPositionInpLabel.TOP,
                $colors,
                $styles,
                label,
                width,
                message,
                boxGapVariant = 'g-3',
                labelColor,
                messageProps,
                labelSize = ETextVariant.TEXT,
                labelProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box', 'mr', 'typography'], $styles);

            const renderItem = useMemo(() => {
                return React.cloneElement(children as React.ReactElement, { id });
            }, [children, id]);

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    $blocked={blocked}
                    $styles={styles}
                    $mr={mr}
                    $positionLabel={positionLabel}
                    $boxGapVariant={boxGapVariant}
                    $width={width}
                    {...rest}
                >
                    {customLabel ? (
                        customLabel
                    ) : (
                        <SLabel
                            as={'label'}
                            htmlFor={id}
                            $sizeVariant={labelSize}
                            $required={required}
                            $colors={colors}
                            $styles={{ typography: styles.typography }}
                            $color={labelColor}
                            {...labelProps}
                        >
                            {label}
                        </SLabel>
                    )}
                    {renderItem}
                    <MessageBox $colors={colors} message={message} {...messageProps} />
                </SRoot>
            );
        }
    )
);

//export component
export const SWrapperInput = {
    Root: SRoot,
    Label: SLabel,
};

//export type
export namespace TWrapperInput {
    export type Styles = TypeStyles;
    export type Main = WrapperInputProps;
    export type SRoot = SRootProps;
    export type SLabel = SLabelProps;
}
