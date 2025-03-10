import { Paragraph } from '@src/lib';
import { TypeGeneral, useColorScheme } from '@src/lib/general';
import React from 'react';
import { css, styled } from 'styled-components';

export type TListItem = {
    id: string;
    title: string;
    description?: React.ReactNode;
    isActive?: boolean;
};

type SRootProps = {
    $colors: TypeGeneral.ColorScheme;
    $isActive: boolean;
};

const SIndicator = styled.div`
    position: relative;
    max-width: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    border: 1px solid;
    margin-right: 6px;
`;

const STitleContent = styled.div`
    max-width: 100%;
    width: 70%;
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
    ${SIndicator} {
        border-color: ${(props) => props.$colors.lightElem};
        ${(props) => {
            if (props.$isActive) {
                return css`
                    border-color: ${props.$colors.primary};
                    &::before {
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
                `;
            }
        }}
    }
`;

export const ListItem = React.memo(({ title, description, isActive = false, ...props }: TListItem) => {
    const colors = useColorScheme();

    return (
        <SRoot $colors={colors} $isActive={isActive} {...props}>
            <STitleContent>
                <SIndicator />
                <Paragraph isEllipsis>{title}</Paragraph>
            </STitleContent>
            <Paragraph color={colors.successItem}>{description}</Paragraph>
        </SRoot>
    );
});
