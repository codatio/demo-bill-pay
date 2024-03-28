/// <reference types="react" />
export declare type SortDirection = "asc" | "desc";
export declare type DataDefinition<T = any> = {
    value: T;
};
export declare type ColumnDefinition<K> = {
    key: K;
    label: string;
    component: React.ComponentType<DataDefinition>;
    className?: string;
    sortable?: boolean;
    /**
     * Specify an optional percentage width for column
     */
    colWidth?: number;
};
export declare type RowInfo<T> = {
    data: T;
    onClick?: () => void;
};
//# sourceMappingURL=types.d.ts.map