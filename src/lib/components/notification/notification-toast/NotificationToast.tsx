import { Icon } from '@src/lib';
import { CSSBaseBox, CSSBlurEffect } from '@src/lib/common-styled-component/StyledComponentBox';
import { getColor } from '@src/lib/common/getColor';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBox, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps, EBaseProps } from '@src/lib/types/TypeBase';
import { TBoxProps, EBoxProps } from '@src/lib/types/TypeBox';
import React from 'react';
import { css, styled } from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
    box: TypeSSBox;
    base: TypeSSBase;
};

type NotificationToastProps = {
    id: string;
    count?: number;
    onClose?: (id: string, position: TBaseProps.NotificationPosition) => void;
    title?: string;
    message?: React.ReactNode;
} & BaseProps;

type BaseProps = {
    position: TBaseProps.NotificationPosition;
    isBlur?: boolean;
    variant?: TBaseProps.VariantToast;
    iconSizeVariant?: TBaseProps.VariantSize;
    isClose?: boolean;
    icon?: React.ReactNode;
    mr?: TBaseProps.Margin;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    animationDuration?: number;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $isBlur?: boolean;
    $variant: TBaseProps.VariantToast;
    $position: TBaseProps.NotificationPosition;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $animationDuration?: number;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SCount = styled.p`
    position: absolute;
    top: -2px;
    left: -2px;
    font-size: 8px;
    font-weight: 600;
    width: 13px;
    height: 13px;
    min-height: 13px;
    min-width: 13px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SIconContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    min-height: 36px;
    min-width: 36px;
    border-radius: 50%;
`;

const STitle = styled.p``;

const SContent = styled.div`
    margin-left: 12px;
    width: 100%;
`;

const SHeader = styled.div`
    margin-bottom: 6px;
    display: flex;
    align-items: start;
    justify-content: space-between;
`;

const SCloseBtn = styled.button`
    all: unset;
    cursor: pointer;
`;

const createKeyframeAnimation = (name: string, transformFrom: string) => css`
    @keyframes ${name} {
        from {
            opacity: 0;
            transform: ${transformFrom};
        }
        to {
            opacity: 0.9;
            transform: translateX(0);
        }
    }
    animation: ${name};
`;

const ANIMATION_VARIANT = {
    [EBaseProps.NotificationPosition.BOTTOM_RIGHT]: createKeyframeAnimation('ToastBottomRight', 'translateX(50%)'),
    [EBaseProps.NotificationPosition.BOTTOM_CENTER]: createKeyframeAnimation('ToastBottomCenter', 'translateY(50%)'),
    [EBaseProps.NotificationPosition.BOTTOM_LEFT]: createKeyframeAnimation('ToastBottomLeft', 'translateX(-50%)'),
    [EBaseProps.NotificationPosition.CENTER_RIGHT]: createKeyframeAnimation('ToastCenterRight', 'translateX(50%)'),
    [EBaseProps.NotificationPosition.CENTER]: css`
        @keyframes ToastCenter {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 0.9;
                transform: scale(1);
            }
        }
        animation: ToastCenter;
    `,
    [EBaseProps.NotificationPosition.CENTER_LEFT]: createKeyframeAnimation('ToastCenterLeft', 'translateX(-50%)'),
    [EBaseProps.NotificationPosition.TOP_RIGHT]: createKeyframeAnimation('ToastTopRight', 'translateX(50%)'),
    [EBaseProps.NotificationPosition.TOP_CENTER]: createKeyframeAnimation('ToastTopCenter', 'translateY(-50%)'),
    [EBaseProps.NotificationPosition.TOP_LEFT]: createKeyframeAnimation('ToastTopLeft', 'translateX(-50%)'),
};

const createGradient = (startColor: string, endColor: string) => `linear-gradient(180deg, ${startColor}, ${endColor})`;

const COLOR_VARIANT = {
    [EBaseProps.VariantToast.INFO]: (colors: TypeColorScheme) =>
        createGradient(colors.backgroundInfo, `${colors.backgroundInfo}50`),
    [EBaseProps.VariantToast.WARNING]: (colors: TypeColorScheme) =>
        createGradient(colors.backgroundWarning, `${colors.backgroundWarning}50`),
    [EBaseProps.VariantToast.ERROR]: (colors: TypeColorScheme) =>
        createGradient(colors.backgroundError, `${colors.backgroundError}50`),
    [EBaseProps.VariantToast.SUCCESS]: (colors: TypeColorScheme) =>
        createGradient(colors.backgroundSuccess, `${colors.backgroundSuccess}50`),
};

const applyBoxShadow = ($styles: TypeSSBox, $colors: TypeColorScheme) =>
    `${$styles.boxShadow_M} ${$colors.shadowColor}`;

const applyGradient = ($variant: TBaseProps.VariantToast, $colors: TypeColorScheme) => COLOR_VARIANT[$variant]($colors);

const SRoot = styled.div<SRootProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    color: ${({ $colors }) => $colors.text};
    line-height: ${({ $styles }) => $styles.typography.lineHeightSubText};
    font-size: ${({ $styles }) => $styles.typography.subText};
    max-width: 400px;
    min-width: 250px;
    height: 100%;
    box-shadow: ${({ $styles, $colors }) => applyBoxShadow($styles.box, $colors)};
    background: ${({ $colors, $variant }) => applyGradient($variant, $colors)};
    ${({ $animationDuration, $position }) => css`
        ${ANIMATION_VARIANT[$position]}
        animation-duration: ${$animationDuration ?? 0.5}s;
        animation-timing-function: ease-in-out;
    `}
    opacity: 0.9;
    &:hover {
        transition: all 0.3s ease-in-out;
        opacity: 1;
    }

    ${SIconContent} {
        background: ${({ $colors, $variant }) => applyGradient($variant, $colors)};
        box-shadow: ${({ $styles, $colors }) => applyBoxShadow($styles.box, $colors)};

        ${SCount} {
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    variant: props.$variant,
                    opacity: 'dd',
                })};
            color: ${(props) => props.$colors.alpha};
        }
    }

    ${STitle} {
        font-size: ${({ $styles }) => $styles.typography.text};
        line-height: ${({ $styles }) => $styles.typography.lineHeightText};
        font-weight: ${({ $styles }) => $styles.typography.weightItem};
    }

    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};

    ${(props) => {
        if (props.$isBlur) {
            return CSSBlurEffect({ $blurCount: props.$styles.box.blurCount });
        }
    }}
`;

const iconVariant = {
    [EBaseProps.VariantToast.ERROR]: (colorVariant: TBaseProps.VariantToast, sizeVariant: TBaseProps.VariantSize) => (
        <Icon.Error colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EBaseProps.VariantToast.INFO]: (colorVariant: TBaseProps.VariantToast, sizeVariant: TBaseProps.VariantSize) => (
        <Icon.Info colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EBaseProps.VariantToast.SUCCESS]: (colorVariant: TBaseProps.VariantToast, sizeVariant: TBaseProps.VariantSize) => (
        <Icon.Success colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EBaseProps.VariantToast.WARNING]: (colorVariant: TBaseProps.VariantToast, sizeVariant: TBaseProps.VariantSize) => (
        <Icon.Warning colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
};

export const NotificationToast: React.FC<NotificationToastProps> = React.memo(
    ({
        id = '1',
        title,
        count = 1,
        isBlur,
        message,
        position = EBaseProps.NotificationPosition.BOTTOM_RIGHT,
        onClose,
        variant = EBaseProps.VariantToast.ERROR,
        iconSizeVariant = EBaseProps.VariantSize.M,
        boxPaddingVariant = EBoxProps.BoxPaddingVariant.P3,
        isClose = true,
        icon,
        boxGapVariant,
        animationDuration,
        $styles,
        $colors,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['box', 'typography', 'base'], $styles);

        return (
            <SRoot
                $isBlur={isBlur}
                $styles={styles}
                $colors={colors}
                $position={position}
                $variant={variant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $animationDuration={animationDuration}
                {...rest}
            >
                <SIconContent>
                    {count > 1 && <SCount>{count}</SCount>}
                    {icon ? icon : iconVariant[variant](variant, iconSizeVariant)}
                </SIconContent>
                <SContent>
                    <SHeader>
                        <STitle>{title}</STitle>
                        {isClose && (
                            <SCloseBtn onClick={() => onClose && onClose(id, position)}>
                                <Icon.Close sizeVariant={iconSizeVariant} colorVariant={variant} />
                            </SCloseBtn>
                        )}
                    </SHeader>
                    {message}
                </SContent>
            </SRoot>
        );
    }
);

//export component
export const SNotificationToast = {
    Root: SRoot,
};

//export type
export namespace TNotificationToast {
    export type Base = BaseProps;
    export type Main = NotificationToastProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
