import { Meta, StoryObj } from '@storybook/react';
import { BaseAvatar, BaseBox } from '../../lib';
import { TBaseAvatar } from '../../lib/components/avatar/base-avatar/BaseAvatar';

const meta = {
    title: 'Components/avatar/BaseAvatar',
    component: BaseAvatar,
    tags: ['autodocs'],
} satisfies Meta<typeof BaseAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseAvatar.Main) => {
    return (
        <BaseBox style={{ display: 'flex', justifyContent: 'center', margin: '50px auto' }}>
            <BaseAvatar {...args} />
        </BaseBox>
    );
};
export const Main: Story = {
    render: Template,
    args: {
        src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
        alt: 'avatar',
        sizeVariant: 'large',
    },
};

export const ExampleBaseAvatar = () => {
    return (
        <BaseAvatar
            src={'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'}
            alt={'avatar'}
            mr={'m-3'}
            style={{ width: '200px', height: '200px' }}
        />
    );
};
