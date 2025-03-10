import React from 'react';
import { styled } from 'styled-components';
import { Icon, PopupHover, Title } from '@src/lib';
import { ListItem, TListItem } from './ListItem';
import { FilterBarController } from '../type/controler.enum';

export type TListController = {
    id: string;
    controller: FilterBarController.List;
    generalTitle: React.ReactNode;
    isOpen?: boolean;
    list: TListItem[];
    onOpen?: (isOpen: boolean) => void;
    subTitle?: React.ReactNode;
};

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
`;

const SContentHover = styled.ul`
    position: relative;
    width: 300px;
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 12px;
`;

const SContentTitle = styled.div`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
`;

export const ListController = React.memo(
    ({ id, generalTitle, isOpen = true, onOpen, subTitle, list }: TListController) => {
        return (
            <SRoot>
                <SContentTitle role={'button'} onClick={() => onOpen && onOpen(!isOpen)}>
                    <Title sizeVariant={'S'}>{generalTitle}</Title>
                    {subTitle}
                    <Icon.Arrow position={isOpen ? 'top' : 'bottom'} />
                </SContentTitle>
                {isOpen && (
                    <PopupHover
                        contentProps={{
                            side: 'right',
                        }}
                        bgStyles={{
                            isBlur: true,
                            isHoverBlur: true,
                            backgroundOpacity: 'ac',
                        }}
                        trigger={
                            <SContent>
                                {list.map(({ title, isActive, ...itemProps }: TListItem) => {
                                    return <ListItem key={id} title={title} isActive={isActive} {...itemProps} />;
                                })}
                            </SContent>
                        }
                    >
                        <SContentHover>
                            {list.map(({ title, isActive, ...itemProps }: TListItem) => {
                                return <ListItem key={id} title={title} isActive={isActive} {...itemProps} />;
                            })}
                        </SContentHover>
                    </PopupHover>
                )}
            </SRoot>
        );
    }
);

// <Box
//     boxDisplay={'flex'}
//     mr={'mb-2'}
//     style={{ alignItems: 'center', justifyContent: 'space-between' }}
// >
//     <Title mr={'mb-2'}>Popup Title</Title>
//     <ClosePopupButton>
//         <IconButton
//             borderRadius={'round'}
//             colorVariant={'error'}
//             sizeVariant={'M'}
//             onClick={() => console.log('close popup')}
//         >
//             <Icon.Close />
//         </IconButton>
//     </ClosePopupButton>
// </Box>
// <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
// <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
// </PopupHover>
