import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { useStyleScheme } from '@src/lib/general';
import { TypeSSBase, TypeSSBox } from '@src/lib/general/styleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
import { TBoxProps, EBoxProps } from '@src/lib/types/TypeBox';
import React from 'react';
import ReactDOM from 'react-dom';
import { css, styled } from 'styled-components';
import { NotificationToast } from '../notification-toast/NotificationToast';
import { TypeOptions, TypeOptionsBase } from '../notification-provider/NotificationProvider';

type TypeStyles = {
    box: TypeSSBox;
    base: TypeSSBase;
};

type NotificationPortalProps = {
    notifications: TypeOptions[];
    position: TBaseProps.NotificationPosition;
} & BaseProps;

type BaseProps = {
    zIndex?: number;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $position: TBaseProps.NotificationPosition;
    $zIndex?: number;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const POSITION = {
    [EBaseProps.NotificationPosition.BOTTOM_RIGHT]: css`
        bottom: 0;
        right: 0;
    `,
    [EBaseProps.NotificationPosition.BOTTOM_CENTER]: css`
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
    `,
    [EBaseProps.NotificationPosition.BOTTOM_LEFT]: css`
        bottom: 0;
        left: 0;
    `,
    [EBaseProps.NotificationPosition.CENTER_RIGHT]: css`
        bottom: 50%;
        right: 0;
        transform: translateY(50%);
    `,
    [EBaseProps.NotificationPosition.CENTER]: css`
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 0);
    `,
    [EBaseProps.NotificationPosition.CENTER_LEFT]: css`
        bottom: 50%;
        left: 0;
        transform: translateY(50%);
    `,
    [EBaseProps.NotificationPosition.TOP_RIGHT]: css`
        top: 0;
        right: 0;
    `,
    [EBaseProps.NotificationPosition.TOP_CENTER]: css`
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    `,
    [EBaseProps.NotificationPosition.TOP_LEFT]: css`
        top: 0;
        left: 0;
    `,
};

const SRoot = styled.div<SRootProps>`
    position: fixed;
    z-index: ${(props) => props.$zIndex ?? 100000};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ${(props) => POSITION[props.$position]};
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
`;

export const NotificationPortal: React.FC<NotificationPortalProps> = React.memo(
    ({
        notifications,
        position,
        boxPaddingVariant = EBoxProps.BoxPaddingVariant.P3,
        boxGapVariant = EBoxProps.BoxGapVariant.G2,
        zIndex,
        $styles,
        ...rest
    }) => {
        const styles = useStyleScheme(['box', 'base'], $styles);

        return ReactDOM.createPortal(
            <SRoot
                $position={position}
                $zIndex={zIndex}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $styles={styles}
                {...rest}
            >
                {notifications.map(({ type, id, position, content, ...notification }: TypeOptions) => {
                    switch (type) {
                        case 'base':
                            return (
                                <NotificationToast
                                    title={(notification as TypeOptionsBase)?.title}
                                    message={(notification as TypeOptionsBase)?.message}
                                    key={id}
                                    id={id as string}
                                    position={position}
                                    {...notification}
                                />
                            );
                        case 'custom':
                            return (
                                <div key={id} id={id} {...notification}>
                                    {content}
                                </div>
                            );
                    }
                })}
            </SRoot>,
            document.body
        );
    }
);

//export component
export const SNotificationPortal = {
    Root: SRoot,
};

//export type
export namespace TNotificationPortal {
    export type Base = BaseProps;
    export type Main = NotificationPortalProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
