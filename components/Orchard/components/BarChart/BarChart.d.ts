import * as React from "react";
import { BarSvgProps, BarDatum } from "@nivo/bar";
import { BarChartData } from "./types";
declare type Props<T extends BarDatum = BarDatum> = Omit<BarSvgProps<T>, "data" | "height" | "width">;
export interface BarChartProps extends Props {
    className?: string;
    showTooltip?: boolean;
    data: BarChartData;
}
export declare const BarChart: (props: BarChartProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=BarChart.d.ts.map