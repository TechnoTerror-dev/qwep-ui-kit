import { Meta, StoryObj } from '@storybook/react';
import { BaseMenuGroup, BaseMenuItem } from '../../lib';
import { TBaseMenuGroup } from '../../lib/components/box/base-menu/BaseMenuGroup';

const meta = {
    title: 'Components/box/BaseMenuGroup',
    component: BaseMenuGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseMenuGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseMenuGroup.Main) => {
    return (
        <BaseMenuGroup {...args}>
            <BaseMenuItem value={'1'}>item 1</BaseMenuItem>
            <BaseMenuItem value={'2'}>item 2</BaseMenuItem>
            <BaseMenuItem value={'3'}>item 3</BaseMenuItem>
        </BaseMenuGroup>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        mr: 'm-5',
        itemSizeVariant: 'M',
        itemTextColorActive: '#ff0000',
        itemOpacityActive: '40',
        itemOpacityHover: '20',
    },
};

export const ExampleBaseMenuGroup = () => {
    return (
        <BaseMenuGroup
            mr={'m-5'}
            itemSizeVariant={'M'}
            itemTextColorActive={'#ff0000'}
            itemOpacityActive={'40'}
            itemOpacityHover={'20'}
        >
            <BaseMenuItem value={'1'}>item 1</BaseMenuItem>
            <BaseMenuItem value={'2'}>item 2</BaseMenuItem>
            <BaseMenuItem value={'3'}>item 3</BaseMenuItem>
        </BaseMenuGroup>
    );
};
