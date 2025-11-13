import {
    Box,
    BoxLayout,
    Button,
    CardBox,
    EBaseProps,
    Select,
    SelectItem,
    TBaseProps,
    Title,
    useNotificationContext,
} from '@src/lib';
import { useState } from 'react';
import styled from 'styled-components';

const CustomNotification = styled(CardBox)`
    position: fixed;
    top: 50%;
    transform: translateX(-50%);
    background-color: #4a9b62;
    width: 250px;
`;

export const ShowNotification = () => {
    const { alert, onCloseHandler } = useNotificationContext();

    const [color, setColor] = useState<TBaseProps.VariantToast>(EBaseProps.VariantToast.ERROR);
    const positions = Object.values(EBaseProps.NotificationPosition);
    const colorVariants = Object.values(EBaseProps.VariantToast);

    const changeColor = (e: TBaseProps.VariantToast) => {
        setColor(e);
    };

    const show = (value: TBaseProps.NotificationPosition) => {
        alert({
            title: 'Alert',
            message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eveniet placeat modi eligendi temporibus`,
            variant: color,
            duration: 30000,
            position: value,
            type: 'base',
            isBlur: true,
            portalProps: {
                boxGapVariant: 'g-2',
                boxPaddingVariant: 'p-5',
            },
        });
    };

    const customShow = () => {
        alert({
            duration: 3000,
            id: 'custom_notification',
            position: EBaseProps.NotificationPosition.TOP_CENTER,
            type: 'custom',
            content: (
                <CustomNotification boxPaddingVariant={'p-3'} boxRadiusVariant={'M'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas repellat neque sunt culpa
                    officiis, aut illo. Quas quae, mollitia magni debitis odit maiores quis eum fugit iure molestias
                    laudantium!
                    <Button
                        mr={'mt-3'}
                        onClick={() =>
                            onCloseHandler('custom_notification', EBaseProps.NotificationPosition.TOP_CENTER)
                        }
                    >
                        Close
                    </Button>
                </CustomNotification>
            ),
        });
    };

    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowNotification
            </Title>
            <BoxLayout
                wrapperProps={{
                    style: {
                        height: '700px',
                    },
                }}
            >
                <Select defaultValue={color} mr={'mb-4'} onValueChange={changeColor}>
                    {colorVariants.map((item) => {
                        return (
                            <SelectItem value={item} key={item}>
                                {item}
                            </SelectItem>
                        );
                    })}
                </Select>
                <Box boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    {positions.map((item) => {
                        return (
                            <Button onClick={() => show(item)} key={item}>
                                {item}
                            </Button>
                        );
                    })}
                </Box>
                <Button mr={'mt-3'} onClick={() => customShow()}>
                    Custom
                </Button>
            </BoxLayout>
        </>
    );
};
