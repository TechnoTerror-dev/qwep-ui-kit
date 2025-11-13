import { Icon, Title } from '@src/lib';
import { TypeGeneral } from '@src/lib/general';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterBarController } from '../type/controler.enum';
import { StickerButton, TStickerConfig } from './StickerButton';

export type TStickerControllerConfig = {
    id: string;
    controller: FilterBarController.Sticker;
    generalTitle: React.ReactNode;
    isDefaultOpen?: boolean;
    stickers: TStickerConfig[];
    onChange: (updatedValues: Record<string, boolean>) => void;
};

type TStickerController = {
    colors: TypeGeneral.ColorScheme;
} & TStickerControllerConfig;

const SRoot = styled.div`
    display: block;
    width: 100%;
    height: fit-content;
`;

const SContent = styled.div`
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    padding: 0 12px;
    gap: 12px;
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

export const StickerController = React.memo(
    ({ id, generalTitle, isDefaultOpen = true, stickers, onChange, colors }: TStickerController) => {
        const [isOpen, setIsOpen] = useState(isDefaultOpen);
        const [stickerValues, setStickerValues] = useState(
            stickers.reduce(
                (acc, sticker) => {
                    acc[sticker.id] = sticker.isActive;
                    return acc;
                },
                {} as Record<string, boolean>
            )
        );

        const handleStickerToggle = (stickerId: string, isActive: boolean) => {
            setStickerValues((prev) => {
                const updatedValues = {
                    ...prev,
                    [stickerId]: isActive,
                };
                if (onChange) {
                    onChange(updatedValues);
                }
                return updatedValues;
            });
        };

        return (
            <SRoot id={id}>
                <SContentTitle role="button" onClick={() => setIsOpen(!isOpen)}>
                    <Title sizeVariant="S">{generalTitle}</Title>
                    <Icon.Arrow position={isOpen ? 'top' : 'bottom'} />
                </SContentTitle>
                {isOpen && (
                    <SContent>
                        {stickers.map((sticker) => {
                            const { id: stickerId, title, icon, ...props } = sticker;
                            return (
                                <StickerButton
                                    id={stickerId}
                                    key={stickerId}
                                    icon={icon}
                                    title={title}
                                    onCheck={(newState) => handleStickerToggle(stickerId, newState)}
                                    colors={colors}
                                    {...props}
                                    isActive={stickerValues[stickerId]}
                                />
                            );
                        })}
                    </SContent>
                )}
            </SRoot>
        );
    }
);
