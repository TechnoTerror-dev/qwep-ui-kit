enum EBoxWidthVariant {
    FIT_CONTENT = 'fit-content',
    MAX = 'max',
    S = 'S',
    M = 'M',
    L = 'L',
}

enum EBoxPaddingVariant {
    P1 = 'p-1',
    P2 = 'p-2',
    P3 = 'p-3',
    P4 = 'p-4',
    P5 = 'p-5',
    P6 = 'p-6',
    Null = 'null',
}

enum EBoxGapVariant {
    G1 = 'g-1',
    G2 = 'g-2',
    G3 = 'g-3',
    G4 = 'g-4',
    G5 = 'g-5',
    G6 = 'g-6',
    Null = 'null',
}

enum EBoxShadowVariant {
    ShdS = 'S',
    ShdM = 'M',
    ShdL = 'L',
    Null = 'null',
}

enum EBoxRadiusVariant {
    BrS = 'S',
    BrM = 'M',
    BrL = 'L',
    Null = 'null',
}

enum EBoxDisplay {
    Flex = 'flex',
    InlineFlex = 'inline-flex',
    Grid = 'grid',
    InlineGrid = 'inline-grid',
    Block = 'block',
    InlineBlock = 'inline-block',
}
type TBoxWidthVariant = 'fit-content' | 'max' | 'S' | 'M' | 'L';

type TBoxPaddingVariant = 'p-1' | 'p-2' | 'p-3' | 'p-4' | 'p-5' | 'p-6' | 'null';
type TBoxGapVariant = 'g-1' | 'g-2' | 'g-3' | 'g-4' | 'g-5' | 'g-6' | 'null';

type TBoxShadowVariant = 'S' | 'M' | 'L' | 'null';
type TBoxRadiusVariant = 'S' | 'M' | 'L' | 'null';

type TBoxDisplay = 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'block' | 'inline-block';

export namespace TBoxProps {
    export type BoxWidthVariant = TBoxWidthVariant;
    export type BoxPaddingVariant = TBoxPaddingVariant;
    export type BoxGapVariant = TBoxGapVariant;
    export type BoxShadowVariant = TBoxShadowVariant;
    export type BoxRadiusVariant = TBoxRadiusVariant;
    export type BoxDisplay = TBoxDisplay;
}

export const EBoxProps = {
    BoxWidthVariant: EBoxWidthVariant,
    BoxPaddingVariant: EBoxPaddingVariant,
    BoxGapVariant: EBoxGapVariant,
    BoxShadowVariant: EBoxShadowVariant,
    BoxRadiusVariant: EBoxRadiusVariant,
    BoxDisplay: EBoxDisplay,
};
