import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseSlider, BaseText, BaseTitle, TypeSlider } from '@src/lib';

const meta = {
    title: 'Components/slider/BaseSlider',
    component: BaseSlider,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof BaseSlider>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeSlider.BaseSlider.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseSlider {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        defaultValue: [50],
        max: 100,
        step: 1,
    },
};

export const ExampleBaseSlider = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseSlider colorVariant={'default'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'info'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'success'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'warning'} defaultValue={[50]} max={100} step={1} />
            <BaseSlider colorVariant={'error'} defaultValue={[50]} max={100} step={1} />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{ alignItems: 'center' }} boxGapVariant={'g-3'}>
            <BaseSlider colorVariant={'default'} blocked defaultValue={[50]} max={100} step={1} />{' '}
            <BaseText>blocked</BaseText>
            <BaseSlider colorVariant={'info'} disabled defaultValue={[50]} max={100} step={1} />{' '}
            <BaseText>disabled</BaseText>
            <BaseSlider defaultValue={[50]} max={100} step={1} colorVariant={'success'} sizeVariant={'M'} />{' '}
            <BaseText>sizeVariant M</BaseText>
            <BaseSlider
                orientation={'vertical'}
                defaultValue={[50]}
                max={100}
                step={1}
                colorVariant={'success'}
                sizeVariant={'M'}
            />{' '}
            <BaseText>orientation vertical</BaseText>
        </BaseBox>
    </BaseBox>
);
