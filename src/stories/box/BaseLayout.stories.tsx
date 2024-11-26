import { Meta, StoryObj } from '@storybook/react';
import { BaseLayout } from '../../lib';
import { TBaseLayout } from '../../lib/components/box/base-layout/BaseLayout';

const meta = {
    title: 'Components/box/BaseLayout',
    component: BaseLayout,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseLayout.Main) => {
    return (
        <BaseLayout
            style={{
                justifyContent: 'center',
                margin: '50px auto',
                backgroundColor: 'red',
                width: '300px',
                height: '300px',
            }}
            {...args}
        ></BaseLayout>
    );
};
export const Main: Story = {
    render: Template,
    args: {},
};

export const ExampleBaseLayout = () => {
    return <BaseLayout style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></BaseLayout>;
};
