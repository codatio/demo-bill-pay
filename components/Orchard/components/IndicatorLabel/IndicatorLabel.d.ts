import * as React from "react";
export interface IndicatorLabelProps {
    className?: string;
    label: string;
    color?: string;
    /**
     * Specify dot colour to show dot in top right
     */
    dotColor?: string;
    isSkeleton?: boolean;
}
export declare const IndicatorLabel: (props: IndicatorLabelProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=IndicatorLabel.d.ts.map