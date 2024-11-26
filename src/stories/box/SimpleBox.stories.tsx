import { Meta, StoryObj } from '@storybook/react';
import { SimpleBox } from '../../lib';
import { TSimpleBox } from '../../lib/components/box/simple-box/SimpleBox';

const meta = {
    title: 'Components/box/SimpleBox',
    component: SimpleBox,
    tags: ['autodocs'],
} satisfies Meta<typeof SimpleBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TSimpleBox.Main) => {
    return (
        <SimpleBox
            boxDisplay="flex"
            style={{
                justifyContent: 'center',
                margin: '50px auto',
                // backgroundColor: 'red',
                width: '300px',
                height: '300px',
            }}
            {...args}
        ></SimpleBox>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        bg: `#${'ff22aa'}`,
        boxBorderColor: `#${'22aaff'}`,
        boxShadowColor: `#${'22aaff'}`,
        boxShadowVariant: 'shd-3',
        boxRadiusVariant: 'br-3',
    },
};

export const ExampleSimpleBox = () => {
    return (
        <SimpleBox
            boxDisplay="flex"
            style={{
                justifyContent: 'center',
                margin: '50px auto',
                // backgroundColor: 'red',
                width: '300px',
                height: '300px',
            }}
            bg={`#${'ff22aa'}`}
            boxBorderColor={`#${'22aaff'}`}
            boxShadowColor={`#${'22aaff'}`}
            boxShadowVariant={'shd-3'}
            boxRadiusVariant={'br-3'}
        ></SimpleBox>
    );
};
