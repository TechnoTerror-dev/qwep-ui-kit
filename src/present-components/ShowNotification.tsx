import {
    Box,
    BoxLayout,
    Button,
    EBaseProps,
    Select,
    SelectItem,
    TBaseProps,
    Title,
    useNotificationContext,
} from '@src/lib';
import { useState } from 'react';

export const ShowNotification = () => {
    const { alert } = useNotificationContext();
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
            duration: 3000,
            position: value,
            type: 'base',
            portalProps: {
                boxGapVariant: 'g-2',
                boxPaddingVariant: 'p-5',
            },
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
            </BoxLayout>
        </>
    );
};
