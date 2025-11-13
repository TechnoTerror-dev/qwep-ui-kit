import { Box, BoxLayout, Button, Icon, Paragraph, Title } from '@src/lib';
import { useState } from 'react';
import styled from 'styled-components';
import { EBaseProps, TBaseProps } from '../lib';

const WrapBox = styled(Box)`
    flex-wrap: wrap;
`;

const Item = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    return (
        <Box
            mr={'m-2'}
            boxDisplay={'flex'}
            boxGapVariant={'g-1'}
            style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}
        >
            {icon}
            <Paragraph sizeVariant={'subtext'}>{text}</Paragraph>
        </Box>
    );
};

export const ShowIcon = () => {
    const [size, setSize] = useState<TBaseProps.VariantSize>(EBaseProps.VariantSize.L);
    const [colorVariant, setColorVariant] = useState<TBaseProps.VariantColor>(EBaseProps.VariantColor.DEFAULT);

    const sizeHandler = () => {
        if (size === EBaseProps.VariantSize.L) {
            setSize(EBaseProps.VariantSize.M);
        } else {
            setSize(EBaseProps.VariantSize.L);
        }
    };

    const colorVariantHandler = () => {
        if (colorVariant === EBaseProps.VariantColor.DEFAULT) {
            setColorVariant(EBaseProps.VariantColor.INFO);
        } else if (colorVariant === EBaseProps.VariantColor.INFO) {
            setColorVariant(EBaseProps.VariantColor.SUCCESS);
        } else if (colorVariant === EBaseProps.VariantColor.SUCCESS) {
            setColorVariant(EBaseProps.VariantColor.WARNING);
        } else if (colorVariant === EBaseProps.VariantColor.WARNING) {
            setColorVariant(EBaseProps.VariantColor.ERROR);
        } else if (colorVariant === EBaseProps.VariantColor.ERROR) {
            setColorVariant(EBaseProps.VariantColor.DEFAULT);
        }
    };
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowIcon
            </Title>
            <BoxLayout>
                <Box mr={'mb-4'} boxDisplay={'flex'} boxGapVariant={'g-2'}>
                    <Button onClick={sizeHandler}>Изменить Размер | {size}</Button>
                    <Button onClick={colorVariantHandler}>Изменить цвет | {colorVariant}</Button>
                </Box>

                <Title>General</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item icon={<Icon.Error colorVariant={colorVariant} sizeVariant={size} />} text={'Error'} />
                    <Item icon={<Icon.Info colorVariant={colorVariant} sizeVariant={size} />} text={'Info'} />
                    <Item icon={<Icon.Success colorVariant={colorVariant} sizeVariant={size} />} text={'Success'} />
                    <Item icon={<Icon.Warning colorVariant={colorVariant} sizeVariant={size} />} text={'Warning'} />
                    <Item
                        icon={<Icon.CloseCircle colorVariant={colorVariant} sizeVariant={size} />}
                        text={'CloseCircle'}
                    />
                    <Item icon={<Icon.BaseCheck colorVariant={colorVariant} sizeVariant={size} />} text={'BaseCheck'} />
                    <Item icon={<Icon.AddCircle colorVariant={colorVariant} sizeVariant={size} />} text={'AddCircle'} />
                    <Item icon={<Icon.Add colorVariant={colorVariant} sizeVariant={size} />} text={'Add'} />
                    <Item icon={<Icon.Close colorVariant={colorVariant} sizeVariant={size} />} text={'Close'} />
                    <Item icon={<Icon.More colorVariant={colorVariant} sizeVariant={size} />} text={'More'} />
                    <Item icon={<Icon.Spam colorVariant={colorVariant} sizeVariant={size} />} text={'Spam'} />
                    <Item
                        icon={<Icon.QuestionAnswer colorVariant={colorVariant} sizeVariant={size} />}
                        text={'QuestionAnswer'}
                    />
                    <Item
                        icon={<Icon.Notification colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Notification'}
                    />
                    <Item icon={<Icon.Question colorVariant={colorVariant} sizeVariant={size} />} text={'Question'} />
                    <Item icon={<Icon.Edit colorVariant={colorVariant} sizeVariant={size} />} text={'Edit'} />
                </WrapBox>
                <Title>Themes</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.ThemeLight colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ThemeLight'}
                    />
                    <Item
                        icon={<Icon.ThemeLightAlt colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ThemeLightAlt'}
                    />
                    <Item icon={<Icon.ThemeDark colorVariant={colorVariant} sizeVariant={size} />} text={'ThemeDark'} />
                    <Item
                        icon={<Icon.ThemeDarkAlt colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ThemeDarkAlt'}
                    />
                </WrapBox>
                <Title>Search, Filter, Statistic</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item icon={<Icon.SearchAlt colorVariant={colorVariant} sizeVariant={size} />} text={'SearchAlt'} />
                    <Item icon={<Icon.SearchEye colorVariant={colorVariant} sizeVariant={size} />} text={'SearchEye'} />
                    <Item icon={<Icon.Search colorVariant={colorVariant} sizeVariant={size} />} text={'Search'} />
                    <Item icon={<Icon.BarChart colorVariant={colorVariant} sizeVariant={size} />} text={'BarChart'} />
                    <Item icon={<Icon.SortUp colorVariant={colorVariant} sizeVariant={size} />} text={'SortUp'} />
                    <Item icon={<Icon.SortUpAlt colorVariant={colorVariant} sizeVariant={size} />} text={'SortUpAlt'} />
                    <Item icon={<Icon.Filter colorVariant={colorVariant} sizeVariant={size} />} text={'Filter'} />
                    <Item
                        icon={<Icon.FindReplace colorVariant={colorVariant} sizeVariant={size} />}
                        text={'FindReplace'}
                    />
                    <Item icon={<Icon.LineChart colorVariant={colorVariant} sizeVariant={size} />} text={'LineChart'} />
                    <Item icon={<Icon.SortSlash colorVariant={colorVariant} sizeVariant={size} />} text={'SortSlash'} />
                </WrapBox>
                <Title>Download, File, Folder, List </Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.Attachment colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Attachment'}
                    />
                    <Item icon={<Icon.Download colorVariant={colorVariant} sizeVariant={size} />} text={'Download'} />
                    <Item icon={<Icon.ListCheck colorVariant={colorVariant} sizeVariant={size} />} text={'ListCheck'} />
                    <Item icon={<Icon.FileAdd colorVariant={colorVariant} sizeVariant={size} />} text={'FileAdd'} />
                    <Item
                        icon={<Icon.FileDownload colorVariant={colorVariant} sizeVariant={size} />}
                        text={'FileDownload'}
                    />
                    <Item icon={<Icon.FileExcel colorVariant={colorVariant} sizeVariant={size} />} text={'FileExcel'} />
                    <Item
                        icon={<Icon.FileListAlt colorVariant={colorVariant} sizeVariant={size} />}
                        text={'FileListAlt'}
                    />
                    <Item icon={<Icon.FileList colorVariant={colorVariant} sizeVariant={size} />} text={'FileList'} />
                    <Item icon={<Icon.FolderAdd colorVariant={colorVariant} sizeVariant={size} />} text={'FolderAdd'} />

                    <Item
                        icon={<Icon.FolderDelete colorVariant={colorVariant} sizeVariant={size} />}
                        text={'FolderDelete'}
                    />
                    <Item icon={<Icon.Inbox colorVariant={colorVariant} sizeVariant={size} />} text={'Inbox'} />
                </WrapBox>
                <Title>Other</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.ArrowLeftRight colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ArrowLeftRight'}
                    />
                    <Item icon={<Icon.HashTag colorVariant={colorVariant} sizeVariant={size} />} text={'HashTag'} />
                    <Item icon={<Icon.House colorVariant={colorVariant} sizeVariant={size} />} text={'House'} />
                    <Item icon={<Icon.Check colorVariant={colorVariant} sizeVariant={size} />} text={'Check'} />
                    <Item icon={<Icon.Crown colorVariant={colorVariant} sizeVariant={size} />} text={'Crown'} />
                    <Item icon={<Icon.Sum colorVariant={colorVariant} sizeVariant={size} />} text={'Sum'} />
                    <Item icon={<Icon.Watches colorVariant={colorVariant} sizeVariant={size} />} text={'Watches'} />
                    <Item icon={<Icon.Settings colorVariant={colorVariant} sizeVariant={size} />} text={'Settings'} />
                    <Item icon={<Icon.EyeClose colorVariant={colorVariant} sizeVariant={size} />} text={'EyeClose'} />
                    <Item icon={<Icon.Eye colorVariant={colorVariant} sizeVariant={size} />} text={'Eye'} />
                    <Item icon={<Icon.Email colorVariant={colorVariant} sizeVariant={size} />} text={'Email'} />
                    <Item icon={<Icon.Award colorVariant={colorVariant} sizeVariant={size} />} text={'Award'} />
                    <Item icon={<Icon.BankCard colorVariant={colorVariant} sizeVariant={size} />} text={'BankCard'} />
                    <Item icon={<Icon.Book colorVariant={colorVariant} sizeVariant={size} />} text={'Book'} />
                    <Item icon={<Icon.BookMark colorVariant={colorVariant} sizeVariant={size} />} text={'BookMark'} />
                    <Item icon={<Icon.Briefcase colorVariant={colorVariant} sizeVariant={size} />} text={'Briefcase'} />
                    <Item icon={<Icon.Building colorVariant={colorVariant} sizeVariant={size} />} text={'Building'} />
                    <Item icon={<Icon.ChatSmall colorVariant={colorVariant} sizeVariant={size} />} text={'ChatSmall'} />
                    <Item icon={<Icon.Global colorVariant={colorVariant} sizeVariant={size} />} text={'Global'} />
                    <Item icon={<Icon.Group colorVariant={colorVariant} sizeVariant={size} />} text={'Group'} />
                    <Item
                        icon={<Icon.RangeGroup colorVariant={colorVariant} sizeVariant={size} />}
                        text={'RangeGroup'}
                    />
                    <Item icon={<Icon.Image colorVariant={colorVariant} sizeVariant={size} />} text={'Image'} />
                    <Item icon={<Icon.Chat colorVariant={colorVariant} sizeVariant={size} />} text={'Chat'} />
                    <Item icon={<Icon.Calendar colorVariant={colorVariant} sizeVariant={size} />} text={'Calendar'} />
                    <Item
                        icon={<Icon.CustomerService colorVariant={colorVariant} sizeVariant={size} />}
                        text={'CustomerService'}
                    />
                    <Item
                        icon={<Icon.CheckboxMultipleBlank colorVariant={colorVariant} sizeVariant={size} />}
                        text={'CheckboxMultipleBlank'}
                    />
                    <Item icon={<Icon.Global colorVariant={colorVariant} sizeVariant={size} />} text={'Global'} />
                    <Item icon={<Icon.Photo colorVariant={colorVariant} sizeVariant={size} />} text={'Photo'} />
                    <Item
                        icon={<Icon.RangeGroup colorVariant={colorVariant} sizeVariant={size} />}
                        text={'RangeGroup'}
                    />
                    <Item icon={<Icon.Image colorVariant={colorVariant} sizeVariant={size} />} text={'Image'} />
                    <Item icon={<Icon.Links colorVariant={colorVariant} sizeVariant={size} />} text={'Links'} />
                    <Item icon={<Icon.Lock colorVariant={colorVariant} sizeVariant={size} />} text={'Lock'} />
                    <Item
                        icon={<Icon.Personalization colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Personalization'}
                    />
                    <Item icon={<Icon.Mail colorVariant={colorVariant} sizeVariant={size} />} text={'Mail'} />
                    <Item
                        icon={<Icon.MenuFold fold colorVariant={colorVariant} sizeVariant={size} />}
                        text={'MenuFold_FOLD'}
                    />
                    <Item
                        icon={<Icon.MenuFold fold={false} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'MenuFold_UNFOLD'}
                    />
                    <Item
                        icon={<Icon.MenuUnfold colorVariant={colorVariant} sizeVariant={size} />}
                        text={'MenuUnfold'}
                    />
                    <Item icon={<Icon.Pen colorVariant={colorVariant} sizeVariant={size} />} text={'Pen'} />
                    <Item icon={<Icon.Phone colorVariant={colorVariant} sizeVariant={size} />} text={'Phone'} />
                    <Item icon={<Icon.QuillPen colorVariant={colorVariant} sizeVariant={size} />} text={'QuillPen'} />
                    <Item icon={<Icon.Refresh colorVariant={colorVariant} sizeVariant={size} />} text={'Refresh'} />
                    <Item icon={<Icon.Rocket colorVariant={colorVariant} sizeVariant={size} />} text={'Rocket'} />
                    <Item
                        icon={<Icon.StopCircle colorVariant={colorVariant} sizeVariant={size} />}
                        text={'StopCircle'}
                    />
                    <Item icon={<Icon.Team colorVariant={colorVariant} sizeVariant={size} />} text={'Team'} />
                    <Item icon={<Icon.Tools colorVariant={colorVariant} sizeVariant={size} />} text={'Tools'} />
                    <Item icon={<Icon.UserAdd colorVariant={colorVariant} sizeVariant={size} />} text={'UserAdd'} />
                    <Item
                        icon={<Icon.UserFollow colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UserFollow'}
                    />
                    <Item icon={<Icon.User colorVariant={colorVariant} sizeVariant={size} />} text={'User'} />
                    <Item
                        icon={<Icon.UserReceived colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UserReceived'}
                    />
                    <Item
                        icon={<Icon.UserSettings colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UserSettings'}
                    />
                    <Item icon={<Icon.UserStar colorVariant={colorVariant} sizeVariant={size} />} text={'UserStar'} />
                    <Item
                        icon={<Icon.UserDelete colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UserDelete'}
                    />
                </WrapBox>
                <Title>Arrow Line</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.ArrowLine position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ArrowLine TOP'}
                    />
                    <Item
                        icon={<Icon.ArrowLine position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ArrowLine LEFT'}
                    />
                    <Item
                        icon={<Icon.ArrowLine position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ArrowLine RIGHT'}
                    />
                    <Item
                        icon={<Icon.ArrowLine position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'ArrowLine BOTTOM'}
                    />
                </WrapBox>
                <Title>Arrow</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.Arrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Arrow TOP'}
                    />
                    <Item
                        icon={<Icon.Arrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Arrow LEFT'}
                    />
                    <Item
                        icon={<Icon.Arrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Arrow RIGHT'}
                    />
                    <Item
                        icon={<Icon.Arrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'Arrow BOTTOM'}
                    />
                </WrapBox>
                <Title>Download Arrow</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.DownloadArrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'DownloadArrow TOP'}
                    />
                    <Item
                        icon={<Icon.DownloadArrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'DownloadArrow LEFT'}
                    />
                    <Item
                        icon={<Icon.DownloadArrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'DownloadArrow RIGHT'}
                    />
                    <Item
                        icon={<Icon.DownloadArrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'DownloadArrow BOTTOM'}
                    />
                </WrapBox>

                <Title>Upload Arrow</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.UploadArrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UploadArrow TOP'}
                    />
                    <Item
                        icon={<Icon.UploadArrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UploadArrow LEFT'}
                    />
                    <Item
                        icon={<Icon.UploadArrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UploadArrow RIGHT'}
                    />
                    <Item
                        icon={<Icon.UploadArrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UploadArrow BOTTOM'}
                    />
                </WrapBox>

                <Title>Send Arrow</Title>
                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.SendArrow position={'top'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'SendArrow TOP'}
                    />
                    <Item
                        icon={<Icon.SendArrow position={'left'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'SendArrow LEFT'}
                    />
                    <Item
                        icon={<Icon.SendArrow position={'right'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'SendArrow RIGHT'}
                    />
                    <Item
                        icon={<Icon.SendArrow position={'bottom'} colorVariant={colorVariant} sizeVariant={size} />}
                        text={'SendArrow BOTTOM'}
                    />
                </WrapBox>
                <Title>Filled</Title>

                <WrapBox boxDisplay={'flex'} boxGapVariant={'g-2'} mr={'mb-3'}>
                    <Item
                        icon={<Icon.BuildingFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'BuildingFilled'}
                    />
                    <Item
                        icon={<Icon.BarChartFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'BarChartFilled'}
                    />
                    <Item
                        icon={<Icon.UserFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'UserFilled'}
                    />
                    <Item
                        icon={<Icon.QWEPFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'QWEPFilled'}
                    />
                    <Item icon={<Icon.AppFilled colorVariant={colorVariant} sizeVariant={size} />} text={'AppFilled'} />
                    <Item
                        icon={<Icon.SettingsFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'SettingsFilled'}
                    />
                    <Item
                        icon={<Icon.BuildingAltFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'BuildingAltFilled'}
                    />
                    <Item
                        icon={<Icon.TabletFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'TabletFilled'}
                    />
                    <Item
                        icon={<Icon.QuestionFilled colorVariant={colorVariant} sizeVariant={size} />}
                        text={'QuestionFilled'}
                    />
                </WrapBox>
            </BoxLayout>
        </>
    );
};
