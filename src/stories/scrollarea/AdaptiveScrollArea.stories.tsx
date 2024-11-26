import { Meta, StoryObj } from '@storybook/react';
import { AdaptiveScrollArea, BaseBox, BaseText, TypeScrollArea } from '../../lib';

const meta = {
    title: 'Components/scrollarea/AdaptiveScrollArea',
    component: AdaptiveScrollArea,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AdaptiveScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeScrollArea.AdaptiveScrollArea.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <AdaptiveScrollArea {...args}>
                <BaseText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                    laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum
                    atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa,
                    natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
                    earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
                    molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                    repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                    vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                    Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                    facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                    Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                    quaerat, vitae molestiae facilis. Culpa, natus.
                </BaseText>
            </AdaptiveScrollArea>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        size: {
            width: '500px',
            height: '200px',
        },
    },
};

export const ExampleAdaptiveScrollArea = () => {
    return (
        <BaseBox mr={'mt-3'}>
            <AdaptiveScrollArea
                size={{
                    width: '500px',
                    height: '200px',
                }}
                style={{ marginRight: '10px' }}
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum?
                Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
                facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed?
                Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
                quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam
                laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
                repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque
                vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
                corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
                Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
                aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat,
                vitae molestiae facilis. Culpa, natus.
            </AdaptiveScrollArea>
        </BaseBox>
    );
};
