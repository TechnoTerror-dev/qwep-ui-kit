import { Box, BoxLayout, Switch, Title } from '@src/lib';

export const ShowSwitch = () => {
    const switchHandler = (check: boolean) => {
        console.log('switch handler', check);
    };

    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowSwitch
            </Title>
            <BoxLayout>
                <Box boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <Switch onCheckedChange={switchHandler} />

                    <Switch defaultChecked />
                </Box>
                <Box mr={'mt-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <Switch onCheckedChange={switchHandler} sizeVariant={'M'} />

                    <Switch defaultChecked sizeVariant={'M'} />
                </Box>
            </BoxLayout>
        </>
    );
};
