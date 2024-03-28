import * as React from "react";
export interface CircleIconProps {
    icon: React.ComponentType<{
        fillColor?: string;
    }>;
    className?: string;
    backgroundColor?: string;
    color?: string;
}
export declare const CircleIcon: (props: CircleIconProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=CircleIcon.d.ts.map