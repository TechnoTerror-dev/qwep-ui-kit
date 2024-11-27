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
    Title,
    SubmitCheckbox,
    CardBox,
    RadioGroup,
    RadioItem,
    SelectItem,
    SelectGroup,
    Select,
} from '@src/lib';
import { IconButton } from '@src/lib/components/button/icon-button/IconButton';
import { BaseTextField, MainTextField, WrapperInput } from '@src/lib/components/input';

import { useState } from 'react';
import { styled } from 'styled-components';

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

export const PresentBox = () => {
    const [isShow, setIsShow] = useState(false);
    const [radioId, setRadioId] = useState('1');

    const loadingShow = () => {
        setIsShow(!isShow);
    };

    const onclickInp = () => {
        console.log('INPPPP');
    };

    const radioClick = (id: string) => {
        setRadioId(id);
    };
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                Box
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
            </BoxLayout>
        </>
    );
};
