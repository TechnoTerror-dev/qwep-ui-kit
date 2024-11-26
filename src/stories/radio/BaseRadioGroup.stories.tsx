import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseRadioGroup, BaseRadioItem, TypeRadio, WrapperInput } from '@src/lib';
import { TPositionInpLabel } from '@src/lib/types/TypeInp';
import { TVariantColor, TVariantSize, EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';

interface RadioGroupArgs extends TypeRadio.BaseRadioGroup.Main {
    activeValue?: string;
    disabled?: boolean;
    positionLabel: TPositionInpLabel;
    colorVariant: TVariantColor;
    sizeVariant: TVariantSize;
}

const meta = {
    title: 'Components/radio/BaseRadioGroup',
    component: BaseRadioGroup,

    tags: ['autodocs'],
    argTypes: {
        activeValue: {
            control: 'text',
            description: 'Value of the selected radio button',
        },
        labelColor: { control: 'color' },
        colorVariant: {
            control: 'select',
            options: Object.values(EVariantColor),
        },
        sizeVariant: {
            control: 'select',
            options: Object.values(EVariantSize),
        },
    },
} satisfies Meta<RadioGroupArgs>;
export default meta;
type Story = StoryObj<RadioGroupArgs>;

// Шаблон для Story
const Template = (args: RadioGroupArgs) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseRadioGroup {...args}>
                {[1, 2, 3, 4].map((num) => (
                    <WrapperInput
                        key={num}
                        positionLabel={args.positionLabel}
                        id={`${num}`}
                        label={`BaseRadioItem ${num}`}
                    >
                        <BaseRadioItem
                            id={`${num}`}
                            colorVariant={args.colorVariant}
                            sizeVariant={args.sizeVariant}
                            value={`${num}`}
                        />
                    </WrapperInput>
                ))}
            </BaseRadioGroup>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        positionLabel: 'right',
        colorVariant: 'default',
        sizeVariant: 'M',
        label: 'Default',
        activeValue: '1',
    },
};

export const ExampleBaseRadioGroup = () => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseRadioGroup>
                {[1, 2, 3, 4].map((num) => (
                    <WrapperInput key={num} label={`BaseRadioItem ${num}`} positionLabel={'right'}>
                        <BaseRadioItem value={`${num}`} />
                    </WrapperInput>
                ))}
            </BaseRadioGroup>
        </BaseBox>
    );
};
