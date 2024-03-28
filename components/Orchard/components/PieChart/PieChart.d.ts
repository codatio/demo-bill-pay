import * as React from "react";
import { PieCustomLayer, PieSvgProps } from "@nivo/pie";
import { ValueFormat } from "@nivo/core";
import { PieDataShape } from "./types";
declare type Props<T = PieDataShape> = Omit<PieSvgProps<T>, "height" | "width">;
export interface PieChartProps extends Props {
    className?: string;
    showTooltip?: boolean;
    showCenterTooltip?: boolean;
}
declare type CustomChartDataContextType = {
    tooltip?: PieDataShape;
    valueFormat?: ValueFormat<number>;
};
export declare const CustomChartDataContext: React.Context<CustomChartDataContextType>;
export declare const CenteredMetric: PieCustomLayer<PieDataShape>;
export declare const PieChart: (props: PieChartProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=PieChart.d.ts.map