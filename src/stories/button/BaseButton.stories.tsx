import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseButton, BaseTitle, TypeButton } from '../../lib';

const meta = {
    title: 'Components/Button/BaseButton',
    component: BaseButton,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof BaseButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeButton.BaseButton.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseButton {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        children: 'Base Button',
    },
};

export const ExampleBaseButton = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseButton colorVariant={'default'}>Default</BaseButton>
            <BaseButton colorVariant={'info'}>Info</BaseButton>
            <BaseButton colorVariant={'success'}>Success</BaseButton>
            <BaseButton colorVariant={'warning'}>Warning</BaseButton>
            <BaseButton colorVariant={'error'}>Error</BaseButton>
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            Variant
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseButton variant={'contained'}>Contained</BaseButton>
            <BaseButton variant={'outlined'}>Outlined</BaseButton>
            <BaseButton variant={'text'}>Text</BaseButton>
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseButton disabled>Disabled</BaseButton>
            <BaseButton blocked>Blocked</BaseButton>
            <BaseButton sizeVariant={'M'}>sizeVariant M</BaseButton>
        </BaseBox>
    </BaseBox>
);
