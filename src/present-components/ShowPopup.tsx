import {
    BasePopup,
    Box,
    BoxLayout,
    CardBox,
    ClosePopupButton,
    Icon,
    IconButton,
    MainButton,
    Paragraph,
    Popup,
    PopupHover,
    Separator,
    Title,
} from '@src/lib';

export const ShowPopup = () => {
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowPopup
            </Title>
            <BoxLayout isBlur>
                <Box boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <BasePopup trigger={<MainButton>Show Base Popup</MainButton>}>
                        <CardBox
                            isBlur
                            boxShadowVariant={'M'}
                            boxGapVariant={'g-2'}
                            boxDisplay={'grid'}
                            boxPaddingVariant={'p-3'}
                            boxRadiusVariant={'M'}
                        >
                            <Box boxDisplay={'flex'} style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                <Title mr={'mb-2'}>Popup Title</Title>
                                <ClosePopupButton>
                                    <IconButton
                                        borderRadius={'round'}
                                        colorVariant={'error'}
                                        sizeVariant={'M'}
                                        onClick={() => console.log('close popup')}
                                    >
                                        <Icon.Close />
                                    </IconButton>
                                </ClosePopupButton>
                            </Box>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                        </CardBox>
                    </BasePopup>
                    <Popup trigger={<MainButton>Show Popup</MainButton>}>
                        <Box
                            boxDisplay={'flex'}
                            mr={'mb-2'}
                            style={{ alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Title>Popup Title</Title>
                            <ClosePopupButton>
                                <IconButton
                                    borderRadius={'round'}
                                    colorVariant={'error'}
                                    sizeVariant={'M'}
                                    onClick={() => console.log('close popup')}
                                >
                                    <Icon.Close />
                                </IconButton>
                            </ClosePopupButton>
                        </Box>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                    </Popup>
                </Box>

                <Separator mr={'my-9'} />
                <Box boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <PopupHover isBlur trigger={<MainButton>Show Hover Popup</MainButton>}>
                        <Box
                            boxDisplay={'flex'}
                            mr={'mb-2'}
                            style={{ alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Title mr={'mb-2'}>Popup Title</Title>
                            <ClosePopupButton>
                                <IconButton
                                    borderRadius={'round'}
                                    colorVariant={'error'}
                                    sizeVariant={'M'}
                                    onClick={() => console.log('close popup')}
                                >
                                    <Icon.Close />
                                </IconButton>
                            </ClosePopupButton>
                        </Box>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                    </PopupHover>
                </Box>

                <CardBox>
                    <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                    <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                </CardBox>
            </BoxLayout>
        </>
    );
};
