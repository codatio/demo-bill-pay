import * as React from "react";
import { PointTooltipProps, Serie } from "@nivo/line";
import { ChoroplethBoundFeature } from "@nivo/geo";
import { BarDatum, BarTooltipProps } from "@nivo/bar";
import { BarChartData } from "../BarChart/types";
import { PieDataShape } from "../PieChart/types";
import { PieTooltipProps } from "@nivo/pie";
export interface LineChartTooltipProps extends PointTooltipProps {
    data: Serie[];
    className?: string;
    formatTooltipItem?: (value: string | number | Date | null | undefined) => string;
}
export interface GeoChartTooltipProps extends ChoroplethBoundFeature {
    data: {
        id: string;
        value: number;
    }[];
    showAbsolute?: boolean;
    className?: string;
    id?: string;
    properties?: {
        name: string;
    };
}
export interface BarChartTooltipProps extends Omit<BarTooltipProps<BarDatum>, "data"> {
    className?: string;
    data: BarChartData;
}
export interface PieChartTooltipProps extends PieTooltipProps<PieDataShape> {
    className?: string;
}
declare const _default: {
    Line: (props: LineChartTooltipProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    Geo: (props: GeoChartTooltipProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    Bar: (props: BarChartTooltipProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
    Pie: (props: PieChartTooltipProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
};
export default _default;
//# sourceMappingURL=ChartTooltip.d.ts.map