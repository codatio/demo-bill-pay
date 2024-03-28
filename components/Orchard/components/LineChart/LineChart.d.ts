import * as React from "react";
import { LineSvgProps } from "@nivo/line";
import type { LineChartTooltipProps } from "../ChartTooltip";
declare type Props = Pick<LineChartTooltipProps, "formatTooltipItem"> & LineSvgProps;
export interface LineChartProps extends Props {
    className?: string;
    showTooltip?: boolean;
}
export declare const LineChart: (props: LineChartProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=LineChart.d.ts.map