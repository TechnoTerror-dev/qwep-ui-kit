export type Hex = `#${string}`;

export type TypeColorScheme = {
    primary: Hex;
    secondary: Hex;
    system: Hex;

    //other
    lightShadow: Hex;
    lightElem: Hex;
    backgroundInfo: Hex;
    backgroundSuccess: Hex;
    backgroundWarning: Hex;
    backgroundError: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;

    //base
    background: Hex;
    layoutBox: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;
    shadowColor: Hex;

    //text
    title: Hex;
    text: Hex;
    subText: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    tableText: Hex;
    subTextPink: Hex;
    subTextEvergreen: Hex;

    //icon
    iconGroup: Hex;
    iconsOrange: Hex;
    iconsRed: Hex;
    iconsGreen: Hex;

    //backgrounds
    backgroundHeaderCards: Hex;
    backgroundLightRed: Hex;
    backgroundOrdersGreen: Hex;
    backgroundOrdersGrey: Hex;
    backgroundElementsBlueGrey: Hex;
    backgroundElementsOrange: Hex;
    backgroundElementsGreen: Hex;

    //table backgrounds
    backgroundTableBlue: Hex;
    backgroundTableGreen: Hex;
    backgroundTableGrey: Hex;
    backgroundTableLightGrey: Hex;
    backgroundTableOrange: Hex;
    backgroundTableEvergreen: Hex;
    backgroundTablePink: Hex;
    backgroundTableRed: Hex;

    //elements
    secondaryElements: Hex;

    //general
    alpha: Hex;
    omega: Hex;
} & {
    [key: string]: Hex;
};

export const colorsLight: TypeColorScheme = {
    primary: '#2563EB',
    secondary: '#EFF6FF',
    system: '#E2E8F0',

    //other
    lightShadow: '#AABDE840',
    lightElem: '#A9C1CF',
    backgroundInfo: '#BFDBFE',
    backgroundSuccess: '#BBF7D0',
    backgroundWarning: '#FED7AA',
    backgroundError: '#FECACA',

    //items
    primaryItem: '#2563EB',
    primaryItemActive: '#1D4ED8',
    successItem: '#16A34A',
    successItemActive: '#15803D',
    infoItem: '#1E40AF',
    infoItemActive: '#18338C',
    errorItem: '#DC2626',
    errorItemActive: '#B91C1C',
    warningItem: '#EA580C',
    warningItemActive: '#C2410C',

    //base
    background: '#CBD5E1',
    layoutBox: '#ffffff',
    backgroundBox: '#ffffff',
    backgroundTooltip: '#1f1f1f',
    disabled: '#B9BCBE',
    shadowColor: '#002B4D40',

    //text
    title: '#1A242A',
    text: '#1A242A',
    subText: '#475569',
    textItem: '#F5F5F5',
    link: '#2563EB',
    linkActive: '#1D4ED8',
    tableText: '#121923',
    subTextPink: '#DB2777',
    subTextEvergreen: '#0A9588',

    //icon
    iconGroup: '#64748B',
    iconsOrange: '#FB923C',
    iconsRed: '#EF4444',
    iconsGreen: '#22C55E',

    //backgrounds
    backgroundHeaderCards: '#ffffff',
    backgroundLightRed: '#FEF2F2',
    backgroundOrdersGreen: '#DCFCE7',
    backgroundOrdersGrey: '#E2E8F0',
    backgroundElementsBlueGrey: '#2563EB20',
    backgroundElementsOrange: '#FFF7ED',
    backgroundElementsGreen: '#F0FDF4',

    //table backgrounds
    backgroundTableBlue: '#DBEAFE',
    backgroundTableGreen: '#BBF7D0',
    backgroundTableGrey: '#F3F4F6',
    backgroundTableLightGrey: '#F8FAFC',
    backgroundTableOrange: '#FFEDD5',
    backgroundTableEvergreen: '#E6F7F4',
    backgroundTablePink: '#FCE7F3',
    backgroundTableRed: '#FEE2E2',

    //elements
    secondaryElements: '#3B82F6',

    //general
    alpha: '#ffffff',
    omega: '#000000',
};

export const colorsDark: TypeColorScheme = {
    primary: '#3B82F6',
    secondary: '#334155',
    system: '#475569',

    //other
    lightElem: '#94A3B8',
    lightShadow: '#00000000',
    backgroundInfo: '#18338C',
    backgroundSuccess: '#12512A',
    backgroundWarning: '#7B2A0E',
    backgroundError: '#7A1616',

    //items
    primaryItem: '#3B82F6',
    primaryItemActive: '#2563EB',
    successItem: '#22C55E',
    successItemActive: '#16A34A',
    infoItem: '#60A5FA',
    infoItemActive: '#3B82F6',
    errorItem: '#EF4444',
    errorItemActive: '#DC2626',
    warningItem: '#F97316',
    warningItemActive: '#EA580C',

    //base
    background: '#121923',
    layoutBox: '#1E293B',
    backgroundBox: '#1E293B',
    backgroundTooltip: '#334155',
    disabled: '#64748B',
    shadowColor: '#00000000',

    //text
    title: '#F8FAFC',
    text: '#A9C1CF',
    subText: '#F3F4F6',
    textItem: '#F8FAFC',
    link: '#3B82F6',
    linkActive: '#2563EB',
    tableText: '#F8FAFC',
    subTextPink: '#F472B6',
    subTextEvergreen: '#5ED1C1',

    //icon
    iconGroup: '#A9C1CF',
    iconsOrange: '#F97316',
    iconsRed: '#EF4444',
    iconsGreen: '#22C55E',

    //backgrounds
    backgroundHeaderCards: '#121923',
    backgroundLightRed: '#7A161699',
    backgroundOrdersGreen: '#16653499',
    backgroundOrdersGrey: '#47556999',
    backgroundElementsBlueGrey: '#3B82F620',
    backgroundElementsOrange: '#7B2A0E99',
    backgroundElementsGreen: '#12512A99',

    //table backgrounds
    backgroundTableBlue: '#18338C99',
    backgroundTableGreen: '#16653499',
    backgroundTableGrey: '#33415599',
    backgroundTableLightGrey: '#12192399',
    backgroundTableOrange: '#7B2A0E99',
    backgroundTableEvergreen: '#07776F99',
    backgroundTablePink: '#7E123E99',
    backgroundTableRed: '#7A161699',

    //elements
    secondaryElements: '#60A5FA',

    //general
    alpha: '#ffffff',
    omega: '#000000',
};
