import { SimpleTooltip, SSimpleTooltip, TSimpleTooltip } from './simple-tooltip/SimpleTooltip';
import { BaseTooltip, SBaseTooltip, TBaseTooltip } from './base-tooltip/BaseTooltip';
import { SBaseTooltipComponent, TBaseTooltipComponent } from './base-tooltip/BaseTooltipComponent';
import { Copy } from '@src/lib/types/CopyType';

export { SimpleTooltip, BaseTooltip };

export const TooltipStyledComponent = {
    BaseTooltipComponent: SBaseTooltipComponent,
    BaseTooltip: SBaseTooltip,
    SimpleTooltip: SSimpleTooltip,
};

export namespace TypeTooltip {
    export namespace BaseTooltipComponent {
        export type SContent = Copy<TBaseTooltipComponent.SContent>;
    }

    export namespace BaseTooltip {
        export type Main = Copy<TBaseTooltip.Main>;
        export type Styles = Copy<TBaseTooltip.Styles>;
        export type SContent = Copy<TBaseTooltip.SContent>;
        export type STrigger = Copy<TBaseTooltip.STrigger>;
        export type SRoot = Copy<TBaseTooltip.SRoot>;
        export type SPortal = Copy<TBaseTooltip.SPortal>;
        export type SProvider = Copy<TBaseTooltip.SProvider>;
    }

    export namespace SimpleTooltip {
        export type Main = Copy<TSimpleTooltip.Main>;
        export type SContent = Copy<TSimpleTooltip.SContent>;
        export type SProvider = Copy<TSimpleTooltip.SProvider>;
        export type STrigger = Copy<TSimpleTooltip.STrigger>;
        export type SRoot = Copy<TSimpleTooltip.SRoot>;
        export type SPortal = Copy<TSimpleTooltip.SPortal>;
    }
}
