import { Box, BoxLayout, Button, Dialog, Icon, IconButton, Paragraph, Title } from '@src/lib';

const SHeader = styled(Box)`
    align-items: center;
    justify-content: space-between;
`;

import { useState } from 'react';
import { styled } from 'styled-components';

export const ShowDialog = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowDialog
            </Title>
            <BoxLayout>
                <Box boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <Button onClick={() => setOpen(true)}>Open Modal</Button>

                    <Dialog boxDisplay={'grid'} open={open} onOpenChange={setOpen} boxGapVariant={'g-3'}>
                        <SHeader boxDisplay={'flex'}>
                            <Title>Modal</Title>
                            <IconButton onClick={() => setOpen(false)} borderRadius={'round'} colorVariant={'error'}>
                                <Icon.Close />
                            </IconButton>
                        </SHeader>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                        <Paragraph sizeVariant={'subtext'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies
                            vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla facilisi. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Sed vel ante id ex ultricies vulputate. Nulla
                            facilisi.
                        </Paragraph>
                    </Dialog>
                </Box>
            </BoxLayout>
        </>
    );
};
