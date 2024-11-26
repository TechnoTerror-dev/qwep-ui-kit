import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseTooltip, SimpleButton } from '../../lib';
import { TBaseTooltip } from '../../lib/components/tooltip/base-tooltip/BaseTooltip';

const meta = {
    title: 'Components/tooltip/BaseTooltip',
    component: BaseTooltip,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseTooltip.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseTooltip {...args}>
                <SimpleButton>Point at me</SimpleButton>
            </BaseTooltip>
        </BaseBox>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        tooltip: 'Here is the BaseTooltip',
    },
};

export const ExampleBaseTooltip = () => {
    return (
        <BaseTooltip mr={'m-3'} side={'top'} tooltip={'Top Tooltip'}>
            <SimpleButton>Point at me</SimpleButton>
        </BaseTooltip>
    );
};
