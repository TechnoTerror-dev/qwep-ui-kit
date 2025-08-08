import { Icon } from '@src/lib';
import { TStickerConfig } from '../sticker-controller/StickerButton';

export const initConfigStickers: TStickerConfig[] = [
    {
        id: 'crown',
        isActive: true,
        icon: <Icon.Crown />,
    },
    {
        id: 'mask',
        title: 'Маска',
        isActive: true,
        icon: <Icon.ArrowLeftRight />,
    },
    {
        id: 'template',
        title: 'Шаблоны',
        isActive: false,
        icon: <Icon.BookMark />,
    },
    {
        id: 'article',
        title: 'Артикул',
        isActive: false,
        icon: <Icon.HashTag />,
    },
    {
        id: 'inStore',
        title: 'В наличии',
        isActive: false,
        icon: <Icon.House />,
    },
    {
        id: 'dealers',
        title: 'Дилеры',
        isActive: false,
        icon: <Icon.Check />,
    },
    {
        id: 'crosses',
        title: 'Кроссы',
        isActive: false,
        icon: <Icon.Check />,
    },
];
