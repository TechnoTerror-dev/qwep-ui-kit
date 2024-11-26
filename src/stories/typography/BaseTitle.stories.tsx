import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseTitle } from '../../lib';
import { TBaseTitle } from '../../lib/components/typography/base/BaseTitle';

const meta = {
    title: 'Components/typography/BaseTitle',
    component: BaseTitle,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseTitle.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseTitle {...args}></BaseTitle>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        children: 'Base Title',
    },
};

export const ExampleBaseTitle = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseTitle>Base Title</BaseTitle>
        </BaseBox>
    );
};
