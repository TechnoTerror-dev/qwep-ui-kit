import { Paragraph, Tooltip } from '@src/lib';
import { TypeGeneral, useColorScheme } from '@src/lib/general';
import React from 'react';
import { css, styled } from 'styled-components';

export type TListItemConfig = {
    id: string;
    title: string;
    subTitle?: React.ReactNode;
    isActive: boolean;
} & React.LiHTMLAttributes<HTMLLIElement>;

export type TListItem = {
    onCheck: (value: boolean) => void;
    isPopup?: boolean;
    isCheckboxIndicator?: boolean;
} & TListItemConfig;

type SRootProps = {
    $colors: TypeGeneral.ColorScheme;
    $isActive: boolean;
};

type SIndicatorProps = {
    $colors: TypeGeneral.ColorScheme;
    $isActive: boolean;
    $isCheckboxIndicator?: boolean;
};

const SIndicator = styled.div<SIndicatorProps>`
    position: relative;
    max-width: 20px;
    min-width: 20px;
    min-height: 20px;
    margin-right: 6px;
    border: 1px solid ${(props) => props.$colors.lightElem};
    ${(props) => {
        if (props.$isCheckboxIndicator) {
            return css`
                border-radius: 4px;
                ${props.$isActive &&
                css`
                    border-color: ${props.$colors.primary};
                    &:before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 12px;
                        height: 12px;
                        display: block;
                        display: block;
                        background-color: ${props.$colors.primary};
                        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' fill='none' stroke='black' stroke-width='1.5'%3E%3Cpath d='M2 7l4 4 7-7'/%3E%3C/svg%3E");
                        mask-size: contain;
                        mask-repeat: no-repeat;
                        mask-position: center;
                        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' fill='none' stroke='black' stroke-width='1.5'%3E%3Cpath d='M2 7l4 4 7-7'/%3E%3C/svg%3E");
                        -webkit-mask-size: contain;
                        -webkit-mask-repeat: no-repeat;
                        -webkit-mask-position: center;
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                `}
            `;
        }
        return css`
            border-radius: 50%;
            border-color: ${props.$colors.lightElem};
            ${props.$isActive &&
            css`
                border-color: ${props.$colors.primary};
                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    width: 10px;
                    height: 10px;
                    background-color: ${props.$colors.primary};
                }
            `}
        `;
    }}
`;

const STitleContent = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
`;

const SRoot = styled.li<SRootProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    padding: 6px 0;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    &:hover {
        ${SIndicator} {
            transition: all 0.3s ease-in-out;
            border-color: ${(props) => props.$colors.primary};
        }
    }
`;

export const ListItem = React.memo(
    ({ title, subTitle, isActive = false, isPopup, isCheckboxIndicator, onCheck, ...props }: TListItem) => {
        const colors = useColorScheme();
        const maxLenTitle = isPopup ? 26 : 24;
        const tooltipWidth = isPopup ? '200px' : '170px';

        return (
            <SRoot $colors={colors} $isActive={isActive} onClick={() => onCheck(!isActive)} {...props}>
                <STitleContent>
                    <SIndicator $colors={colors} $isActive={isActive} $isCheckboxIndicator={isCheckboxIndicator} />

                    {title.length > maxLenTitle ? (
                        <Tooltip tooltip={title} triggerProps={{ style: { width: tooltipWidth } }}>
                            <Paragraph isEllipsis>{title}</Paragraph>
                        </Tooltip>
                    ) : (
                        <Paragraph isEllipsis>{title}</Paragraph>
                    )}
                </STitleContent>
                <Paragraph color={colors.successItem}>{subTitle}</Paragraph>
            </SRoot>
        );
    }
);
