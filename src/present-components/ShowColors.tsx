import { Box, BoxLayout, Paragraph, Title } from '@src/lib';
import { useColorScheme } from '@src/lib/general';
import { Hex } from '@src/lib/general/colors';
import styled from 'styled-components';

const Circle = styled(Box)<{ color: Hex }>`
    width: 80px;
    height: 80px;
    min-height: 80px;
    min-width: 80px;
    border-radius: 50%;
    background: ${(props) => props.color};
    border: 1px solid #5a5a5a;
`;

type ColorBoxProps = {
    color: Hex;
    text: string;
};
const ColorBox: React.FC<ColorBoxProps> = ({ color, text }) => {
    return (
        <Box boxDisplay={'flex'} boxGapVariant={'g-1'} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Circle color={color} />
            <Paragraph sizeVariant={'subtext'}>{text}</Paragraph>
            <Paragraph sizeVariant={'subtext'}>{color}</Paragraph>
        </Box>
    );
};

export const ShowColors = () => {
    const colors = useColorScheme();
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowColors
            </Title>
            <BoxLayout>
                <Title>General</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.primary} text={'primary'} />
                    <ColorBox color={colors.secondary} text={'secondary'} />
                    <ColorBox color={colors.system} text={'system'} />
                </Box>
                <Title>Other</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.lightShadow} text={'lightShadow'} />
                    <ColorBox color={colors.lightElem} text={'lightElem'} />
                    <ColorBox color={colors.backgroundInfo} text={'backgroundInfo'} />
                    <ColorBox color={colors.backgroundSuccess} text={'backgroundSuccess'} />
                    <ColorBox color={colors.backgroundWarning} text={'backgroundWarning'} />
                    <ColorBox color={colors.backgroundError} text={'backgroundError'} />
                </Box>
                <Title>Items</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.primaryItem} text={'primaryItem'} />
                    <ColorBox color={colors.primaryItemActive} text={'primaryItemActive'} />
                    <ColorBox color={colors.successItem} text={'successItem'} />
                    <ColorBox color={colors.successItemActive} text={'successItemActive'} />
                    <ColorBox color={colors.infoItem} text={'infoItem'} />
                    <ColorBox color={colors.infoItemActive} text={'infoItemActive'} />
                    <ColorBox color={colors.errorItem} text={'errorItem'} />
                    <ColorBox color={colors.errorItemActive} text={'errorItemActive'} />
                    <ColorBox color={colors.warningItem} text={'warningItem'} />
                    <ColorBox color={colors.warningItemActive} text={'warningItemActive'} />
                </Box>
                <Title>Base</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.background} text={'background'} />
                    <ColorBox color={colors.layoutBox} text={'layoutBox'} />
                    <ColorBox color={colors.backgroundBox} text={'backgroundBox'} />
                    <ColorBox color={colors.backgroundTooltip} text={'backgroundTooltip'} />
                    <ColorBox color={colors.disabled} text={'disabled'} />
                    <ColorBox color={colors.shadowColor} text={'shadowColor'} />
                </Box>
                <Title>Text</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.title} text={'title'} />
                    <ColorBox color={colors.text} text={'text'} />
                    <ColorBox color={colors.subText} text={'subText'} />
                    <ColorBox color={colors.textItem} text={'textItem'} />
                    <ColorBox color={colors.link} text={'link'} />
                    <ColorBox color={colors.linkActive} text={'linkActive'} />
                    <ColorBox color={colors.tableText} text={'tableText'} />
                    <ColorBox color={colors.subTextPink} text={'subTextPink'} />
                    <ColorBox color={colors.subTextEvergreen} text={'subTextEvergreen'} />
                </Box>
                <Title>Icon</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.iconGroup} text={'iconGroup'} />
                    <ColorBox color={colors.iconsOrange} text={'iconsOrange'} />
                    <ColorBox color={colors.iconsRed} text={'iconsRed'} />
                    <ColorBox color={colors.iconsGreen} text={'iconsGreen'} />
                </Box>
                <Title>Backgrounds</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.backgroundHeaderCards} text={'backgroundHeaderCards'} />
                    <ColorBox color={colors.backgroundLightRed} text={'backgroundLightRed'} />
                    <ColorBox color={colors.backgroundOrdersGreen} text={'backgroundOrdersGreen'} />
                    <ColorBox color={colors.backgroundOrdersGrey} text={'backgroundOrdersGrey'} />
                    <ColorBox color={colors.backgroundElementsBlueGrey} text={'backgroundElementsBlueGrey'} />
                    <ColorBox color={colors.backgroundElementsOrange} text={'backgroundElementsOrange'} />
                    <ColorBox color={colors.backgroundElementsGreen} text={'backgroundElementsGreen'} />
                </Box>
                <Title>Table Backgrounds</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.backgroundTableBlue} text={'backgroundTableBlue'} />
                    <ColorBox color={colors.backgroundTableGreen} text={'backgroundTableGreen'} />
                    <ColorBox color={colors.backgroundTableGrey} text={'backgroundTableGrey'} />
                    <ColorBox color={colors.backgroundTableLightGrey} text={'backgroundTableLightGrey'} />
                    <ColorBox color={colors.backgroundTableOrange} text={'backgroundTableOrange'} />
                    <ColorBox color={colors.backgroundTableEvergreen} text={'backgroundTableEvergreen'} />
                    <ColorBox color={colors.backgroundTablePink} text={'backgroundTablePink'} />
                    <ColorBox color={colors.backgroundTableRed} text={'backgroundTableRed'} />
                </Box>
                <Title>Elements</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.secondaryElements} text={'secondaryElements'} />
                </Box>
                <Title>Default</Title>
                <Box mr={'my-3'} boxDisplay={'flex'} boxGapVariant={'g-3'}>
                    <ColorBox color={colors.alpha} text={'alpha'} />
                    <ColorBox color={colors.omega} text={'omega'} />
                </Box>
            </BoxLayout>
        </>
    );
};
