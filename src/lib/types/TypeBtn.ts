enum EVariantBtn {
    TEXT = 'text',
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
}
type TVariantBtn = 'text' | 'contained' | 'outlined';

enum EBtnPosition {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}
type TBtnPosition = 'left' | 'center' | 'right';

export const EButtonProps = {
    VariantBtn: EVariantBtn,
    BtnPosition: EBtnPosition,
};

export namespace TButtonProps {
    export type VariantBtn = TVariantBtn;
    export type BtnPosition = TBtnPosition;
}
