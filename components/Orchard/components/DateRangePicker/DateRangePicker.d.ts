import * as React from "react";
import { DateRange } from "@vkbansal/react-date-primitives";
export interface DateRangePickerProps {
    className?: string;
    /** The the number of months to display at once */
    displayMonths?: number;
    /** The start date to initialy show the calendar focused on */
    startDate?: Date;
    /** Show or hide the month picker */
    hideMonthPicker?: boolean;
    /** Show or hide the year picker */
    hideYearPicker?: boolean;
    /** The value of the selection */
    value?: DateRange;
    /** Fired when selection changes or is hovered */
    onValueChange?: (value: DateRange) => void;
    /** Fired when a selection has finished */
    onRangeSelected?: (value: DateRange) => void;
    /** Bounding range to allow date picking from */
    boundingRange?: DateRange;
    /** Highlight todays date */
    highlightToday?: boolean;
}
export declare const DateRangePicker: (props: DateRangePickerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=DateRangePicker.d.ts.map