import React from "react";
import type { ToastCombination, ToastCTA, ToastInfo, ToastVariant } from "./Toast.reducer";
import { SpringValue } from "react-spring";
export interface ToastProps {
    message: string;
    subText?: string;
    ctas?: ToastCTA[];
    combination?: ToastCombination;
    combinations?: ToastInfo[];
    removeDelay?: number;
    id: string;
    removeToast: (id: string) => void;
    variant?: ToastVariant;
    className?: string;
    contentClassName?: string;
    stackHeight: number;
    removed?: boolean;
    transition: {
        transform: SpringValue<string>;
    };
}
export declare function Toast({ className, contentClassName, message, id, subText, ctas, removeDelay: removeDelayProp, combination, combinations, removeToast, variant, transition, stackHeight, removed, }: React.PropsWithChildren<ToastProps>): JSX.Element;
//# sourceMappingURL=Toast.d.ts.map