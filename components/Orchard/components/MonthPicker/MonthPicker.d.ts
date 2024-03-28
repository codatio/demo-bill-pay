import * as React from "react";
import { DateRange } from "@vkbansal/react-date-primitives";
export interface MonthPickerProps {
    className?: string;
    selectedDate?: Date;
    boundingRange?: DateRange;
    onMonthSelect?: (date: Date) => void;
    onYearSelect?: (date: Date) => void;
    hideYearPicker?: boolean;
    isPopover?: boolean;
    onOpenYearPicker?: () => void;
    numYears?: number;
}
export declare const MonthPicker: (props: MonthPickerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=MonthPicker.d.ts.map