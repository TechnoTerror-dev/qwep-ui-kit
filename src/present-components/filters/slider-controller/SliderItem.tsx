import { BaseTextField, Slider } from '@src/lib';
import React from 'react';
import { styled } from 'styled-components';

export type TSliderItem = {
    min: number;
    minPlaceholder: string;
    max: number;
    maxPlaceholder: string;
};

const SInputContent = styled.div`
    padding-top: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SliderItem = React.memo(({ min, max, minPlaceholder, maxPlaceholder }: TSliderItem) => {
    return (
        <>
            <Slider length={'100%'} sizeVariant={'M'} defaultValue={[min, max]} max={max} />
            <SInputContent>
                <BaseTextField placeholder={minPlaceholder} sizeVariant={'M'} />
                <BaseTextField placeholder={maxPlaceholder} sizeVariant={'M'} />
            </SInputContent>
        </>
    );
});
