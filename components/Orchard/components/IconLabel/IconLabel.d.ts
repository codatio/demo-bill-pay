import React from "react";
export interface IconLabelProps {
    /**
     * Specify the label
     */
    label?: string;
    /**
     * Optional description text
     */
    description?: string;
    /**
     * Specify an optional className applied to the container node
     */
    className?: string;
    /**
     * Specify an optional className applied to the container node
     */
    labelClassName?: string;
    /**
     * Specify an optional className applied to the container node
     */
    descriptionClassName?: string;
    /**
     * Specify an optional click handler for interactivity
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
    /**
     * Skeleton width of label
     */
    labelSkeletonWidth?: string;
    /**
     * Skeleton width of description
     */
    descSkeletonWidth?: string;
    children?: React.ReactNode;
}
export declare const IconLabel: (props: IconLabelProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=IconLabel.d.ts.map