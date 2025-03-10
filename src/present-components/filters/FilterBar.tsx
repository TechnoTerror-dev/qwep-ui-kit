import { TypeGeneral, useColorScheme } from '@src/lib/general';
import React from 'react';
import { styled } from 'styled-components';
import { StickerController, TStickerControllerConfig } from './sticker-controller/StickerController';
import { ListController, TListControllerConfig } from './list-controller/ListController';
import { SliderController, TSliderController } from './slider-controller/SliderController';
import { FilterBarController } from './type/controler.enum';

export type TFilterBar = {
    controllers: (TStickerControllerConfig | TListControllerConfig | TSliderController)[];
};

type SRootProps = {
    $colors?: TypeGeneral.ColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    display: block;
    width: 264px;
    height: 100vh;
    background-color: ${(props) => props.$colors?.backgroundBox};
`;

export const FilterBar = React.memo(({ controllers }: TFilterBar) => {
    const colors = useColorScheme();
    return (
        <SRoot $colors={colors}>
            {controllers.map((item) => {
                switch (item.controller) {
                    case FilterBarController.List:
                        return <ListController key={item.id} colors={colors} {...item} />;
                    case FilterBarController.Sticker:
                        return <StickerController key={item.id} colors={colors} {...item} />;
                    case FilterBarController.Slider:
                        return <SliderController key={item.id} colors={colors} {...item} />;
                }
            })}
        </SRoot>
    );
});
