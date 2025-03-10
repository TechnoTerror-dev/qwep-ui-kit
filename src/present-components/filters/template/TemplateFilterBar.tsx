import { FilterBar } from '../FilterBar';
import { FilterBarController } from '../type/controler.enum';
import { initConfigList } from './init-config-list';
import { initConfigStickers } from './init-config-stickers';

export const TemplateFilterBar = () => {
    const handleStickerFilterChange = (data: Record<string, boolean>) => {
        console.log('handleStickerFilterChange:', data);
    };

    const handleListFilterChange = (data: Record<string, boolean>) => {
        console.log('handleListFilterChange:', data);
    };

    const handleListFilterChange1 = (data: Record<string, boolean>) => {
        console.log('handleListFilterChange1:', data);
    };

    return (
        <FilterBar
            controllers={[
                {
                    id: 'sticker-controller',
                    controller: FilterBarController.Sticker,
                    generalTitle: 'ПОПУЛЯРНЫЕ ФИЛЬТРЫ',
                    stickers: initConfigStickers,
                    onChange: handleStickerFilterChange,
                },
                {
                    id: 'vendors-controller',
                    controller: FilterBarController.List,
                    generalTitle: 'ПРОИЗВОДИТЕЛИ',
                    list: initConfigList,
                    onChange: handleListFilterChange,
                    isCheckboxIndicator: true,
                },
                {
                    id: 'vendors-controller-1',
                    controller: FilterBarController.List,
                    generalTitle: 'ПРОИЗВОДИТЕЛИ_1',
                    list: initConfigList,
                    isLargeList: false,
                    onChange: handleListFilterChange1,
                },
            ]}
        />
    );
};
