import { Meta, StoryObj } from '@storybook/react';
import { MainContainer } from '../../lib';
import { TMainContainer } from '../../lib/components/box/base-container/MainContainer';

const meta = {
    title: 'Components/box/MainContainer',
    component: MainContainer,
    tags: ['autodocs'],
} satisfies Meta<typeof MainContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TMainContainer.Main) => {
    return (
        <MainContainer
            style={{
                justifyContent: 'center',
                margin: '50px auto',
            }}
            {...args}
        ></MainContainer>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        bg: `#${'F2FFab'}`,
    },
};

export const ExampleMainContainer = () => {
    return <MainContainer style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></MainContainer>;
};
