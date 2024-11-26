import { Meta, StoryObj } from '@storybook/react';
import { SimplePopup, BaseButton, BaseBox, BaseTitle, TypePopup, Icon, BaseText } from '../../lib';

const meta = {
    title: 'Components/popup/SimplePopup',
    component: SimplePopup,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            // control: 'text',
            description: 'The icon of the popup',
        },
        title: {
            // control: 'text',
            description: 'The title of the popup',
        },
        trigger: {
            description: 'The element that triggers the popup',
        },
    },
} satisfies Meta<typeof SimplePopup>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypePopup.SimplePopup.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SimplePopup {...args}>content</SimplePopup>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        icon: <Icon.Award />,
        title: `Popup Title`,
        trigger: <BaseButton>SimplePopUp</BaseButton>,
    },
};

export const ExampleSimplePopup = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Examples of Popups
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <SimplePopup icon={<Icon.Award />} title={'Popup Title'} trigger={<BaseButton>SimplePopUp</BaseButton>}>
                    <BaseTitle>SimplePopUp</BaseTitle>
                    <BaseText>This is an informational.</BaseText>
                </SimplePopup>
            </BaseBox>
        </BaseBox>
    );
};
