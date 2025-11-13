import { BaseTextField, Slider } from '@src/lib';
import React from 'react';
import styled from 'styled-components';

export type TSliderItem = {
    min: number;
    minPlaceholder: string;
    max: number;
    maxPlaceholder: string;
    onChange: (min: number, max: number) => void;
};

const SInputContent = styled.div`
    padding-top: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SliderItem = React.memo(({ min, max, minPlaceholder, maxPlaceholder, onChange }: TSliderItem) => {
    const [values, setValues] = React.useState<[number, number]>([min, max]);

    const updateValues = (newValues: [number, number]) => {
        setValues(newValues);
        onChange(newValues[0], newValues[1]);
    };

    const handleSliderChange = (newValues: [number, number]) => {
        const updatedValues: [number, number] = [
            Math.max(min, Math.min(newValues[0], max)),
            Math.max(min, Math.min(newValues[1], max)),
        ];
        updateValues(updatedValues);
    };

    const handleInputChange = (index: 0 | 1, value: string) => {
        let numValue = value === '' ? 0 : parseFloat(value);
        numValue = Math.max(min, Math.min(numValue, max));

        setValues((prev) => {
            const newValues: [number, number] = [...prev] as [number, number];
            newValues[index] = numValue;
            updateValues(newValues);
            return newValues;
        });
    };

    return (
        <>
            <Slider
                length={'100%'}
                sizeVariant={'M'}
                defaultValue={[min, max]}
                value={values}
                max={max}
                onValueChange={handleSliderChange}
            />
            <SInputContent>
                <BaseTextField
                    placeholder={minPlaceholder}
                    sizeVariant={'M'}
                    value={values[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                />
                <BaseTextField
                    placeholder={maxPlaceholder}
                    sizeVariant={'M'}
                    value={values[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                />
            </SInputContent>
        </>
    );
});
