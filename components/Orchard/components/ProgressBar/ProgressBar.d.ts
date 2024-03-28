import * as React from "react";
export interface ProgressBarProps {
    /**
     * Fraction of the width of the bar to be filled.
     * Number should be between 0 and 1.
     */
    progress: number;
    color?: string;
}
export declare const ProgressBar: (props: Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, keyof ProgressBarProps> & ProgressBarProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=ProgressBar.d.ts.map