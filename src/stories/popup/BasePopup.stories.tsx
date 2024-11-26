import { Meta, StoryObj } from '@storybook/react';
import { BasePopup, BaseButton, BaseBox, BaseTitle, TypePopup } from '../../lib';

const meta = {
    title: 'Components/popup/BasePopup',
    component: BasePopup,
    tags: ['autodocs'],
    argTypes: {
        trigger: {
            description: 'The element that triggers the popup',
        },
    },
} satisfies Meta<typeof BasePopup>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypePopup.BasePopup.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BasePopup {...args}>content</BasePopup>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        trigger: <BaseButton>PopUp</BaseButton>,
    },
};

export const ExampleBasePopup = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Examples of Popups
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <BasePopup trigger={<BaseButton>Info Popup</BaseButton>}>
                    <BaseTitle>BasePopup</BaseTitle>
                    This is an informational.
                </BasePopup>
            </BaseBox>
        </BaseBox>
    );
};
