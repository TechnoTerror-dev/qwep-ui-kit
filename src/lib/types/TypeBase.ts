export type TMargin =
    | 'm-1'
    | 'm-2'
    | 'm-3'
    | 'm-4'
    | 'm-5'
    | 'm-6'
    | 'm-7'
    | 'm-8'
    | 'm-9'
    | 'm-10'
    | 'm-11'
    | 'm-12'
    | 'mt-1'
    | 'mt-2'
    | 'mt-3'
    | 'mt-4'
    | 'mt-5'
    | 'mt-6'
    | 'mt-7'
    | 'mt-8'
    | 'mt-9'
    | 'mt-10'
    | 'mt-11'
    | 'mt-12'
    | 'mb-1'
    | 'mb-2'
    | 'mb-3'
    | 'mb-4'
    | 'mb-5'
    | 'mb-6'
    | 'mb-7'
    | 'mb-8'
    | 'mb-9'
    | 'mb-10'
    | 'mb-11'
    | 'mb-12'
    | 'ml-1'
    | 'ml-2'
    | 'ml-3'
    | 'ml-4'
    | 'ml-5'
    | 'ml-6'
    | 'ml-7'
    | 'ml-8'
    | 'ml-9'
    | 'ml-10'
    | 'ml-11'
    | 'ml-12'
    | 'mr-1'
    | 'mr-2'
    | 'mr-3'
    | 'mr-4'
    | 'mr-5'
    | 'mr-6'
    | 'mr-7'
    | 'mr-8'
    | 'mr-9'
    | 'mr-10'
    | 'mr-11'
    | 'mr-12'
    | 'mx-1'
    | 'mx-2'
    | 'mx-3'
    | 'mx-4'
    | 'mx-5'
    | 'mx-6'
    | 'mx-7'
    | 'mx-8'
    | 'mx-9'
    | 'mx-10'
    | 'mx-11'
    | 'mx-12'
    | 'my-1'
    | 'my-2'
    | 'my-3'
    | 'my-4'
    | 'my-5'
    | 'my-6'
    | 'my-7'
    | 'my-8'
    | 'my-9'
    | 'my-10'
    | 'my-11'
    | 'my-12';

export enum EModalPosition {
    BOTTOM = 'bottom',
    TOP = 'top',
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export type TModalPosition = 'bottom' | 'top' | 'right' | 'left' | 'center';

export enum EVariantSize {
    M = 'M',
    L = 'L',
}
export type TVariantSize = 'M' | 'L';

export enum EVariantColor {
    ERROR = 'error',
    INFO = 'info',
    WARNING = 'warning',
    SUCCESS = 'success',
    DEFAULT = 'default',
}
export type TVariantColor = 'error' | 'info' | 'warning' | 'success' | 'default';

export enum EItemIconPosition {
    RIGHT = 'right',
    LEFT = 'left',
}

export type TItemIconPosition = 'right' | 'left';

export enum EOrientationContent {
    VERTICAL = 'vertical',
    HORIZONTAL = 'horizontal',
}

export type TOrientationContent = 'vertical' | 'horizontal';

///
export enum EVariantToast {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
    SUCCESS = 'success',
}

export type TVariantToast = 'info' | 'warning' | 'error' | 'success';

export enum ENotificationPosition {
    BOTTOM_LEFT = 'bottom_left',
    BOTTOM_CENTER = 'bottom_center',
    BOTTOM_RIGHT = 'bottom_right',
    CENTER_LEFT = 'center_left',
    CENTER = 'center',
    CENTER_RIGHT = 'center_right',
    TOP_LEFT = 'top_left',
    TOP_CENTER = 'top_center',
    TOP_RIGHT = 'top_right',
}

export type TNotificationPosition =
    | 'bottom_left'
    | 'bottom_center'
    | 'bottom_right'
    | 'top_left'
    | 'top_center'
    | 'top_right'
    | 'center'
    | 'center_left'
    | 'center_right';
