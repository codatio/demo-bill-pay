import React from "react";
import { RangeMonth, DateRange, DayOfMonth } from "@vkbansal/react-date-primitives";
export interface BaseMonthProps {
    /** The bounding range */
    boundingRange: DateRange;
    /** Fired when the previous month arrow is clicked */
    onPreviousClick(): void;
    /** Fired when the next month arrow is clicked */
    onNextClick(): void;
    /** Fired when a month is selected */
    onMonthSelect?(date: Date): void;
    /** Fired when a year is selected */
    onYearSelect?(date: Date): void;
    /** Show or hide the month picker */
    hideMonthPicker?: boolean;
    /** Show or hide the year picker */
    hideYearPicker?: boolean;
    /** Show or hide the previous month arrow */
    showPrevious?: boolean;
    /** Show or hide the next month arrow */
    showNext?: boolean;
    /** The number of years to show in the year picker */
    numYears?: number;
    /** Highlight todays date */
    highlightToday?: boolean;
}
export interface RangeMonthProps extends BaseMonthProps {
    type: "range";
    /** The current display month */
    rangeMonth: RangeMonth;
    /** Fired when the range is selected or hovered */
    setRange(range: DateRange): void;
    /** Fired when a selection has finished */
    onRangeSelect?(range: DateRange): void;
    /** The current selected range */
    range: DateRange;
    /** Is a selection currently active */
    isSelectionActive: boolean;
    /** Sets if the selection is active */
    setSelectionActive(status: boolean): void;
}
export interface SingleMonthProps extends BaseMonthProps {
    type: "single";
    /** The current display month */
    month: Date;
    /** The selected value */
    value?: Date;
    /** The days in the current month */
    days: DayOfMonth[];
    /** called when a date is selected */
    setDate(date: Date): void;
}
export declare type MonthProps = RangeMonthProps | SingleMonthProps;
export declare const Month: (props: MonthProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=Month.d.ts.map