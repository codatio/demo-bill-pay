import * as React from "react";
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Specify an optional className to be applied to the container node
     */
    className?: string;
    /**
     * Specify a thin circle border
     */
    hasBorder?: boolean;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
    /**
     * Accessiblity label to identify button
     */
    label: string;
}
export declare const IconButton: (props: IconButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=IconButton.d.ts.map