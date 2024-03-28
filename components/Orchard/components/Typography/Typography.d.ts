import * as React from "react";
declare type TypographyVariantElement = "h1" | "h2" | "h3" | "h4" | "p";
declare type TypographyVariantOther = "small" | "extraSmall" | "large" | "extraLarge";
declare type TypographyVariant = TypographyVariantElement | TypographyVariantOther;
/**
 * Typography custom props
 */
export declare type TypographyProps = {
    /**
     * Specify to render as skeleton
     */
    isSkeleton?: boolean;
    /**
     * Specify a skeleton width
     */
    skeletonWidth?: string | number;
    /**
     * Specify a skeleton height
     */
    skeletonHeight?: string | number;
    /**
     * Variant is the element type of typography
     */
    variant?: TypographyVariant;
};
export declare function Typography(props: React.ComponentPropsWithRef<TypographyVariantElement> & TypographyProps): JSX.Element;
export {};
//# sourceMappingURL=Typography.d.ts.map