import * as React from "react";
import { DateRange } from "@vkbansal/react-date-primitives";
export interface YearPickerProps {
    className?: string;
    selectedDate?: Date;
    boundingRange?: DateRange;
    numYears?: number;
    onYearSelect?: (date: Date) => void;
}
export declare const YearPicker: (props: YearPickerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=YearPicker.d.ts.map