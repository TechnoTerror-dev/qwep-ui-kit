import React, { useState } from 'react';
import { StickerButton, TStickerConfig } from './StickerButton';
import { styled } from 'styled-components';
import { Icon, Title } from '@src/lib';
import { FilterBarController } from '../type/controler.enum';
import { TypeGeneral } from '@src/lib/general';

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
    ({ id, generalTitle, isDefaultOpen = true, stickers, onChange }: TStickerController) => {
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
                            const { id: stickerId, title, icon } = sticker;
                            return (
                                <StickerButton
                                    id={stickerId}
                                    key={stickerId}
                                    icon={icon}
                                    title={title}
                                    isActive={stickerValues[stickerId]}
                                    onCheck={(newState) => handleStickerToggle(stickerId, newState)}
                                />
                            );
                        })}
                    </SContent>
                )}
            </SRoot>
        );
    }
);
