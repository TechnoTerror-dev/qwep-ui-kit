import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, SubmitSwitch, BaseTitle, TypeSwitch } from '@src/lib';

const meta = {
    title: 'Components/switch/SubmitSwitch',
    component: SubmitSwitch,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof SubmitSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeSwitch.SubmitSwitch.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SubmitSwitch {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        isLoading: false,
    },
};
export const ExampleSubmitSwitch = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitSwitch isLoading={false} colorVariant={'default'} />
            <SubmitSwitch isLoading={true} colorVariant={'info'} />
        </BaseBox>
    </BaseBox>
);
