import { Meta, StoryObj } from '@storybook/react';
import { BaseTabWrapper, BaseTab, BaseBox, BaseTabContent } from '../../lib';
import { TBaseTabWrapper } from '../../lib/components/tab/base-tab/BaseTabWrapper';

const meta = {
    title: 'Components/tab/BaseTabWrapper',
    component: BaseTabWrapper,
    tags: ['autodocs'],
    // argTypes: {
    //
    // },
} satisfies Meta<typeof BaseTabWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TBaseTabWrapper.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseBox style={{ paddingBottom: '300px' }}>
                <h2>BASE TAB</h2>

                <BaseTabWrapper {...args}>
                    <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                    <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                    <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
                </BaseTabWrapper>
            </BaseBox>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        defaultValue: 't-3',
        tabs: [
            <BaseTab key={1} value={'t-1'}>
                BaseTab_1
            </BaseTab>,
            <BaseTab key={2} value={'t-2'}>
                BaseTab_2
            </BaseTab>,
            <BaseTab key={3} value={'t-3'}>
                BaseTab_3
            </BaseTab>,
        ],
    },
};

export const ExampleBaseTabWrapper = () => {
    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <h2>BASE TAB vertical</h2>

            <BaseTabWrapper
                defaultValue={'t-3'}
                // orientation={'horizontal'}
                tabs={[
                    <BaseTab key={1} value={'t-1'}>
                        BaseTab_1
                    </BaseTab>,
                    <BaseTab key={2} value={'t-2'}>
                        BaseTab_2
                    </BaseTab>,
                    <BaseTab key={3} value={'t-3'} disabled>
                        BaseTab_3
                    </BaseTab>,
                ]}
            >
                <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
            </BaseTabWrapper>

            <h2 style={{ marginTop: '50px' }}>BASE TAB horizontal</h2>
            <BaseTabWrapper
                defaultValue={'t-4'}
                orientation={'horizontal'}
                tabs={[
                    <BaseTab key={1} value={'t-1'}>
                        BaseTab_1
                    </BaseTab>,
                    <BaseTab key={2} value={'t-2'}>
                        BaseTab_2
                    </BaseTab>,
                    <BaseTab key={3} value={'t-3'}>
                        BaseTab_3
                    </BaseTab>,
                    <BaseTab key={4} value={'t-4'} disabled>
                        BaseTab_4
                    </BaseTab>,
                ]}
            >
                <BaseTabContent value={'t-1'}>BaseTabContent_1</BaseTabContent>
                <BaseTabContent value={'t-2'}>BaseTabContent_2</BaseTabContent>
                <BaseTabContent value={'t-3'}>BaseTabContent_3</BaseTabContent>
                <BaseTabContent value={'t-4'}>BaseTabContent_4</BaseTabContent>
            </BaseTabWrapper>
        </BaseBox>
    );
};
