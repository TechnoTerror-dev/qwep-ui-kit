import {
    BoxLayout,
    Button,
    Icon,
    Paragraph,
    Tabs,
    Box,
    Title,
    Tab,
    TabContent,
    Separator,
    CircleDecorationTitle,
    Avatar,
    BoxSkeleton,
    CardBoxSkeleton,
} from '@src/lib';
import { MainTextField, PhoneTextField, WrapperInput } from '@src/lib/components/input';

import { useState } from 'react';
import { styled } from 'styled-components';
import { url1 } from './avatar-img';
import { Armenia, Belarus, Kazakhstan, Russia } from './countryIcon';

const items = [
    {
        id: '1',
        icon: <Russia sizeVariant={'M'} />,
        title: 'Россия',
        mask: '+7 (999) 999-99-99',
    },
    {
        id: '2',
        icon: <Kazakhstan sizeVariant={'M'} />,
        title: 'Казахстан',
        mask: '+7 (701) 999-99-99',
    },
    {
        id: '3',
        icon: <Armenia sizeVariant={'M'} />,
        title: 'Армения',
        mask: '+374 (99) 999-999',
    },
    {
        id: '4',
        icon: <Belarus sizeVariant={'M'} />,
        title: 'Беларусь',
        mask: '+375 (29) 999-99-99',
    },
];

const LabelRole = styled(Box)`
    width: fit-content;
    background-color: #bbf7d0;
    border-radius: 8px;
`;

const BoxAdaptive = styled(BoxSkeleton)`
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;

export const ShowProfile = () => {
    const [skeleton, setSkeleton] = useState(true);

    const skeletonClick = () => {
        setSkeleton(!skeleton);
    };

    const [phone, setPhone] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowProfile
            </Title>
            <Button onClick={skeletonClick} style={{ position: 'absolute', top: 0, right: 0 }}>
                {skeleton ? 'Skeleton' : 'None skeleton'}
            </Button>

            <BoxLayout>
                <Tabs
                    defaultValue={'t-1'}
                    tabs={
                        <BoxAdaptive
                            isSkeleton={false}
                            boxDisplay={'flex'}
                            style={{ justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap' }}
                        >
                            <CardBoxSkeleton isSkeleton={skeleton}>
                                <Title mr={'mb-3'}>Настройки профиля</Title>
                                <Paragraph>Вы можете менять свои личные данные,</Paragraph>
                                <Paragraph>управлять аккаунтом и настройками безопасности</Paragraph>
                            </CardBoxSkeleton>
                            <CardBoxSkeleton
                                style={{ flexWrap: 'wrap' }}
                                isSkeleton={skeleton}
                                boxDisplay={'flex'}
                                boxGapVariant={'g-3'}
                                mr={'mt-5'}
                            >
                                <Tab key={1} value={'t-1'}>
                                    Общие
                                </Tab>
                                <Tab key={2} value={'t-2'}>
                                    Пароль
                                </Tab>
                                <Tab key={3} value={'t-3'} disabled>
                                    Интерфейс
                                </Tab>
                            </CardBoxSkeleton>
                        </BoxAdaptive>
                    }
                >
                    <Separator mr={'my-9'} />

                    <TabContent value={'t-1'} boxDisplay={'block'}>
                        <BoxAdaptive boxDisplay={'grid'} isSkeleton={skeleton}>
                            <CircleDecorationTitle title={'Фото'} icon={<Icon.Photo />}></CircleDecorationTitle>
                            <Box boxDisplay={'flex'}>
                                <Avatar sizeVariant={'L'} src={url1} alt={'Сатоши Накамото'} mr={'mr-7'} />
                                <Box
                                    boxDisplay={'flex'}
                                    style={{ flexDirection: 'column', justifyContent: 'space-between' }}
                                >
                                    <LabelRole
                                        boxDisplay={'flex'}
                                        boxGapVariant={'g-1'}
                                        boxPaddingVariant={'p-1'}
                                        mr={'mb-2'}
                                    >
                                        <Icon.StarFill color={'#16A34A'} sizeVariant={'M'} />
                                        <Paragraph sizeVariant={'subtext'} color={'#16A34A'} mr={'mr-1'}>
                                            Админ
                                        </Paragraph>
                                    </LabelRole>
                                    <Box>
                                        <Title mr={'mb-2'}>Сатоши Накамото</Title>
                                        <Paragraph>Старший разработчик</Paragraph>
                                    </Box>
                                </Box>
                            </Box>
                        </BoxAdaptive>
                        <Separator mr={'my-9'} />
                        <BoxAdaptive boxDisplay={'grid'} isSkeleton={skeleton}>
                            <CircleDecorationTitle title={'Учетные данные'} icon={<Icon.Pen />}></CircleDecorationTitle>
                            <Box boxDisplay={'flex'} boxGapVariant={'g-4'} style={{ flexDirection: 'column' }}>
                                <Box boxDisplay={'flex'} boxGapVariant={'g-4'}>
                                    <WrapperInput positionLabel={'top'} id={'1'} label={'Имя'}>
                                        <MainTextField placeholder={'Сатоши'} />
                                    </WrapperInput>
                                    <WrapperInput positionLabel={'top'} id={'2'} label={'Фамилия'}>
                                        <MainTextField placeholder={'Накамото'} />
                                    </WrapperInput>
                                </Box>
                                <WrapperInput positionLabel={'top'} id={'3'} label={'Должность'}>
                                    <MainTextField placeholder={'Старший разработчик'} />
                                </WrapperInput>
                                <WrapperInput positionLabel={'top'} id={'4'} label={'Телефон'}>
                                    <PhoneTextField configList={items} value={phone} onChange={handleChange} />
                                </WrapperInput>
                                <WrapperInput positionLabel={'top'} id={'5'} label={'Email'}>
                                    <MainTextField placeholder={'satoshi_n@example.com'} />
                                </WrapperInput>
                            </Box>
                        </BoxAdaptive>
                    </TabContent>
                    <TabContent value={'t-2'}>BaseTabContent_2</TabContent>
                    <TabContent value={'t-3'}>BaseTabContent_3</TabContent>
                </Tabs>
            </BoxLayout>
        </>
    );
};
