import { Meta, StoryObj } from '@storybook/react';
import { BaseContainer } from '../../lib';
import { TBaseContainer } from '../../lib/components/box/base-container/BaseContainer';

const meta = {
    title: 'Components/box/BaseContainer',
    component: BaseContainer,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseContainer.Main) => {
    return (
        <BaseContainer
            style={{
                justifyContent: 'center',
                margin: '50px auto',
            }}
            {...args}
        ></BaseContainer>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        bg: `#${'F2FFab'}`,
    },
};

export const ExampleBaseContainer = () => {
    return <BaseContainer style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></BaseContainer>;
};
