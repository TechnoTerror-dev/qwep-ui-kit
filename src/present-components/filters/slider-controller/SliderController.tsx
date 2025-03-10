import React from 'react';
import { styled } from 'styled-components';
import { Icon, Title } from '@src/lib';
import { SliderItem, TSliderItem } from './SliderItem';
import { FilterBarController } from '../type/controler.enum';

export type TSliderController = {
    id: string;
    controller: FilterBarController.Slider;
    generalTitle: string;
    isOpen?: boolean;
    onOpen?: (isOpen: boolean) => void;
} & TSliderItem;

const SRoot = styled.div`
    display: block;
    width: 100%;
    height: fit-content;
`;

const SContent = styled.ul`
    position: relative;
    width: 240px;
    overflow: hidden;
    height: 240px;
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
    ({ id, generalTitle, isOpen = true, onOpen, min, max, minPlaceholder, maxPlaceholder }: TSliderController) => {
        return (
            <SRoot id={id}>
                <SContentTitle role={'button'} onClick={() => onOpen && onOpen(!isOpen)}>
                    <Title sizeVariant={'S'}>{generalTitle}</Title>
                    <Icon.Arrow position={isOpen ? 'top' : 'bottom'} />
                </SContentTitle>
                {isOpen && (
                    <SContent>
                        <SliderItem
                            min={min}
                            max={max}
                            minPlaceholder={minPlaceholder}
                            maxPlaceholder={maxPlaceholder}
                        />
                    </SContent>
                )}
            </SRoot>
        );
    }
);
