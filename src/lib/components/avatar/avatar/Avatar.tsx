import * as A from '@radix-ui/react-avatar';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSAvatar, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TAvatarProps, EAvatarProps } from '@src/lib/types/TypeAvatar';
import { TBaseProps } from '@src/lib/types/TypeBase';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    avatar: TypeSSAvatar;
    mr: TypeSSMR;
};

type AvatarProps = {
    mr?: TBaseProps.Margin;
    sizeVariant?: TAvatarProps.VariantSizeAvatar;
    color?: Hex;
    bg?: Hex;
    rootProps?: React.ComponentPropsWithRef<typeof A.Root>;
    fallbackProps?: React.ComponentPropsWithRef<typeof A.Fallback>;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.ComponentPropsWithRef<typeof A.Image>;

type SRootProps = {
    $color?: Hex;
    $bg?: Hex;
    $mr?: TBaseProps.Margin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TAvatarProps.VariantSizeAvatar;
} & React.ComponentPropsWithRef<typeof A.Root>;

const SIZE = {
    [EAvatarProps.VariantSizeAvatar.S]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_S};
        min-width: ${props.avatarSize_S};
        height: ${props.avatarSize_S};
        font-size: ${props.avatarFontSize_S};
    `,
    [EAvatarProps.VariantSizeAvatar.M]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_M};
        min-width: ${props.avatarSize_M};
        height: ${props.avatarSize_M};
        font-size: ${props.avatarFontSize_M};
    `,
    [EAvatarProps.VariantSizeAvatar.L]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_L};
        min-width: ${props.avatarSize_L};
        height: ${props.avatarSize_L};
        font-size: ${props.avatarFontSize_L};
    `,
};

const SFallback = styled(A.Fallback)<React.ComponentPropsWithRef<typeof A.Fallback>>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-transform: uppercase;
`;

const SImg = styled(A.Image)<React.ComponentPropsWithRef<typeof A.Image>>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const SRoot = styled(A.Root)<SRootProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    border-radius: 100%;
    ${(props) => SIZE[props.$sizeVariant](props.$styles.avatar)}
    ${SFallback} {
        background-color: ${(props) => props.$bg ?? props.$colors.lightElem};
        color: ${(props) => props.$color ?? props.$colors.textItem};
        font-weight: ${(props) => props.$styles.avatar.avatarFontWeight};
    }
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
`;

export const Avatar = React.memo(
    React.forwardRef<HTMLSpanElement, AvatarProps>(
        (
            {
                mr,
                color,
                bg,
                sizeVariant = EAvatarProps.VariantSizeAvatar.L,
                rootProps,
                fallbackProps,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['avatar', 'mr'], $styles);

            const getFallbackText = useCallback((altText?: string) => {
                const words = altText?.split(' ').slice(0, 2);
                return words?.map((word) => word.slice(0, Math.min(1, word.length))).join('');
            }, []);

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    style={rest.style}
                    $mr={mr}
                    $bg={bg}
                    $sizeVariant={sizeVariant}
                    {...rootProps}
                >
                    <SImg {...rest} />
                    <SFallback delayMs={0} {...fallbackProps}>
                        {getFallbackText(rest.alt)}
                    </SFallback>
                </SRoot>
            );
        }
    )
);

//export component
export const SAvatar = {
    Root: SRoot,
    Img: SImg,
    Fallback: SFallback,
};

//export type
export namespace TAvatar {
    export type Styles = TypeStyles;
    export type Main = AvatarProps;
    export type SRoot = SRootProps;
    export type SImg = React.ComponentPropsWithRef<typeof A.Image>;
    export type SFallback = React.ComponentPropsWithRef<typeof A.Fallback>;
}
