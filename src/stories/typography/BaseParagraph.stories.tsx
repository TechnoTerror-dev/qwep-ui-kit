import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseParagraph } from '../../lib';
import { TBaseParagraph } from '../../lib/components/typography/base/BaseParagraph';

const meta = {
    title: 'Components/typography/BaseParagraph',
    component: BaseParagraph,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseParagraph.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseParagraph {...args}></BaseParagraph>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        children: 'Base Title',
    },
};

export const ExampleBaseParagraph = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseParagraph>Base Title</BaseParagraph>
        </BaseBox>
    );
};
