import { Meta, StoryObj } from '@storybook/react';
import { BaseBox, BaseScrollArea, BaseText, BaseTitle, TypeScrollArea } from '../../lib';

const meta = {
    title: 'Components/scrollarea/BaseScrollArea',
    component: BaseScrollArea,
    tags: ['autodocs'],
    // argTypes: {
    //
    // },
} satisfies Meta<typeof BaseScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TypeScrollArea.BaseScrollArea.Main) => {
    return (
        <BaseBox boxDisplay="flex" style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseScrollArea {...args}>
                <BaseTitle style={{ textWrap: 'nowrap' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam molestiae eaque aut tempore
                    aliquam libero id esse quia non, suscipit repellat repellendus sit nam praesentium porro ducimus
                    rem. Repudiandae.
                </BaseTitle>
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
            </BaseScrollArea>
        </BaseBox>
    );
};

export const Main: Story = {
    render: Template,
    args: {
        width: '400px',
        height: '200px',
    },
};

export const ExampleBaseScrollArea = () => {
    return (
        <BaseScrollArea style={{ width: '400px', height: '200px' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
            corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
            Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
            earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
            facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
            aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
            molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in
            sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
            quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
            repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente,
            ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero
            sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti
            illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
            corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
            Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
            earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
            facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
            aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
            molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in
            sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
            quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
            repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente,
            ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero
            sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti
            illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
            corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
            Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
            earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
            facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
            aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
            molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in
            sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
            quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
            repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente,
            ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero
            sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti
            illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore
            corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae facilis.
            Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima, aperiam
            earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae molestiae
            facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in sed? Minima,
            aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem quaerat, vitae
            molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in
            sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum repellendus quidem
            quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente, ipsam laborum
            repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laudantium, in sed? Minima, aperiam earum? Dolore corrupti illum atque vero sapiente,
            ipsam laborum repellendus quidem quaerat, vitae molestiae facilis. Culpa, natus.
        </BaseScrollArea>
    );
};
