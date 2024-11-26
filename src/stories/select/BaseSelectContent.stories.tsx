import { Meta, StoryObj } from '@storybook/react';
import { BaseSelectContent, BaseBox, BaseTitle, TypeSelect, BaseSelectItem, BaseSelectGroup } from '../../lib';

const meta = {
    title: 'Components/select/BaseSelectContent',
    component: BaseSelectContent,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseSelectContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeSelect.BaseSelectContent.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', gap: '50px', margin: '50px auto' }}>
            <BaseSelectContent {...args}>
                <BaseSelectItem value={'1'}>1 item</BaseSelectItem>
                <BaseSelectItem value={'2'}>2 item</BaseSelectItem>
                <BaseSelectItem value={'3'}>3 item</BaseSelectItem>
                <BaseSelectItem value={'4'}>4 item</BaseSelectItem>
                <BaseSelectItem value={'5'}>5 item</BaseSelectItem>
            </BaseSelectContent>
            <BaseSelectContent {...args} placeholder={'Select with groups'}>
                <BaseSelectGroup>
                    <BaseSelectItem value={'1'}>1 item</BaseSelectItem>
                    <BaseSelectItem value={'2'}>2 item</BaseSelectItem>
                    <BaseSelectItem value={'3'}>3 item</BaseSelectItem>
                    <BaseSelectItem value={'4'}>4 item</BaseSelectItem>
                    <BaseSelectItem value={'5'}>5 item</BaseSelectItem>
                </BaseSelectGroup>
                <BaseSelectGroup>
                    <BaseSelectItem value={'6'}>6 item</BaseSelectItem>
                    <BaseSelectItem value={'7'}>7 item</BaseSelectItem>
                    <BaseSelectItem value={'8'}>8 item</BaseSelectItem>
                    <BaseSelectItem value={'9'}>9 item</BaseSelectItem>
                    <BaseSelectItem value={'10'}>10 item</BaseSelectItem>
                </BaseSelectGroup>
                <BaseSelectGroup>
                    <BaseSelectItem value={'11'}>11 item</BaseSelectItem>
                    <BaseSelectItem value={'12'}>12 item</BaseSelectItem>
                    <BaseSelectItem value={'13'}>13 item</BaseSelectItem>
                    <BaseSelectItem value={'14'}>14 item</BaseSelectItem>
                    <BaseSelectItem value={'15'}>15 item</BaseSelectItem>
                </BaseSelectGroup>
            </BaseSelectContent>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        placeholder: 'Default select',
    },
};

export const ExampleBaseSelectContent = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <BaseTitle as={'h4'} mr={'mb-3'}>
                Examples of Selects
            </BaseTitle>
            <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
                <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', gap: '50px', margin: '50px auto' }}>
                    <BaseSelectContent placeholder={'Base select'}>
                        <BaseSelectItem value={'1'}>1 item</BaseSelectItem>
                        <BaseSelectItem value={'2'}>2 item</BaseSelectItem>
                        <BaseSelectItem value={'3'}>3 item</BaseSelectItem>
                        <BaseSelectItem value={'4'}>4 item</BaseSelectItem>
                        <BaseSelectItem value={'5'}>5 item</BaseSelectItem>
                    </BaseSelectContent>
                    <BaseSelectContent placeholder={'Select with groups'}>
                        <BaseSelectGroup>
                            <BaseSelectItem value={'1'}>1 item</BaseSelectItem>
                            <BaseSelectItem value={'2'}>2 item</BaseSelectItem>
                            <BaseSelectItem value={'3'}>3 item</BaseSelectItem>
                            <BaseSelectItem value={'4'}>4 item</BaseSelectItem>
                            <BaseSelectItem value={'5'}>5 item</BaseSelectItem>
                        </BaseSelectGroup>
                        <BaseSelectGroup>
                            <BaseSelectItem value={'6'}>6 item</BaseSelectItem>
                            <BaseSelectItem value={'7'}>7 item</BaseSelectItem>
                            <BaseSelectItem value={'8'}>8 item</BaseSelectItem>
                            <BaseSelectItem value={'9'}>9 item</BaseSelectItem>
                            <BaseSelectItem value={'10'}>10 item</BaseSelectItem>
                        </BaseSelectGroup>
                        <BaseSelectGroup>
                            <BaseSelectItem value={'11'}>11 item</BaseSelectItem>
                            <BaseSelectItem value={'12'}>12 item</BaseSelectItem>
                            <BaseSelectItem value={'13'}>13 item</BaseSelectItem>
                            <BaseSelectItem value={'14'}>14 item</BaseSelectItem>
                            <BaseSelectItem value={'15'}>15 item</BaseSelectItem>
                        </BaseSelectGroup>
                    </BaseSelectContent>
                </BaseBox>
            </BaseBox>
        </BaseBox>
    );
};
