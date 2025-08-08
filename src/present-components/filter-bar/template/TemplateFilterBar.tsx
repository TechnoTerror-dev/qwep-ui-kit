import { FilterBar } from '../FilterBar';
import { FilterBarController } from '../type/controler.enum';

import { initConfigStickers } from './init-config-stickers';
import { initConfigBrandList } from './init-config-brand-list';
import { initConfigVendorList } from './init-config-vendor-list';
import { initConfigStoreList } from './init-config-store-list';

export const TemplateFilterBar = () => {
    const handleStickerChange = (data: Record<string, boolean>) => {
        console.log('handleStickerChange:', data);
    };

    const handleListBrandChange = (data: Record<string, boolean>) => {
        console.log('handleListBrandChange:', data);
    };
    const handleListVendorChange = (data: Record<string, boolean>) => {
        console.log('handleListVendorChange:', data);
    };

    const handleSliderPriceChange = (min: number, max: number) => {
        console.log('handleSliderPriceChange:', min, max);
    };

    const handleSliderTimeChange = (min: number, max: number) => {
        console.log('handleSliderTimeChange:', min, max);
    };

    const handleListStoreChange = (data: Record<string, boolean>) => {
        console.log('handleListStoreChange:', data);
    };

    return (
        <FilterBar
            controllers={[
                {
                    id: 'sticker-controller',
                    controller: FilterBarController.Sticker,
                    generalTitle: 'ПОПУЛЯРНЫЕ ФИЛЬТРЫ',
                    stickers: initConfigStickers,
                    onChange: handleStickerChange,
                },
                {
                    id: 'brands-controller',
                    controller: FilterBarController.List,
                    generalTitle: 'ПРОИЗВОДИТЕЛИ',
                    list: initConfigBrandList,
                    onChange: handleListBrandChange,
                },
                {
                    id: 'vendors-controller',
                    controller: FilterBarController.List,
                    generalTitle: 'ПОСТАВЩИКИ',
                    list: initConfigVendorList,
                    onChange: handleListVendorChange,
                },
                {
                    id: 'price-controller',
                    controller: FilterBarController.Slider,
                    generalTitle: 'ЦЕНА',
                    max: 100,
                    min: 0,
                    minPlaceholder: 'от',
                    maxPlaceholder: 'до',
                    onChange: handleSliderPriceChange,
                },
                {
                    id: 'price-controller',
                    controller: FilterBarController.Slider,
                    generalTitle: 'СРОК ПОСТАВКИ',
                    max: 100,
                    min: 0,
                    minPlaceholder: 'от',
                    maxPlaceholder: 'до',
                    onChange: handleSliderTimeChange,
                },
                {
                    id: 'store-controller',
                    controller: FilterBarController.List,
                    generalTitle: 'СКЛАДЫ',
                    list: initConfigStoreList,
                    isLargeList: true,
                    onChange: handleListStoreChange,
                    isCheckboxIndicator: true,
                },
            ]}
        />
    );
};
