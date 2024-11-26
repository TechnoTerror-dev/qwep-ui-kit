import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseText } from '../../lib';
import { TBaseText } from '../../lib/components/typography/base/BaseText';

const meta = {
    title: 'Components/typography/BaseText',
    component: BaseText,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseText>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseText.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseText {...args}></BaseText>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        children: 'Base Text',
    },
};

export const ExampleBaseText = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseText>Base Text</BaseText>
        </BaseBox>
    );
};
