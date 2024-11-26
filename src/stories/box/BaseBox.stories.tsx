import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, TypeBox } from '../../lib';

const meta = {
    title: 'Components/box/BaseBox',
    component: BaseBox,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeBox.BaseBox.Main) => {
    return (
        <BaseBox
            boxDisplay="flex"
            style={{
                justifyContent: 'center',
                margin: '50px auto',
                backgroundColor: 'red',
            }}
            {...args}
        ></BaseBox>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        boxWidthVariant: 'w-5',
        boxPaddingVariant: 'p-5',
    },
};

export const ExampleBaseBox = () => {
    return <BaseBox style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></BaseBox>;
};
