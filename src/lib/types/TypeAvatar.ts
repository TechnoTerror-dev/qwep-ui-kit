enum EVariantSizeAvatar {
    S = 'S',
    M = 'M',
    L = 'L',
}
type TVariantSizeAvatar = 'S' | 'M' | 'L';

export const EAvatarProps = {
    VariantSizeAvatar: EVariantSizeAvatar,
};

export namespace TAvatarProps {
    export type VariantSizeAvatar = TVariantSizeAvatar;
}
