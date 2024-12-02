import {
    Checkbox,
    BaseText,
    BoxLayout,
    Button,
    CircleLoading,
    Icon,
    MainButton,
    Paragraph,
    SubmitButton,
    SubmitCheckbox,
    CardBox,
    RadioGroup,
    RadioItem,
    SelectItem,
    SelectGroup,
    Select,
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
import { IconButton } from '@src/lib/components/button/icon-button/IconButton';
import { BaseTextField, MainTextField, WrapperInput } from '@src/lib/components/input';

import { useState } from 'react';
import { styled } from 'styled-components';
import { url1 } from './avatar-img';

const LabelRole = styled(Box)`
    width: fit-content;
    background-color: #bbf7d0;
    border-radius: 8px;
`;

const SBtn = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
`;

const SCard = styled(CardBox)`
    cursor: pointer;
    background-color: #10251d9e;
    width: 100px;
    height: 70px;
    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
    }
`;

const BoxAdaptive = styled(BoxSkeleton)`
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;

export const ShowBox = () => {
    const [isShow, setIsShow] = useState(false);
    const [radioId, setRadioId] = useState('1');
    const [skeleton, setSkeleton] = useState(true);

    const loadingShow = () => {
        setIsShow(!isShow);
    };

    const onclickInp = () => {
        console.log('INPPPP');
    };

    const radioClick = (id: string) => {
        setRadioId(id);
    };

    const skeletonClick = () => {
        setSkeleton(!skeleton);
    };
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowBox
            </Title>
            <BoxLayout>
                <Title sizeVariant={'L'}>L ipsum, dolor sit amet consectetur</Title>
                <Title sizeVariant={'M'}>M ipsum, dolor sit amet consectetur</Title>
                <Title sizeVariant={'S'} mr={'mb-4'}>
                    S ipsum, dolor sit amet consectetur
                </Title>
                <BaseText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </BaseText>
                <BaseText sizeVariant={'text'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </BaseText>
                <Paragraph mr={'mt-4'} sizeVariant={'text'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </Paragraph>
                <Paragraph mr={'mt-4'} sizeVariant={'subtext'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </Paragraph>
                <CircleLoading />
                <Button onClick={loadingShow}>{isShow ? 'Show' : 'NonShow'}</Button>
                <MainButton icon={<Icon.AddCircle />} position={'left'} style={{ width: '200px' }}>
                    Lorem
                </MainButton>
                <SubmitButton isLoading={isShow}>Lorem</SubmitButton>
                <SubmitButton variant={'outlined'} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton icon={<Icon.AddCircle />} position={'left'} style={{ width: '300px' }} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton sizeVariant={'M'} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton sizeVariant={'M'} variant={'outlined'} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton disabled sizeVariant={'M'} isLoading={isShow}>
                    Lorem
                </SubmitButton>

                <IconButton borderRadius={'round'} color={'#EFF6FF'}>
                    <Icon.BarChart color={'#000'} />
                </IconButton>

                <BaseTextField />

                <BaseTextField placeholder={'placeholder'} />
                <BaseTextField colorVariant={'error'} placeholder={'placeholder'} />
                <BaseTextField disabled placeholder={'placeholder'} />
                <MainTextField
                    placeholder={'placeholder'}
                    iconStart={<Icon.BarChart />}
                    iconsEnd={[
                        <SBtn key={1} onClick={onclickInp}>
                            <Icon.BarChart />
                        </SBtn>,
                        <Icon.AddCircle onClick={onclickInp} key={2} />,
                        <Icon.BarChart onClick={onclickInp} key={3} />,
                        <Icon.AddCircle onClick={onclickInp} key={4} />,
                    ]}
                />

                <MainTextField colorVariant={'success'} disabled iconStart={<Icon.BarChart onClick={onclickInp} />} />

                <WrapperInput required positionLabel={'top'} id={'BaseTextField'} label={'BaseTextField'}>
                    <BaseTextField placeholder={'Placeholder'} />
                </WrapperInput>
                <Checkbox />
                <WrapperInput
                    mr={'m-2'}
                    required
                    positionLabel={'right'}
                    id={'SubmitCheckbox'}
                    label={'SubmitCheckbox'}
                >
                    <SubmitCheckbox isLoading={false} />
                </WrapperInput>
                <WrapperInput required positionLabel={'right'} id={'Checkbox'} label={'Checkbox'} mr={'m-2'}>
                    <Checkbox />
                </WrapperInput>
                <WrapperInput required positionLabel={'right'} id={'Checkbox'} label={'Checkbox'} mr={'m-2'}>
                    <Checkbox sizeVariant={'M'} />
                </WrapperInput>
                <WrapperInput required positionLabel={'right'} id={'Checkbox'} label={'Checkbox'} mr={'m-2'}>
                    <SubmitCheckbox isLoading={true} />
                </WrapperInput>
                <WrapperInput required positionLabel={'right'} id={'Checkbox'} label={'Checkbox'} mr={'m-2'}>
                    <SubmitCheckbox isLoading={true} sizeVariant={'M'} />
                </WrapperInput>
                <SubmitCheckbox isLoading={false} checked />
                <SubmitCheckbox isLoading sizeVariant={'M'} checked />
                <WrapperInput
                    required
                    positionLabel={'top'}
                    id={'SimpleTextField'}
                    label={'SimpleTextField'}
                    message={{
                        text: 'SimpleTextField',
                    }}
                >
                    <MainTextField
                        colorVariant={'success'}
                        iconStart={<Icon.BarChart onClick={onclickInp} />}
                        iconsEnd={[
                            <SBtn key={1} onClick={onclickInp}>
                                <Icon.BarChart />
                            </SBtn>,
                            <Icon.AddCircle onClick={onclickInp} key={2} />,
                            <Icon.BarChart key={3} color={'#000'} />,
                            <Icon.AddCircle key={4} />,
                        ]}
                    />
                </WrapperInput>

                <RadioGroup mr="m-5" orientation={'horizontal'} value={radioId}>
                    <SCard
                        boxPaddingVariant={'p-2'}
                        role={'button'}
                        boxRadiusVariant={'br-2'}
                        onClick={() => radioClick('1')}
                    >
                        <RadioItem value={'1'} />
                    </SCard>
                    <SCard
                        boxPaddingVariant={'p-2'}
                        role={'button'}
                        boxRadiusVariant={'br-2'}
                        onClick={() => radioClick('2')}
                    >
                        <RadioItem value={'2'} />
                    </SCard>
                    <SCard
                        boxPaddingVariant={'p-2'}
                        role={'button'}
                        boxRadiusVariant={'br-2'}
                        onClick={() => radioClick('3')}
                    >
                        <RadioItem sizeVariant={'M'} value={'3'} />
                    </SCard>
                    <SCard
                        boxPaddingVariant={'p-2'}
                        role={'button'}
                        boxRadiusVariant={'br-2'}
                        onClick={() => radioClick('4')}
                    >
                        <RadioItem sizeVariant={'M'} value={'4'} />
                    </SCard>
                </RadioGroup>

                <Select mr={'m-3'} placeholder={'Default select'}>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                </Select>
                <Select mr={'m-3'} colorVariant={'warning'} placeholder={'Default select'}>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                </Select>
                <Select mr={'m-3'} width={'200px'} colorVariant={'warning'} placeholder={'Default select'}>
                    <SelectItem value={'1'}>Item 1</SelectItem>
                    <SelectItem value={'2'}>Item 2</SelectItem>
                    <SelectGroup label="Group">
                        <SelectItem value={'3'}>Item 3</SelectItem>
                        <SelectItem value={'4'}>Item 4</SelectItem>
                    </SelectGroup>
                </Select>
                <Button onClick={skeletonClick}>{skeleton ? 'YES' : 'NO'}</Button>
            </BoxLayout>

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
                            <CircleDecorationTitle
                                title={'Фото'}
                                icon={<Icon.Photo color={'#000'} />}
                            ></CircleDecorationTitle>
                            <Box boxDisplay={'flex'}>
                                <Avatar sizeVariant={'large'} src={url1} alt={'Сатоши Накамото'} mr={'mr-7'} />
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
                            <CircleDecorationTitle
                                title={'Учетные данные'}
                                icon={<Icon.Pen color={'#000'} />}
                            ></CircleDecorationTitle>
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
                                    <MainTextField placeholder={'+7 977 999-99-99'} />
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
