export * from './components/index';
export * as General from './general';
export * as Icon from './icons';

import { Copy } from './types/CopyType';
import { TVariantSizeAvatar, EVariantSizeAvatar } from './types/TypeAvatar';
import {
    EModalPosition,
    TVariantColor,
    TItemIconPosition,
    TMargin,
    TModalPosition,
    TVariantSize,
    EVariantColor,
    EVariantSize,
    EItemIconPosition,
    TOrientationContent,
    EOrientationContent,
    EVariantToast,
    ENotificationPosition,
    TNotificationPosition,
} from './types/TypeBase';
import {
    TBoxDisplay,
    TBoxGapVariant,
    TBoxPaddingVariant,
    TBoxRadiusVariant,
    TBoxShadowVariant,
    TBoxWidthVariant,
} from './types/TypeBox';
import { EBtnPosition, TBtnPosition, TVariantBtn, EVariantBtn } from './types/TypeBtn';
import { EPositionInpLabel, TInpVariant, TPositionInpLabel } from './types/TypeInp';
import { TTitleVariant } from './types/TypeText';

export namespace TPropsBase {
    export type Margin = Copy<TMargin>;
    export type ModalPosition = Copy<TModalPosition>;
    export type VariantSize = Copy<TVariantSize>;
    export type VariantColor = Copy<TVariantColor>;
    export type ItemIconPosition = Copy<TItemIconPosition>;
    export type OrientationContent = Copy<TOrientationContent>;
    export type NotificationPosition = Copy<TNotificationPosition>;
}

export namespace TPropsButton {
    export type VariantBtn = Copy<TVariantBtn>;
    export type BtnPosition = Copy<TBtnPosition>;
}

export namespace TPropsInput {
    export type VariantInp = Copy<TInpVariant>;
    export type PositionInpLabel = Copy<TPositionInpLabel>;
}

export namespace TPropsAvatar {
    export type VariantSizeAvatar = Copy<TVariantSizeAvatar>;
}

export namespace TPropsBox {
    export type BoxWidthVariant = Copy<TBoxWidthVariant>;
    export type BoxPaddingVariant = Copy<TBoxPaddingVariant>;
    export type BoxGapVariant = Copy<TBoxGapVariant>;
    export type BoxShadowVariant = Copy<TBoxShadowVariant>;
    export type BoxRadiusVariant = Copy<TBoxRadiusVariant>;
    export type BoxDisplay = Copy<TBoxDisplay>;
}

export namespace TPropsText {
    export type TitleVariant = Copy<TTitleVariant>;
}

export const EPropsBase = {
    ModalPosition: EModalPosition,
    VariantSize: EVariantSize,
    VariantColor: EVariantColor,
    ItemIconPosition: EItemIconPosition,
    OrientationContent: EOrientationContent,
    VariantToast: EVariantToast,
    NotificationPosition: ENotificationPosition,
};

export const EPropsButton = {
    VariantBtn: EVariantBtn,
    BtnPosition: EBtnPosition,
};

export const EPropsInput = {
    PositionInpLabel: EPositionInpLabel,
};

export const EPropsAvatar = {
    VariantSizeAvatar: EVariantSizeAvatar,
};
