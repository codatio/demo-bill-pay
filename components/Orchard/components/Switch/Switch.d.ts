import * as React from "react";
export interface SwitchProps {
    /**
     * Control the input on/off state
     */
    isChecked: boolean;
    /**
     * Specify a label to associate with switch button
     */
    label?: string;
    /**
     * Click handler for button
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Readonly state
     */
    readonly?: boolean;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
    className?: string;
    labelClassName?: string;
    buttonClassName?: string;
}
export declare const Switch: (props: Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, keyof SwitchProps> & SwitchProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=Switch.d.ts.map