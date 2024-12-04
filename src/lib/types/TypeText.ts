enum ETitleVariant {
    L = 'L',
    M = 'M',
    S = 'S',
}

type TTitleVariant = 'L' | 'M' | 'S';

enum ETextVariant {
    TEXT = 'text',
    SUBTEXT = 'subtext',
}

type TTextVariant = 'text' | 'subtext';

export const ETextProps = {
    TitleVariant: ETitleVariant,
    TextVariant: ETextVariant,
};

export namespace TTextProps {
    export type TitleVariant = TTitleVariant;
    export type TextVariant = TTextVariant;
}
