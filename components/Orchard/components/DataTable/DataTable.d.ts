/// <reference types="react" />
import { ColumnDefinition, DataDefinition, RowInfo, SortDirection } from "./types";
export interface DataTableProps<T extends DataDefinition[], K> {
    isSkeleton?: boolean;
    skeletonRows?: number;
    skeletonRowHeight?: number;
    skeletonHeaderHeight?: number;
    className?: string;
    /**
     * Automatically size columsn
     */
    isLayoutAuto?: boolean;
    /**
     * Rows of data to be presented in table
     */
    rowsInfo: RowInfo<T>[];
    /**
     * Sort key to identify sorted column
     */
    sortKey?: K;
    /**
     * Specify sort direction to show indicator arrow
     */
    sortDirection?: SortDirection;
    /**
     * Sort handler for click on column header
     */
    onSort?: (key: K) => void;
    /**
     * Column definitions (accepts generic key type)
     */
    columnDefs: ColumnDefinition<K>[];
}
export declare function DataTable<T extends DataDefinition[], K>(props: DataTableProps<T, K>): JSX.Element;
//# sourceMappingURL=DataTable.d.ts.map