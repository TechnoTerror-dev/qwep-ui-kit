import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import { SPopup, TPopup } from '../popup/Popup';
import { EBoxProps } from '@src/lib/types/TypeBox';

type PopupHoverProps = {
    delay?: number;
} & TPopup.Main;
export const PopupHover = React.memo(
    React.forwardRef<HTMLButtonElement, PopupHoverProps>(
        (
            {
                trigger,
                bg,
                bgStyles,

                delay = 300,
                boxShadowColor,
                boxWidthVariant,
                boxShadowVariant = EBoxProps.BoxShadowVariant.ShdM,
                boxRadiusVariant = EBoxProps.BoxRadiusVariant.BrM,
                boxPaddingVariant = EBoxProps.BoxPaddingVariant.P3,
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
            const styles = useStyleScheme(['mr', 'box', 'typography', 'popup'], $styles);
            const isHovering = React.useRef(false);

            const handleMouseEnter = () => {
                if (closeTimeout.current) {
                    clearTimeout(closeTimeout.current);
                    closeTimeout.current = null;
                }
                isHovering.current = true;
                setIsOpen(true);
            };

            const handleMouseLeave = () => {
                closeTimeout.current = setTimeout(() => {
                    isHovering.current = false;
                    setIsOpen(false);
                }, delay);
            };

            // **Фикс проблемы с кликом**
            const handleTriggerClick = (e: React.MouseEvent) => {
                if (isHovering.current) {
                    e.preventDefault();
                    e.stopPropagation();
                }
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
                        onClick={handleTriggerClick}
                    >
                        {trigger}
                    </SPopup.Trigger>
                    <SPopup.Portal {...portalProps}>
                        <SPopup.Content
                            $bgStyles={bgStyles}
                            $colors={colors}
                            $styles={styles}
                            $bg={bg}
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
                            style={{ pointerEvents: 'auto' }} // Гарантируем, что popup не блокирует триггер
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
