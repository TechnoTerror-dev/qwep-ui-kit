import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseDialog, SimpleButton, SimpleTextField } from '../../lib';
import { TBaseDialog } from '../../lib/components/dialog/base-dialog/BaseDialog';
import { useState } from 'react';

const meta = {
    title: 'Components/dialog/BaseDialog',
    component: BaseDialog,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
            description: 'State that open dialog',
        },
        defaultOpen: {
            control: 'boolean',
            description: 'Value that open dialog as default',
        },
        onOpenChange: {
            description: 'Setter state that make dialog close',
        },
    },
} satisfies Meta<typeof BaseDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseDialog.Main) => {
    const [open1, setOpen1] = useState(false);
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SimpleButton mr={'m-3'} onClick={() => setOpen1(!open1)}>
                Default Dialog
            </SimpleButton>
            <BaseDialog {...args} open={open1} onOpenChange={setOpen1}>
                <SimpleTextField placeholder={'Placeholder 1'} />
                <SimpleTextField placeholder={'Placeholder 2'} />
                <SimpleButton colorVariant={'error'} onClick={() => setOpen1(false)}>
                    Close
                </SimpleButton>
            </BaseDialog>
        </BaseBox>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        boxGapVariant: 'g-1',
        boxPaddingVariant: 'p-5',
        boxWidthVariant: 'w-5',
        boxRadiusVariant: 'br-3',
        boxShadowVariant: 'shd-3',
        boxShadowColor: '#ff00007d',
        boxBorderColor: '#000000',
        bg: '#9ef1b7',
        overlayBlur: '5px',
        overlayColor: '#e4eb8c',
    },
};

export const ExampleBaseDialog = () => {
    const [open2, setOpen2] = useState(false);
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SimpleButton mr={'m-3'} onClick={() => setOpen2(!open2)}>
                Default Dialog
            </SimpleButton>
            <BaseDialog open={open2} onOpenChange={setOpen2} boxGapVariant={'g-2'}>
                <SimpleTextField placeholder={'Placeholder 1'} />
                <SimpleTextField placeholder={'Placeholder 2'} />
                <SimpleButton colorVariant={'error'} onClick={() => setOpen2(false)}>
                    Close
                </SimpleButton>
            </BaseDialog>
        </BaseBox>
    );
};
