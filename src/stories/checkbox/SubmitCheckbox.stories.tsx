import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, SubmitCheckbox, BaseTitle, TypeCheckbox } from '@src/lib';

const meta = {
    title: 'Components/checkbox/SubmitCheckbox',
    component: SubmitCheckbox,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof SubmitCheckbox>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeCheckbox.SubmitCheckbox.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SubmitCheckbox {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: { isLoading: false },
};

export const ExampleSubmitCheckbox = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitCheckbox isLoading={false} colorVariant={'default'} />
            <SubmitCheckbox isLoading={true} colorVariant={'info'} />
        </BaseBox>
    </BaseBox>
);
