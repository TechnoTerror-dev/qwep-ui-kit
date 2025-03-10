import { BaseText, Box, Common, Icon, IconButton, MainTextField, PopupHover } from '@src/lib';

import React, { useEffect, useState } from 'react';
import { ListItem, TListItemConfig } from './ListItem';
import { styled } from 'styled-components';
import { TypeGeneral } from '@src/lib/general';

type TListPopup = {
    list: TListItemConfig[];
    listValues: Record<string, boolean>;
    trigger: React.ReactNode;
    colors: TypeGeneral.ColorScheme;
    handleStickerToggle: (itemId: string, isActive: boolean) => void;
    isCheckboxIndicator?: boolean;
};

type SContentHoverProps = {
    $colors: TypeGeneral.ColorScheme;
};
const SContentHover = styled.ul<SContentHoverProps>`
    position: relative;
    width: 300px;
    height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 8px;
    ${Common.StyledScrollbarItem}
`;

const SClear = styled(Icon.Close)`
    cursor: pointer;
`;

const SPanel = styled(Box)`
    justify-content: space-between;
    align-items: center;
`;

export const ListPopup = React.memo(
    ({ list, listValues, trigger, handleStickerToggle, isCheckboxIndicator, colors }: TListPopup) => {
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredList, setFilteredList] = useState(list);
        const [isSortA, setIsSortA] = useState(true);

        useEffect(() => {
            const lowerCasedQuery = searchQuery.toLowerCase();
            setFilteredList(list.filter(({ title }) => title.toLowerCase().includes(lowerCasedQuery)));
        }, [searchQuery, list]);

        const handleClear = () => {
            setFilteredList(list);
            setSearchQuery('');
        };

        const handleSort = () => {
            setIsSortA((prev) => {
                const newSortOrder = !prev;
                setFilteredList(
                    [...filteredList].sort((a, b) =>
                        newSortOrder ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
                    )
                );
                return newSortOrder;
            });
        };

        return (
            <PopupHover
                contentProps={{
                    side: 'right',
                    align: 'start',
                    sideOffset: 10,
                }}
                trigger={trigger}
                $colors={colors}
                boxPaddingVariant={'p-1'}
                boxRadiusVariant={'S'}
            >
                <MainTextField
                    rootProps={{
                        style: {
                            width: '100%',
                        },
                    }}
                    iconStart={<Icon.Search />}
                    iconsEnd={[<SClear key={'clear'} role="button" onClick={handleClear} />]}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <SPanel boxDisplay={'flex'} boxGapVariant={'g-1'} boxPaddingVariant={'p-3'}>
                    <Box boxDisplay={'grid'} boxGapVariant={'g-1'}>
                        <BaseText sizeVariant={'subtext'}>
                            Выбранные: {list.filter(({ id }) => listValues[id]).length}
                        </BaseText>
                        <BaseText color={colors.successItem} sizeVariant={'subtext'}>
                            Найдено: {filteredList.length}
                        </BaseText>
                    </Box>

                    <IconButton onClick={handleSort} variant={'text'} borderRadius={'round'}>
                        <Icon.Arrow position={isSortA ? 'top' : 'bottom'} />
                    </IconButton>
                </SPanel>

                <SContentHover $colors={colors}>
                    {filteredList.map(({ id: itemId, title, subTitle }: TListItemConfig) => {
                        return (
                            <ListItem
                                key={itemId}
                                id={itemId}
                                title={title}
                                subTitle={subTitle}
                                isActive={listValues[itemId]}
                                onCheck={(newState) => handleStickerToggle(itemId, newState)}
                                isPopup
                                isCheckboxIndicator={isCheckboxIndicator}
                            />
                        );
                    })}
                </SContentHover>
            </PopupHover>
        );
    }
);
