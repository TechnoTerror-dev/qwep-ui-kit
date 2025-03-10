import { Icon } from '@src/lib';
import { TStickerConfig } from '../sticker-controller/StickerButton';

export const initConfigStickers: TStickerConfig[] = [
    {
        id: 'crown',
        isActive: true,
        icon: <Icon.AppFilled />,
    },
    {
        id: 'mask',
        title: 'Маска',
        isActive: true,
        icon: <Icon.AppFilled />,
    },
    {
        id: 'template',
        title: 'Шаблоны',
        isActive: false,
        icon: <Icon.Award />,
    },
    {
        id: 'article',
        title: 'Артикул',
        isActive: false,
        icon: <Icon.BaseCheck />,
    },
    {
        id: 'inStore',
        title: 'В наличии',
        isActive: false,
        icon: <Icon.Download />,
    },
    {
        id: 'dealers',
        title: 'Дилеры',
        isActive: false,
        icon: <Icon.Inbox />,
    },
    {
        id: 'crosses',
        title: 'Кроссы',
        isActive: false,
        icon: <Icon.More />,
    },
];
