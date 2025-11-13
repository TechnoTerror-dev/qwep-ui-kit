import { Icon, Title } from '@src/lib';
import { TypeGeneral } from '@src/lib/general';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterBarController } from '../type/controler.enum';
import { SliderItem, TSliderItem } from './SliderItem';

export type TSliderControllerConfig = {
    id: string;
    controller: FilterBarController.Slider;
    generalTitle: string;
    isDefaultOpen?: boolean;
} & TSliderItem;

type TSliderController = {
    colors: TypeGeneral.ColorScheme;
} & TSliderControllerConfig;

const SRoot = styled.div`
    display: block;
    width: 100%;
    height: fit-content;
`;

const SContent = styled.ul`
    position: relative;
    overflow: hidden;
    padding: 3px 12px 0px 12px;
    animation: Show_open 300ms ease-in-out;
    @keyframes Show_open {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;

const SContentTitle = styled.div`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
`;

export const SliderController = React.memo(
    ({
        id,
        generalTitle,
        isDefaultOpen = true,
        min,
        max,
        minPlaceholder,
        maxPlaceholder,
        onChange,
    }: TSliderController) => {
        const [isOpen, setIsOpen] = useState(isDefaultOpen);
        return (
            <SRoot id={id}>
                <SContentTitle role="button" onClick={() => setIsOpen(!isOpen)}>
                    <Title sizeVariant="S">{generalTitle}</Title>
                    <Icon.Arrow position={isOpen ? 'top' : 'bottom'} />
                </SContentTitle>
                {isOpen && (
                    <SContent>
                        <SliderItem
                            min={min}
                            max={max}
                            minPlaceholder={minPlaceholder}
                            maxPlaceholder={maxPlaceholder}
                            onChange={onChange}
                        />
                    </SContent>
                )}
            </SRoot>
        );
    }
);
