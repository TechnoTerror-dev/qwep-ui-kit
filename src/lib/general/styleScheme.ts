export type TypeSSMR = {
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
};

export type TypeSSBase = {
    borderRadiusItem: string;
    circleDecorationElem: string;
};

export type TypeSSBtn = {
    btnPadding_X_L: string;
    btnPadding_Y_L: string;
    btnPadding_X_M: string;
    btnPadding_Y_M: string;
    btnHeight_L: string;
    btnHeight_M: string;
    btnIconSize_L: string;
    btnIconSize_M: string;
    btnLoadingSize_L: string;
    btnLoadingSize_M: string;
};

export type TypeSSInp = {
    inpPadding_X_L: string;
    inpPadding_Y_L: string;
    inpPadding_X_M: string;
    inpPadding_Y_M: string;
    inpHeight_L: string;
    inpHeight_M: string;
    inpIconSize_L: string;
    inpIconSize_M: string;
};

export type TypeSSIcon = {
    iconSize_L: string;
    iconSize_M: string;
};

export type TypeSSCheckbox = {
    checkboxSize_L: string;
    checkboxSize_M: string;
};

export type TypeSSSwitch = {
    switchSize_X_L: string;
    switchSize_Y_L: string;
    switchSize_X_M: string;
    switchSize_Y_M: string;
    switchThumbSize_L: string;
    switchThumbSize_M: string;
    switchThumbTranslateX_L: string;
    switchThumbTranslateX_M: string;
};

export type TypeSSSelect = {
    selectPadding_X_L: string;
    selectPadding_Y_L: string;
    selectPadding_X_M: string;
    selectPadding_Y_M: string;
    selectHeight_L: string;
    selectHeight_M: string;
    selectIconSize_L: string;
    selectIconSize_M: string;
};

export type TypeSSSlider = {
    thumbSize_L: string;
    thumbSize_M: string;
};

export type TypeSSTooltip = {
    padding: string;
    borderRadius: string;
    boxShadow: string;
};

export type TypeSSAvatar = {
    avatarSize_S: string;
    avatarSize_M: string;
    avatarSize_L: string;
    avatarFontSize_S: string;
    avatarFontSize_M: string;
    avatarFontSize_L: string;
    avatarFontWeight: string;
};

export type TypeSSRadio = {
    radioSize_L: string;
    radioSize_M: string;
    radioSizeIndicator_L: string;
    radioSizeIndicator_M: string;
};

export type TypeSSList = {
    paddingTitle: string;
    paddingItem: string;
};

export type TypeSSTypography = {
    // size
    text: string;
    subText: string;
    title_L: string;
    title_M: string;
    title_S: string;
    // line height
    lineHeightText: string;
    lineHeightSubText: string;
    // font weight
    weightTitle: string;
    weightItem: string;
    weightGlobal: string;
};

export type TypeSSBox = {
    blurCount: string;
    backgroundOpacity: string;

    boxBorderRadius_S: string;
    boxBorderRadius_M: string;
    boxBorderRadius_L: string;

    boxShadow_S: string;
    boxShadow_M: string;
    boxShadow_L: string;

    boxWidth_S: string;
    boxWidth_M: string;
    boxWidth_L: string;
    boxWidth_fit_content: string;
    boxWidth_auto: string;
    boxWidth_max: string;

    boxPadding_1: string;
    boxPadding_2: string;
    boxPadding_3: string;
    boxPadding_4: string;
    boxPadding_5: string;
    boxPadding_6: string;

    boxGap_1: string;
    boxGap_2: string;
    boxGap_3: string;
    boxGap_4: string;
    boxGap_5: string;
    boxGap_6: string;
};

export type TypeSSLayout = {
    blurCount: string;
    backgroundOpacity: string;

    borderRadius: string;

    width_L: string;
    width_M: string;
    width_S: string;

    padding_L: string;
    padding_M: string;
    padding_S: string;

    margin_L: string;
    margin_M: string;
    margin_S: string;
};

export type TypeSSMenu = {
    blurCount: string;
    backgroundOpacity: string;
};

export type TypeSSDialog = {
    blurCount: string;
    backgroundOpacity: string;
};

export type TypeSSPopup = {
    blurCount: string;
    backgroundOpacity: string;
};

export type TypeSS = {
    // base
    base: TypeSSBase;
    //margin
    mr: TypeSSMR;
    //btn
    btn: TypeSSBtn;
    //inp
    inp: TypeSSInp;
    //select
    select: TypeSSSelect;
    //avatar
    avatar: TypeSSAvatar;
    //radio
    radio: TypeSSRadio;
    // icon
    icon: TypeSSIcon;
    //checkbox
    checkbox: TypeSSCheckbox;
    // switch
    switch: TypeSSSwitch;
    //slider
    slider: TypeSSSlider;
    //text
    typography: TypeSSTypography;

    //box
    box: TypeSSBox;

    //box layout
    layout: TypeSSLayout;

    // list
    list: TypeSSList;

    //tooltip
    tooltip: TypeSSTooltip;

    // menu
    menu: TypeSSMenu;

    // popup
    popup: TypeSSPopup;

    // dialog
    dialog: TypeSSDialog;
} & {
    [key: string]: string | { [key: string]: string | object };
};

export const styleScheme: TypeSS = {
    // base
    base: {
        borderRadiusItem: '8px',
        circleDecorationElem: '40px',
    },

    //margin
    mr: {
        margin_1: '4px',
        margin_2: '8px',
        margin_3: '12px',
        margin_4: '20px',
        margin_5: '28px',
        margin_6: '36px',
        margin_7: '40px',
        margin_8: '52px',
        margin_9: '60px',
        margin_10: '68px',
        margin_11: '76px',
        margin_12: '82px',
    },

    //btn
    btn: {
        btnPadding_X_L: '14px',
        btnPadding_Y_L: '5px',
        btnPadding_X_M: '12px',
        btnPadding_Y_M: '3px',
        btnHeight_L: '38px',
        btnHeight_M: '32px',
        btnIconSize_L: '20px',
        btnIconSize_M: '16px',
        btnLoadingSize_L: '14px',
        btnLoadingSize_M: '12px',
    },

    //inp
    inp: {
        inpPadding_X_L: '14px',
        inpPadding_Y_L: '5px',
        inpPadding_X_M: '12px',
        inpPadding_Y_M: '5px',
        inpHeight_L: '38px',
        inpHeight_M: '32px',
        inpIconSize_L: '20px',
        inpIconSize_M: '16px',
    },

    //select
    select: {
        selectPadding_X_L: '14px',
        selectPadding_Y_L: '5px',
        selectPadding_X_M: '12px',
        selectPadding_Y_M: '5px',
        selectHeight_L: '38px',
        selectHeight_M: '32px',
        selectIconSize_L: '20px',
        selectIconSize_M: '16px',
    },

    //avatar
    avatar: {
        avatarSize_S: '24px',
        avatarSize_M: '36px',
        avatarSize_L: '96px',
        avatarFontSize_S: '8px',
        avatarFontSize_M: '16px',
        avatarFontSize_L: '40px',
        avatarFontWeight: '600',
    },

    //checkbox
    checkbox: {
        checkboxSize_L: '20px',
        checkboxSize_M: '16px',
    },

    // switch
    switch: {
        switchSize_X_L: '36px',
        switchSize_Y_L: '20px',
        switchSize_X_M: '30px',
        switchSize_Y_M: '18px',
        switchThumbSize_L: '18px',
        switchThumbSize_M: '16px',
        switchThumbTranslateX_L: '17px',
        switchThumbTranslateX_M: '13px',
    },

    // switch
    slider: {
        thumbSize_L: '16px',
        thumbSize_M: '14px',
    },

    // radio
    radio: {
        radioSize_L: '20px',
        radioSize_M: '16px',
        radioSizeIndicator_L: '8px',
        radioSizeIndicator_M: '8px',
    },

    // icon
    icon: {
        iconSize_L: '20px',
        iconSize_M: '16px',
    },

    //text
    typography: {
        // size
        text: '14px',
        subText: '12px',
        title_L: '24px',
        title_M: '20px',
        title_S: '16px',
        // line height
        lineHeightText: '18px',
        lineHeightSubText: '16px',
        // font weight
        weightTitle: '700',
        weightItem: '700',
        weightGlobal: '400',
    },

    //box
    box: {
        blurCount: '8px',
        backgroundOpacity: '',

        boxBorderRadius_S: '8px',
        boxBorderRadius_M: '12px',
        boxBorderRadius_L: '20px',

        boxShadow_S: '2px 2px 3px 0px',
        boxShadow_M: '3px 3px 6px 2px',
        boxShadow_L: '4px 4px 12px 5px',

        boxWidth_S: '116px',
        boxWidth_M: '232px',
        boxWidth_L: '464px',
        boxWidth_fit_content: 'fit-content',
        boxWidth_auto: 'auto',
        boxWidth_max: '100%',

        boxPadding_1: '4px',
        boxPadding_2: '8px',
        boxPadding_3: '12px',
        boxPadding_4: '16px',
        boxPadding_5: '20px',
        boxPadding_6: '28px',

        boxGap_1: '4px',
        boxGap_2: '8px',
        boxGap_3: '12px',
        boxGap_4: '20px',
        boxGap_5: '28px',
        boxGap_6: '36px',
    },
    layout: {
        blurCount: '8px',
        backgroundOpacity: '',

        borderRadius: '40px',

        width_L: '1092px',
        width_M: '768px',
        width_S: '100%',

        padding_L: '40px 80px 60px 80px',
        padding_M: '40px 60px 60px 60px',
        padding_S: '24px 20px 36px 20px',

        margin_L: '68px 30px',
        margin_M: '40px 20px',
        margin_S: '40px 15px',
    },
    list: {
        paddingTitle: '4px 28px 4px 16px',
        paddingItem: '8px 12px 8px 16px',
    },
    tooltip: {
        padding: '8px 12px',
        borderRadius: '4px',
        boxShadow: '2px 2px 3px 0px',
    },

    dialog: {
        blurCount: '8px',
        backgroundOpacity: '',
    },

    menu: {
        blurCount: '8px',
        backgroundOpacity: '',
    },

    popup: {
        blurCount: '8px',
        backgroundOpacity: '',
    },
};
