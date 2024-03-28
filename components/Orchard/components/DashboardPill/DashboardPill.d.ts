import * as React from "react";
export interface DashboardPillProps {
    className?: string;
    title: string;
    body: string;
    percentage?: number;
    colorA?: string;
    colorB?: string;
    isSkeleton?: boolean;
    onClick?: () => void;
}
export declare const DashboardPill: (props: DashboardPillProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=DashboardPill.d.ts.map