import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseTextarea, BaseTitle, TypeInput } from '@src/lib';

const meta = {
    title: 'Components/input/BaseTextarea',
    component: BaseTextarea,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof BaseTextarea>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeInput.BaseTextarea.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseTextarea {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: { placeholder: 'Base textarea' },
};

export const ExampleBaseTextarea = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Color
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <BaseTextarea colorVariant={'default'} placeholder={'Default'} />
            <BaseTextarea colorVariant={'info'} placeholder={'Info'} />
            <BaseTextarea colorVariant={'success'} placeholder={'Success'} />
            <BaseTextarea colorVariant={'warning'} placeholder={'Warning'} />
            <BaseTextarea colorVariant={'error'} placeholder={'Error'} />
        </BaseBox>
        <BaseTitle as={'h4'} mr={'my-3'}>
            State
        </BaseTitle>
        <BaseBox boxDisplay="flex" style={{ alignItems: 'start' }} boxGapVariant={'g-1'}>
            <BaseTextarea colorVariant={'default'} blocked placeholder={'Blocked'} />
            <BaseTextarea colorVariant={'info'} disabled placeholder={'Disabled'} />
            <BaseTextarea
                colorVariant={'success'}
                sizeVariant={'M'}
                defaultValue={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias aliquam. Consequuntur aperiam dolores repellendus repudiandae aliquam possimus tempora quidem beatae, quam ullam consectetur odio quis, quasi veritatis dolorem hic!'
                }
                placeholder={'SizeVariant M'}
            />
            <BaseTextarea colorVariant={'success'} rows={5} placeholder={'5 rows'} />
        </BaseBox>
    </BaseBox>
);
