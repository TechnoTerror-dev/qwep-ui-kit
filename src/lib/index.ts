import { TIconContainer } from './icons/IconSVGContainer';
import { EAvatarProps, TAvatarProps } from './types/TypeAvatar';
import { EBaseProps, TBaseProps } from './types/TypeBase';
import { EBoxProps, TBoxProps } from './types/TypeBox';
import { EButtonProps, TButtonProps } from './types/TypeBtn';
import { EIconProps, TIconProps } from './types/TypeIcon';
import { EInputProps, TInputProps } from './types/TypeInp';
import { ETextProps, TTextProps } from './types/TypeText';

export * from './components/index';
export * as General from './general';
export * as Icon from './icons';
export * as Common from './common-styled-component';

//Base enums
export { EAvatarProps, EBaseProps, EBoxProps, EButtonProps, EIconProps, EInputProps, ETextProps };

//Base types
export type { TAvatarProps, TBaseProps, TBoxProps, TButtonProps, TIconProps, TInputProps, TTextProps, TIconContainer };
