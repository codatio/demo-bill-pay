import React from "react";
export interface FloatingElementProps {
    parent: HTMLElement;
    relativeTo: RelativePosition;
    offset?: Position;
}
declare type Position = {
    x: number;
    y: number;
};
export declare enum RelativePosition {
    TopLeft = "TopLeft",
    TopRight = "TopRight",
    BottomLeft = "BottomLeft",
    BottomRight = "BottomRight"
}
export declare const FloatingElement: React.FC<React.PropsWithChildren<FloatingElementProps>>;
export {};
//# sourceMappingURL=index.d.ts.map