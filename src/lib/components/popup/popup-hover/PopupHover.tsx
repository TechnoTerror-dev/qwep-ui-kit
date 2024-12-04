import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import { SPopup, TPopup } from '../popup/Popup';

type PopupHoverProps = {
    delay?: number;
} & TPopup.Main;
export const PopupHover = React.memo(
    React.forwardRef<HTMLButtonElement, PopupHoverProps>(
        (
            {
                trigger,
                bg,

                delay = 300,
                boxBorderColor,
                boxShadowColor,
                boxShadowVariant = 'shd-2',
                boxRadiusVariant = 'br-2',
                boxWidthVariant,
                boxPaddingVariant = 'p-3',
                boxGapVariant,
                boxDisplay,

                $colors,
                $styles,
                triggerProps,
                portalProps,
                contentProps,

                ...rest
            },
            ref
        ) => {
            const [isOpen, setIsOpen] = React.useState(false);
            const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'typography'], $styles);

            const handleMouseEnter = () => {
                if (closeTimeout.current) {
                    clearTimeout(closeTimeout.current);
                    closeTimeout.current = null;
                }
                setIsOpen(true);
            };

            const handleMouseLeave = () => {
                closeTimeout.current = setTimeout(() => {
                    setIsOpen(false);
                }, delay);
            };

            React.useEffect(() => {
                return () => {
                    if (closeTimeout.current) {
                        clearTimeout(closeTimeout.current);
                    }
                };
            }, []);

            return (
                <SPopup.Root open={isOpen} onOpenChange={setIsOpen} {...rest}>
                    <SPopup.Trigger
                        ref={ref}
                        {...triggerProps}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {trigger}
                    </SPopup.Trigger>
                    <SPopup.Portal {...portalProps}>
                        <SPopup.Content
                            $colors={colors}
                            $styles={styles}
                            $bg={bg}
                            $boxBorderColor={boxBorderColor}
                            $boxShadowColor={boxShadowColor}
                            $boxShadowVariant={boxShadowVariant}
                            $boxRadiusVariant={boxRadiusVariant}
                            $boxWidthVariant={boxWidthVariant}
                            $boxPaddingVariant={boxPaddingVariant}
                            $boxGapVariant={boxGapVariant}
                            $boxDisplay={boxDisplay}
                            sideOffset={8}
                            {...contentProps}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {rest.children}
                        </SPopup.Content>
                    </SPopup.Portal>
                </SPopup.Root>
            );
        }
    )
);

//export type
export namespace TPopupHover {
    export type Main = PopupHoverProps;
}
