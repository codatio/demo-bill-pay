import * as React from "react";
import { SortDirection } from "./types";
declare type TableHeaderProps<K> = {
    /**
     * Optional class name for the header
     */
    className?: string;
    /**
     * Column header label
     */
    label: string;
    /**
     * Specify optional percentage width of column
     */
    colWidth?: number;
    /**
     * Is column sortable?
     */
    isSort: boolean;
    /**
     * Sort key of column
     */
    sortKey?: K;
    /**
     * Sort direction of table
     */
    sortDirection?: SortDirection;
    /**
     * Sort key of table
     */
    currentSortKey?: K;
    /**
     * Click handler for sorting
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
declare type Props<K> = TableHeaderProps<K> & React.ComponentPropsWithRef<"th">;
declare function TableHeader<K>(props: Props<K>): JSX.Element;
export default TableHeader;
//# sourceMappingURL=TableHeader.d.ts.map