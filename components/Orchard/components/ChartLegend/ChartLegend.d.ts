import React from "react";
export interface ChartLegendProps {
    /**
     * Data series to be displayed in the legend
     */
    data: {
        color: string;
        label: string;
        value: string;
    }[];
    /**
     * Title for the dataset
     */
    title: string;
}
export declare const ChartLegend: React.FC<ChartLegendProps>;
//# sourceMappingURL=ChartLegend.d.ts.map