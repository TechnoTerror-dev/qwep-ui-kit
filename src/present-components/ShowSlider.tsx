import { BoxLayout, Title, Slider, Box, BaseTextField, WrapperInput } from '@src/lib';
import { useState } from 'react';

export const ShowSlider = () => {
    const [data1, setData1] = useState([0, 120, 300]);

    const [data2, setData2] = useState([0, 320]);

    const sliderHandler1 = (e: number[]) => {
        setData1(e);
    };

    const sliderHandler2 = (e: number[]) => {
        setData2(e);
    };

    const changeHandler = (value: string, index: number) => {
        setData2(
            data2.map((item, idx) => {
                if (idx === index) {
                    return parseInt(value) ? parseInt(value) : 0;
                }
                return item;
            })
        );
    };

    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowSlider
            </Title>
            <BoxLayout>
                <Box boxDisplay={'grid'} mr={'mb-6'} boxGapVariant={'g-4'}>
                    <Slider defaultValue={[0]} />
                    <Slider defaultValue={[10, 80]} />
                    <Slider colorVariant={'error'} defaultValue={[10, 50]} />
                    <Slider defaultValue={[10, 80, 50]} />
                </Box>
                <Box boxDisplay={'grid'} mr={'mb-6'} boxGapVariant={'g-2'}>
                    <Slider length={'100%'} onValueChange={sliderHandler1} max={500} defaultValue={data1} />
                    <BaseTextField value={data1[0]} blocked />
                    <BaseTextField value={data1[1]} blocked />
                    <BaseTextField value={data1[2]} blocked />
                </Box>

                <Box boxDisplay={'grid'} boxGapVariant={'g-2'}>
                    <WrapperInput positionLabel={'top'} id={'Slider'} label={'Slider'}>
                        <Slider
                            length={'100%'}
                            onValueChange={sliderHandler2}
                            max={500}
                            value={data2}
                            defaultValue={data2}
                        />
                    </WrapperInput>
                    <BaseTextField value={data2[0]} onChange={(e) => changeHandler(e.target.value, 0)} />
                    <BaseTextField value={data2[1]} onChange={(e) => changeHandler(e.target.value, 1)} />
                </Box>
            </BoxLayout>
        </>
    );
};
