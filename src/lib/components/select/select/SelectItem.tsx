import React from 'react';
import styled from 'styled-components';
import * as S from '@radix-ui/react-select';
import { BaseCheck } from '@src/lib/icons';
import { BaseCheckProps } from '@src/lib/icons/BaseCheck.tsx';
import { SSelectComponent, TSelectComponent } from './SelectComponent';

type SelectItemProps = {
    indicatorProps?: React.ComponentPropsWithRef<typeof S.ItemIndicator>;
    iconProps?: BaseCheckProps;
    itemTextProps?: React.ComponentPropsWithRef<typeof S.ItemText>;
} & TSelectComponent.SItem;

const SRoot = styled(SSelectComponent.Item)`
    padding: 6px 20px 6px 20px;
    border-radius: 4px;
`;

const SIndicator = styled(S.ItemIndicator)<React.ComponentPropsWithRef<typeof S.ItemIndicator>>`
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    svg {
        min-width: 10px;
        min-height: 10px;
        width: 10px;
        height: 10px;
    }
`;

const SelectItemRef: React.ForwardRefRenderFunction<HTMLDivElement, SelectItemProps> = (
    { indicatorProps, iconProps, itemTextProps, ...rest },
    ref
) => {
    return (
        <SRoot ref={ref} {...rest}>
            <SIndicator {...indicatorProps}>
                <BaseCheck {...iconProps} />
            </SIndicator>
            <S.ItemText {...itemTextProps}>{rest.children}</S.ItemText>
        </SRoot>
    );
};

export const SelectItem = React.forwardRef(SelectItemRef);

//export component
export const SSelectItem = {
    Item: SRoot,
    Indicator: SIndicator,
};

//export type
export namespace TSelectItem {
    export type Main = SelectItemProps;
}
