import React from "react";
import { CallToAction } from "./CtaSection";
export declare type ModalBodyProps = React.PropsWithChildren<{
    className?: string;
    title: string;
    subtitle?: string;
    size: "small" | "medium" | "large";
    onClose?: () => void;
    callToAction?: CallToAction;
    includeHeaderDivider?: boolean;
    headerIcon?: React.ComponentType<{
        fillColor?: string;
    }>;
    headerIconColor?: string;
    centerAlign?: boolean;
}>;
export declare const ModalBody: (props: {
    className?: string | undefined;
    title: string;
    subtitle?: string | undefined;
    size: "small" | "medium" | "large";
    onClose?: (() => void) | undefined;
    callToAction?: CallToAction | undefined;
    includeHeaderDivider?: boolean | undefined;
    headerIcon?: React.ComponentType<{
        fillColor?: string | undefined;
    }> | undefined;
    headerIconColor?: string | undefined;
    centerAlign?: boolean | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=ModalBody.d.ts.map