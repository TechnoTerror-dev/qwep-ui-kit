import { Box, BoxLayout, Button, CardBox, MainTextField, Separator, Title, Tooltip, WrapperInput } from '@src/lib';

export const ShowTooltip = () => {
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowTooltip
            </Title>
            <BoxLayout>
                <Box boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <Tooltip tooltip={'Show Bottom'}>
                        <Button>Bottom</Button>
                    </Tooltip>
                    <Tooltip side={'top'} tooltip={'Show Top'}>
                        <Button>Top</Button>
                    </Tooltip>
                    <Tooltip side={'left'} tooltip={'Show Left'}>
                        <Button>Left</Button>
                    </Tooltip>
                    <Tooltip side={'right'} tooltip={'Show Right'}>
                        <Button>Right</Button>
                    </Tooltip>
                </Box>
                <Separator mr={'my-9'} />
                <Box boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <Tooltip sideOffset={30} tooltip={'SideOffset = 50'}>
                        <Button>SideOffset</Button>
                    </Tooltip>
                    <Tooltip rootProps={{ delayDuration: 0 }} tooltip={'DelayDuration = 0'}>
                        <Button>DelayDuration</Button>
                    </Tooltip>
                    <Tooltip
                        isCustom
                        tooltip={
                            <CardBox
                                isBlur
                                boxPaddingVariant={'p-3'}
                                boxDisplay={'grid'}
                                boxGapVariant={'g-3'}
                                boxRadiusVariant={'M'}
                                boxShadowVariant={'M'}
                            >
                                <WrapperInput positionLabel={'top'} id={'1'} label={'Tooltip'}>
                                    <MainTextField placeholder={'Tooltip'} />
                                </WrapperInput>
                                <WrapperInput positionLabel={'top'} id={'2'} label={'Tooltip'}>
                                    <MainTextField placeholder={'Tooltip'} />
                                </WrapperInput>
                            </CardBox>
                        }
                    >
                        <Button>Custom</Button>
                    </Tooltip>
                </Box>
            </BoxLayout>
        </>
    );
};
