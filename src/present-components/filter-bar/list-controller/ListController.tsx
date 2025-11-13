import { BaseText, Common, Icon, Title } from '@src/lib';
import { TypeGeneral } from '@src/lib/general';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FilterBarController } from '../type/controler.enum';
import { ListItem, TListItemConfig } from './ListItem';
import { ListPopup } from './ListPopup';

export type TListControllerConfig = {
    id: string;
    controller: FilterBarController.List;
    generalTitle: React.ReactNode;
    isDefaultOpen?: boolean;
    list: TListItemConfig[];
    isCount?: boolean;
    isScroll?: boolean;
    isLargeList?: boolean;
    maxHeight?: string;
    isCheckboxIndicator?: boolean;
    onChange: (updatedValues: Record<string, boolean>) => void;
};

type TListController = {
    colors: TypeGeneral.ColorScheme;
} & TListControllerConfig;

const SRoot = styled.div`
    display: block;
    width: 100%;
    height: fit-content;
`;

type SContentProps = {
    $colors: TypeGeneral.ColorScheme;
    $maxHeight?: string;
};

const SContent = styled.ul<SContentProps>`
    position: relative;
    overflow-x: hidden;
    width: 240px;
    height: ${(props) => props.$maxHeight ?? '240px'};
    padding: 0 12px;
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
    ${Common.StyledScrollbarItem}
`;

const SContentTitle = styled.div`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
`;

const SCount = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    user-select: none;
    gap: 5px;
`;

export const ListController = React.memo(
    ({
        id,
        generalTitle,
        isDefaultOpen = true,
        isCount = true,
        isLargeList = true,
        maxHeight,
        list,
        onChange,
        colors,
        isCheckboxIndicator,
    }: TListController) => {
        const [isOpen, setIsOpen] = useState(isDefaultOpen);
        const sortedList = useMemo(() => [...list].sort((a, b) => a.title.localeCompare(b.title)), [list]);
        const [listValues, setListValues] = useState(
            sortedList.reduce(
                (acc, item) => {
                    acc[item.id] = item.isActive;
                    return acc;
                },
                {} as Record<string, boolean>
            )
        );

        const handleStickerToggle = (itemId: string, isActive: boolean) => {
            setListValues((prev) => {
                const updatedValues = {
                    ...prev,
                    [itemId]: isActive,
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
                    {isCount && (
                        <SCount>
                            <Icon.Sum sizeVariant={'M'} color={colors.successItem} />
                            <BaseText color={colors.successItem}>{sortedList.length}</BaseText>
                        </SCount>
                    )}
                    <Icon.Arrow position={isOpen ? 'top' : 'bottom'} />
                </SContentTitle>

                {isOpen &&
                    (isLargeList ? (
                        <ListPopup
                            list={sortedList}
                            listValues={listValues}
                            handleStickerToggle={handleStickerToggle}
                            isCheckboxIndicator={isCheckboxIndicator}
                            colors={colors}
                            trigger={
                                <SContent $colors={colors} $maxHeight={maxHeight}>
                                    {sortedList.map(({ id: itemId, title, subTitle, ...props }: TListItemConfig) => {
                                        return (
                                            <ListItem
                                                key={itemId}
                                                id={itemId}
                                                title={title}
                                                subTitle={subTitle}
                                                onCheck={(newState) => handleStickerToggle(itemId, newState)}
                                                isCheckboxIndicator={isCheckboxIndicator}
                                                {...props}
                                                isActive={listValues[itemId]}
                                            />
                                        );
                                    })}
                                </SContent>
                            }
                        />
                    ) : (
                        <SContent $colors={colors} $maxHeight={maxHeight}>
                            {sortedList.map(({ id: itemId, title, subTitle, ...props }: TListItemConfig) => {
                                return (
                                    <ListItem
                                        key={itemId}
                                        id={itemId}
                                        title={title}
                                        subTitle={subTitle}
                                        onCheck={(newState) => handleStickerToggle(itemId, newState)}
                                        isCheckboxIndicator={isCheckboxIndicator}
                                        {...props}
                                        isActive={listValues[itemId]}
                                    />
                                );
                            })}
                        </SContent>
                    ))}
            </SRoot>
        );
    }
);
