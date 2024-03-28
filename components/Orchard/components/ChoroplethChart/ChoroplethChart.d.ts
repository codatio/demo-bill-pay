import * as React from "react";
import { ChoroplethCommonProps } from "@nivo/geo";
declare type Props = Omit<ChoroplethCommonProps, "features" | "data" | "domain">;
declare type ChartData = {
    countryCode: string;
    value: number;
};
export interface ChoroplethChartProps extends Props {
    className?: string;
    /**
     * Enables interactivity and shows a contextual tooltip on hover of a country.
     */
    showTooltip?: boolean;
    /**
     * Whether or not to show absolute or formatted values on the tooltip.
     */
    showAbsoluteTooltip?: boolean;
    /**
     * Whether or not to show the color legend.
     */
    showLegend?: boolean;
    /**
     * The GeoJSON object to build the chart data from.
     */
    geoJson: Record<string, unknown>;
    /**
     * The chart data.
     */
    data: ChartData[];
    /**
     * The minimum value of the color range.
     */
    min: number;
    /**
     * The maximum value of the color range.
     */
    max: number;
}
export declare const ChoroplethChart: (props: ChoroplethChartProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=ChoroplethChart.d.ts.map