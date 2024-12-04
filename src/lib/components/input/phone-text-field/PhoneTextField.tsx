import { useColorScheme } from '@src/lib/general/useColorScheme';
import InputMask from 'react-input-mask';
import * as P from '@radix-ui/react-popover';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SBaseTextField, TBaseTextField } from '../base-text-field/BaseTextField';
import { IconSVGContainerProps } from '@src/lib/icons/IconSVGContainer';
import { SBaseText, TBaseText } from '../../typography/base/BaseText';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import { getColor } from '@src/lib/common/getColor';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';

type TypeStyles = {
    box: TypeSSBox;
} & TBaseTextField.Styles;

type TypeIcon = {
    id: string;
    title: string;
    icon: React.ReactNode;
    mask: string;
    iconProps?: IconSVGContainerProps;
};

type PhoneTextFieldProps = {
    iconStart?: React.ReactNode;
    defaultIconId?: string;
    configList?: TypeIcon[];
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    popupItemText?: TBaseText.SRoot;
    popupRootProps?: React.ComponentPropsWithRef<typeof P.Root>;
    popupTriggerProps?: React.ComponentPropsWithRef<typeof P.Trigger>;
    popupContentProps?: React.ComponentPropsWithRef<typeof P.Content>;
    popupPortalProps?: React.ComponentPropsWithRef<typeof P.Portal>;
    popupItemProps?: React.HTMLAttributes<HTMLLIElement>;
    $styles?: TypeStyles;
} & TBaseTextField.Main;

const SPopupListItem = styled.li`
    all: unset;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

type SPopupContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
    $colorVariant?: TBaseProps.VariantColor;
} & React.ComponentPropsWithRef<typeof P.Content>;

const SPopupContent = styled(P.Content)<SPopupContentProps>`
    display: grid;
    background-color: ${({ $colors }) => $colors.backgroundBox};
    padding: ${({ $styles }) => $styles.box.boxPadding_2};
    border-radius: ${({ $styles }) => $styles.box.boxBorderRadius_S};
    box-shadow: ${({ $styles, $colors }) => `${$styles.box.boxShadow_M} ${$colors.lightShadow}`};
    ${SPopupListItem} {
        padding: ${({ $styles }) => $styles.box.boxPadding_1};
        border-radius: ${({ $styles }) => $styles.box.boxBorderRadius_S};
        &:hover {
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    opacity: '20',
                })};
        }
    }
`;

const SPopupTrigger = styled(P.Trigger)<React.ComponentPropsWithRef<typeof P.Trigger>>`
    all: unset;
    cursor: pointer;
    margin-right: 8px;
`;

const SPopupText = styled(SBaseText.Root)<TBaseText.SRoot>`
    margin-left: 8px;
`;

export const PhoneTextField = React.memo(
    React.forwardRef<HTMLInputElement, PhoneTextFieldProps>(
        (
            {
                mr,
                configList = [],
                defaultIconId,
                color,
                _isActiveHover = true,
                sizeVariant = EBaseProps.VariantSize.L,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                $colors,
                $styles,
                rootProps,
                popupItemText,
                popupRootProps,
                popupTriggerProps,
                popupContentProps,
                popupPortalProps,
                popupItemProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'inp', 'box', 'typography', 'mr'], $styles);
            const [isFocused, setIsFocused] = useState(false);
            const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), [rest.disabled]);
            const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), [rest.disabled]);
            const [iconId, setIconId] = useState<string>(defaultIconId ?? configList[0].id);
            const [open, setOpen] = useState(false);

            const currentMask = configList.find((item) => item.id === iconId)?.mask || '';
            const inputMaskKey = `input-mask-${iconId}`;

            const handleIconChange = (item: TypeIcon) => {
                setIconId(item.id);
                setOpen(false);
            };

            return (
                <SBaseTextField.Root
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $disabled={rest.disabled}
                    $blocked={rest.blocked}
                    $_isActiveHover={_isActiveHover}
                    $_isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rootProps}
                >
                    <P.Root open={open} {...popupRootProps}>
                        <SPopupTrigger onClick={() => setOpen(true)} {...popupTriggerProps}>
                            {configList.find((icon) => icon.id === iconId)?.icon ?? configList[0].icon}
                        </SPopupTrigger>
                        <P.Portal {...popupPortalProps}>
                            <SPopupContent
                                $colors={colors}
                                $colorVariant={colorVariant}
                                $styles={styles}
                                $color={color}
                                sideOffset={8}
                                onInteractOutside={(e) => e && setOpen(false)}
                                {...popupContentProps}
                            >
                                {configList.map((item) => (
                                    <SPopupListItem
                                        key={item.id}
                                        onClick={() => handleIconChange(item)}
                                        {...popupItemProps}
                                    >
                                        {item.icon}
                                        <SPopupText
                                            $colors={colors}
                                            $styles={styles}
                                            $sizeVariant={'subtext'}
                                            {...popupItemText}
                                        >
                                            {item.title}
                                        </SPopupText>
                                    </SPopupListItem>
                                ))}
                            </SPopupContent>
                        </P.Portal>
                    </P.Root>
                    <InputMask mask={currentMask} maskChar="_" key={inputMaskKey} {...rest}>
                        {(inputProps) => (
                            <SBaseTextField.Input
                                ref={ref}
                                placeholder={rest.placeholder || currentMask.replace(/9/g, '_')}
                                $styles={{ typography: styles.typography }}
                                $colors={colors}
                                $color={color}
                                $colorVariant={colorVariant}
                                {...inputProps}
                            />
                        )}
                    </InputMask>
                </SBaseTextField.Root>
            );
        }
    )
);

//export component
export const SPhoneTextField = {
    Root: SBaseTextField.Root,
    PopupRoot: P.Root,
    PopupTrigger: SPopupTrigger,
    Portal: P.Portal,
    PopupContent: SPopupContent,
    PopupListItem: SPopupListItem,
    PopupText: SPopupText,
};

//export type
export namespace TPhoneTextField {
    export type Main = PhoneTextFieldProps;
    export type Styles = TypeStyles;
    export type Icon = TypeIcon;
    export type SRoot = TBaseTextField.SRoot;
    export type SPopupContent = SPopupContentProps;
    export type PopupPortal = React.ComponentPropsWithRef<typeof P.Portal>;
    export type PopupTrigger = React.ComponentPropsWithRef<typeof P.Trigger>;
    export type PopupItem = React.HTMLAttributes<HTMLLIElement>;
}
