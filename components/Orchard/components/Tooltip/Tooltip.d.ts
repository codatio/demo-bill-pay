import * as React from "react";
import { Placement } from "@popperjs/core";
declare type TooltipVariant = "default" | "strong";
export interface TooltipProps extends React.ComponentPropsWithRef<"div"> {
    isOpen: boolean;
    variant?: TooltipVariant;
    anchorElement?: HTMLElement;
    distance?: number;
    placement?: Placement;
    className?: string;
    onEnter?: () => void;
    onLeave?: () => void;
}
interface TooltipContentProps {
    title?: React.ReactNode;
}
export declare const TooltipContent: React.FC<TooltipContentProps>;
export declare const Tooltip: React.FC<TooltipProps>;
export {};
//# sourceMappingURL=Tooltip.d.ts.map