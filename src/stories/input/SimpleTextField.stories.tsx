import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, SimpleTextField, BaseTitle, TypeInput, Icon } from '@src/lib';
import { useState } from 'react';

const meta = {
    title: 'Components/input/SimpleTextField',
    component: SimpleTextField,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof SimpleTextField>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeInput.SimpleTextField.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SimpleTextField {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        placeholder: 'Simple text field',
        icon: <Icon.Search />,
    },
};

export const ExampleSimpleTextField = () => {
    const [open, setOpen] = useState(false);
    return (
        <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Position icon
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SimpleTextField icon={<Icon.Search />} colorVariant={'default'} placeholder={'Default'} />
                <SimpleTextField
                    colorVariant={'success'}
                    icon={<Icon.Search />}
                    iconPosition={'right'}
                    placeholder={'Right'}
                />
            </BaseBox>
            <BaseTitle as={'h4'} mr={'my-3'}>
                Icon button
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SimpleTextField
                    colorVariant={'default'}
                    defaultValue={'Password'}
                    iconPosition={'right'}
                    type={open ? 'text' : 'password'}
                    iconOnClick={() => setOpen(!open)}
                    icon={open ? <Icon.Eye /> : <Icon.EyeClose />}
                    placeholder={'Password'}
                />
            </BaseBox>
        </BaseBox>
    );
};
