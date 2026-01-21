import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { useColorScheme } from '@src/lib/general';
import { SCheckbox, TCheckbox } from '../checkbox/Checkbox';
import { getColor } from '@src/lib/common/getColor';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';

type SubmitCheckboxProps = {
    isLoading: boolean;
} & TCheckbox.Main;

type SRootProps = {
    $isLoading: boolean;
} & TCheckbox.SRoot;

const SRoot = styled(SCheckbox.Root)<SRootProps>`
    ${(props) => {
        if (props.$isLoading && !props.disabled) {
            return css`
                pointer-events: none;
                border-color: transparent;
                &[data-state='checked'] {
                    border-color: transparent;
                }
                svg {
                    display: none;
                }
                &::after {
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 2px solid
                        ${getColor({
                            cs: props.$colors,
                            color: props.$color,
                            variant: props.$colorVariant,
                            opacity: '80',
                        })};
                }
                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitCheckbox: React.FC<SubmitCheckboxProps> = React.memo(
    React.forwardRef<HTMLButtonElement, SubmitCheckboxProps>(
        (
            {
                isLoading,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                sizeVariant = EBaseProps.VariantSize.L,
                _isActiveHover = true,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme(rest.$colors);
            const styles = useStyleScheme(['base', 'checkbox', 'mr'], rest.$styles);

            return (
                <SRoot
                    ref={ref}
                    $isLoading={isLoading}
                    $color={rest.color}
                    $mr={rest.mr}
                    $colors={colors}
                    $blocked={rest.blocked}
                    $styles={styles}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    <SCheckbox.Indicator {...rest.indicatorProps}>
                        <SCheckbox.Icon
                            $colors={colors}
                            $disabled={rest.disabled}
                            $colorVariant={colorVariant}
                            viewBox="0 0 24 24"
                            {...rest.iconProps}
                        >
                            <polyline points="20 6 9 17 4 12" {...rest.polylineProps} />
                        </SCheckbox.Icon>
                    </SCheckbox.Indicator>
                </SRoot>
            );
        }
    )
);

//export component
export const SSubmitCheckbox = {
    Root: SRoot,
};

//export type
export namespace TSubmitCheckbox {
    export type Main = SubmitCheckboxProps;
    export type SRoot = SRootProps;
}
