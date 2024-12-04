enum EIconPosition {
    LEFT = 'left',
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
}
type TIconPosition = 'left' | 'top' | 'right' | 'bottom';

export const EIconProps = {
    IconPosition: EIconPosition,
};

export namespace TIconProps {
    export type IconPosition = TIconPosition;
}
