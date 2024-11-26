import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, SimpleButton, SimpleTooltip } from '../../lib';
import { TSimpleTooltip } from '../../lib/components/tooltip/simple-tooltip/SimpleTooltip';

const meta = {
    title: 'Components/tooltip/SimpleTooltip',
    component: SimpleTooltip,
    tags: ['autodocs'],
} satisfies Meta<typeof SimpleTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TSimpleTooltip.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SimpleTooltip {...args}>
                <SimpleButton>Point at me</SimpleButton>
            </SimpleTooltip>
        </BaseBox>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        tooltip: 'Here is the SimpleTooltip',
    },
};

export const ExampleSimpleTooltip = () => {
    return (
        <SimpleTooltip mr={'m-3'} side={'top'} tooltip={'Top Tooltip'}>
            <SimpleButton>Top Tooltip</SimpleButton>
        </SimpleTooltip>
    );
};
