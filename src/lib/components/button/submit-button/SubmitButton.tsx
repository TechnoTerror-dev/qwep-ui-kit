import { getColor } from '@src/lib/common/getColor';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBtn } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EItemIconPosition, EVariantColor, EVariantSize, TVariantColor, TVariantSize } from '@src/lib/types/TypeBase';
import { EBtnPosition, EVariantBtn, TVariantBtn } from '@src/lib/types/TypeBtn';
import React, { useMemo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { CircleLoading, SCircleLoading } from '../../becoration/loading/CircleLoading';
import { TButton } from '../button/Button';
import { SMainButton, TMainButton } from '../main-button/MainButton';

type SubmitButtonProps = {
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & TMainButton.Main;

type SButtonProps = {
    $isLoading?: boolean;
} & TMainButton.SRoot;

type SLoadingProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TButton.Styles;
    $colorVariant: TVariantColor;
    $sizeVariant: TVariantSize;
    $variant: TVariantBtn;
} & React.HTMLAttributes<HTMLDivElement>;

const LOADING_SIZE = {
    [EVariantSize.L]: (props: TypeSSBtn) => css`
        width: ${props.btnLoadingSize_L};
        height: ${props.btnLoadingSize_L};
    `,
    [EVariantSize.M]: (props: TypeSSBtn) => css`
        width: ${props.btnLoadingSize_M};
        height: ${props.btnLoadingSize_M};
    `,
};

const LOADING_BTN_VARIANT = {
    [EVariantBtn.CONTAINED]: (props: SLoadingProps) => css`
        border-top-color: ${props.$colors.textItem};
        border-bottom-color: ${props.$colors.textItem};
    `,
    [EVariantBtn.TEXT]: (props: SLoadingProps) => {
        const c = getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        });
        return css`
            border-top-color: ${c};
            border-bottom-color: ${c};
        `;
    },
    [EVariantBtn.OUTLINED]: (props: SLoadingProps) => {
        const c = getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        });
        return css`
            border-top-color: ${c};
            border-bottom-color: ${c};
        `;
    },
};

const SubmitBtnShowLoading = keyframes`
  0% {
    padding-left: 0px;
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    padding-left: 4px;
    opacity: 0.3;
    transform: translateX(-50%);
  }
  100% {
    padding-left: 8px;
    opacity: 1;
    transform: translateX(0%);
  }
`;

const SLoading = styled.div<SLoadingProps>`
    animation: ${SubmitBtnShowLoading} 0.2s linear;
    padding-left: 8px;
    ${SCircleLoading.Root} {
        ${SCircleLoading.Spinner} {
            border-color: transparent;
            ${(props) => LOADING_SIZE[props.$sizeVariant](props.$styles.btn)}
            ${(props) => LOADING_BTN_VARIANT[props.$variant](props)}
        }
    }
`;

const SRoot = styled(SMainButton.Root)<SButtonProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

export const SubmitButton = React.memo(
    React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
        (
            {
                isLoading,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                variant = EVariantBtn.CONTAINED,
                position = EBtnPosition.CENTER,
                iconPosition = EItemIconPosition.LEFT,
                _isActiveHover = true,
                loadingProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme();
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr']);

            const renderIcon = useMemo(() => {
                return renderIconButton({ icon: rest.icon, size: styles.btn, sizeVariant, rest: { $colors: colors } });
            }, [rest.icon, colors, styles, sizeVariant]);

            const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
                itemRippleEffect(
                    event,
                    getColor({
                        cs: colors,
                        color: variant === EVariantBtn.CONTAINED ? colors.alpha : rest.color,
                        variant: colorVariant,
                        opacity: '40',
                    })
                );
                if (rest.onClick) {
                    await rest.onClick(event);
                }
            };

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    onClick={handleClick}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $mr={rest.mr}
                    $isLoading={isLoading}
                    $blocked={rest.blocked}
                    $color={rest.color}
                    $_isActiveHover={!isLoading && _isActiveHover}
                    {...rest}
                >
                    {renderIcon && (
                        <SMainButton.IconContainer $iconPosition={iconPosition} {...rest.iconContainerProps}>
                            {renderIcon}
                        </SMainButton.IconContainer>
                    )}
                    <SMainButton.ContentContainer $position={position} {...rest.contentProps}>
                        {rest.children}
                    </SMainButton.ContentContainer>
                    {isLoading && !rest.disabled && (
                        <SLoading
                            $colors={colors}
                            $styles={styles}
                            $sizeVariant={sizeVariant}
                            $colorVariant={colorVariant}
                            $variant={variant}
                            $color={rest.color}
                            {...loadingProps}
                        >
                            <CircleLoading />
                        </SLoading>
                    )}
                </SRoot>
            );
        }
    )
);

// //export component
// export const SSubmitButton = {
//     Button: SButton,
//     Loading: SLoading,
// };

// //export type
// export namespace TSubmitButton {
//     export type Main = SubmitButtonProps;
//     export type SButton = SButtonProps;
//     export type SLoading = SLoadingProps;
//     export type SIconContainer = TSimpleButton.SIconContainer;
//     export type SContentContainer = TSimpleButton.SContentContainer;
// }
