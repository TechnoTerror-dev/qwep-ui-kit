import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseCheckbox, BaseText, BaseTitle, TypeCheckbox } from '@src/lib';

const meta = {
    title: 'Components/checkbox/BaseCheckbox',
    component: BaseCheckbox,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof BaseCheckbox>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeCheckbox.BaseCheckbox.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseCheckbox {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {},
};

export const ExampleBaseCheckbox = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseCheckbox colorVariant={'default'} />
            <BaseCheckbox colorVariant={'info'} />
            <BaseCheckbox colorVariant={'success'} />
            <BaseCheckbox colorVariant={'warning'} defaultChecked />
            <BaseCheckbox colorVariant={'error'} defaultChecked />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{ alignItems: 'center' }} boxGapVariant={'g-1'}>
            <BaseCheckbox colorVariant={'default'} blocked /> <BaseText>blocked</BaseText>
            <BaseCheckbox colorVariant={'info'} disabled defaultChecked /> <BaseText>disabled</BaseText>
            <BaseCheckbox colorVariant={'success'} sizeVariant={'M'} /> <BaseText>sizeVariant M</BaseText>
        </BaseBox>
    </BaseBox>
);
