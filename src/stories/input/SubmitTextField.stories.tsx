import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, SubmitTextField, BaseTitle, TypeInput, Icon } from '@src/lib';

const meta = {
    title: 'Components/input/SubmitTextField',
    component: SubmitTextField,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof SubmitTextField>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeInput.SubmitTextField.Main) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SubmitTextField {...args} />
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        placeholder: 'Submit text field',
        icon: <Icon.Search />,
        isLoading: false,
    },
};

export const ExampleSubmitTextField = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Loading
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SubmitTextField
                    isLoading={false}
                    icon={<Icon.Search />}
                    colorVariant={'default'}
                    placeholder={'Default'}
                />
                <SubmitTextField isLoading={true} icon={<Icon.Search />} placeholder={'Loading'} />
            </BaseBox>
        </BaseBox>
    );
};
