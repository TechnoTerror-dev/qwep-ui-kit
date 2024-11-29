import { BasePopup, Box, BoxLayout, CardBox, MainButton, Paragraph, Popup, Separator, Title } from '@src/lib';

export const ShowPopup = () => {
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowPopup
            </Title>
            <BoxLayout>
                <Box boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <BasePopup trigger={<MainButton>Show Base Popup</MainButton>}>
                        <CardBox
                            boxShadowVariant={'shd-2'}
                            boxGapVariant={'g-2'}
                            boxDisplay={'grid'}
                            boxPaddingVariant={'p-3'}
                            boxRadiusVariant={'br-2'}
                        >
                            <Title mr={'mb-2'}>Popup Title</Title>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                        </CardBox>
                    </BasePopup>
                    <Popup trigger={<MainButton>Show Popup</MainButton>}>
                        <Title mr={'mb-2'}>Popup Title</Title>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
                    </Popup>
                </Box>

                <Separator mr={'my-9'} />
            </BoxLayout>
        </>
    );
};
