import * as React from "react";
import { Options } from "@popperjs/core";
export declare type PopoverSize = "fixed" | "large" | "full" | "auto";
export declare type PopoverProps = {
    onClose: () => void;
    isOpen: boolean;
    /**
     * @deprecated use size instead
     */
    fullWidth?: boolean;
    size?: PopoverSize;
    disableOverlay?: boolean;
    /**
     * Disable scale up transition
     */
    disableScale?: boolean;
    anchorElement?: HTMLElement;
    popperOptions?: Partial<Options>;
    className?: string;
    popoverClassName?: string;
};
export declare const Popover: (props: PopoverProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=Popover.d.ts.map