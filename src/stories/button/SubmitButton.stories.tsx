import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseTitle, TypeButton, Icon, SubmitButton } from '@src/lib';

const meta = {
    title: 'Components/button/SubmitButton',
    component: SubmitButton,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof SubmitButton>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeButton.SubmitButton.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SubmitButton {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        children: 'Submit Button',
        icon: <Icon.BarChart />,
        isLoading: false,
    },
};

export const ExampleSubmitButton = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitButton isLoading={false} icon={<Icon.BarChart />} colorVariant={'default'}>
                Default
            </SubmitButton>
            <SubmitButton isLoading={true} icon={<Icon.BarChart />} colorVariant={'default'}>
                Loading
            </SubmitButton>
        </BaseBox>
    </BaseBox>
);
