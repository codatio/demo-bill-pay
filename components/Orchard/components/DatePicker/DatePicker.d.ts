import * as React from "react";
import { DateRange } from "@vkbansal/react-date-primitives";
export interface DatePickerProps {
    className?: string;
    /** The start date to initialy show the calendar focused on */
    startDate?: Date;
    /** Show or hide the month picker */
    hideMonthPicker?: boolean;
    /** Show or hide the year picker */
    hideYearPicker?: boolean;
    /** The value of the selection */
    value?: Date;
    /** Fired when selection changes */
    onValueChange?: (value: Date) => void;
    /** Bounding range to allow date picking from */
    boundingRange?: DateRange;
    /** Highlight todays date */
    highlightToday?: boolean;
}
export declare const DatePicker: (props: DatePickerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=DatePicker.d.ts.map