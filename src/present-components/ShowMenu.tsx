import { BoxLayout, BoxMenu, MenuItem, Title } from '@src/lib';

export const ShowMenu = () => {
    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                ShowMenu
            </Title>
            <BoxLayout>
                <BoxMenu orientation={'vertical'}>
                    <MenuItem value={'1'}>item 1</MenuItem>
                    <MenuItem value={'2'}>item 2</MenuItem>
                    <MenuItem value={'3'}>item 3</MenuItem>
                </BoxMenu>
                <BoxMenu mr={'my-5'}>
                    <MenuItem value={'1'}>item 1</MenuItem>
                    <MenuItem value={'2'}>item 2</MenuItem>
                    <MenuItem value={'3'}>item 3</MenuItem>
                </BoxMenu>
            </BoxLayout>
        </>
    );
};
