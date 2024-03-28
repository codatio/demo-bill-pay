import * as React from "react";
declare type PillVariant = "default" | "small";
export interface PillProps {
    /**
     * Variant for pill sizing
     */
    variant?: PillVariant;
    /**
     * The label at the top of the pill
     */
    label: string;
    /**
     * Content to display in the body of pill
     */
    content: string;
    /**
     * Passing in a click handler will render an arrow button
     */
    onClick?: () => void;
    /**
     * Passing in a label icon click handler will render an info button
     */
    onClickInfo?: () => void;
    /**
     * Passing in a label icon click handler will render an alert button
     */
    onClickAlert?: () => void;
    /**
     * Specify an optional className to be applied to the container node
     */
    className?: string;
    /**
     * Set to skeleton mode
     */
    isSkeleton?: boolean;
    /**
     * ref to pass to the indicator component
     */
    indicatorRef?: React.Ref<HTMLButtonElement>;
}
export declare const Pill: (props: PillProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=Pill.d.ts.map