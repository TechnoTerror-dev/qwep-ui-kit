import { Icon } from '@src/lib';
import { FilterBar } from './FilterBar';
import { FilterBarController } from './type/controler.enum';

const initConfigStickers = [
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

export const ShowFilterBar = () => {
    const handleFilterChange = (data: Record<string, boolean>) => {
        console.log('Фильтры изменились:', data);
    };

    return (
        <div style={{ margin: '60px 0 0 50px', width: '100%' }}>
            <FilterBar
                controllers={[
                    {
                        id: 'sticker-controller',
                        controller: FilterBarController.Sticker,
                        generalTitle: 'ПОПУЛЯРНЫЕ ФИЛЬТРЫ',
                        stickers: initConfigStickers,
                        onChange: handleFilterChange,
                    },
                ]}
            />
        </div>
    );
};
