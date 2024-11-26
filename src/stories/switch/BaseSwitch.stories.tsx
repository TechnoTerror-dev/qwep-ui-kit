import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseSwitch, BaseText, BaseTitle, TypeSwitch } from '@src/lib';

const meta = {
    title: 'Components/switch/BaseSwitch',
    component: BaseSwitch,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof BaseSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeSwitch.BaseSwitch.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseSwitch {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {},
};

export const ExampleBaseSwitch = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseSwitch colorVariant={'default'} />
            <BaseSwitch colorVariant={'info'} />
            <BaseSwitch colorVariant={'success'} />
            <BaseSwitch colorVariant={'warning'} defaultChecked />
            <BaseSwitch colorVariant={'error'} defaultChecked />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{ alignItems: 'center' }} boxGapVariant={'g-1'}>
            <BaseSwitch colorVariant={'default'} blocked /> <BaseText>blocked</BaseText>
            <BaseSwitch colorVariant={'info'} disabled defaultChecked /> <BaseText>disabled</BaseText>
            <BaseSwitch colorVariant={'success'} sizeVariant={'M'} /> <BaseText>sizeVariant M</BaseText>
        </BaseBox>
    </BaseBox>
);
