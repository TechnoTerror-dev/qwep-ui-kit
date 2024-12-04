enum EPositionInpLabel {
    LEFT = 'left',
    TOP = 'top',
    RIGHT = 'right',
}

type TPositionInpLabel = 'top' | 'left' | 'right';

export const EInputProps = {
    PositionInpLabel: EPositionInpLabel,
};

export namespace TInputProps {
    export type PositionInpLabel = TPositionInpLabel;
}
