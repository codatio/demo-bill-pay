import * as React from "react";
export interface PaginationProps {
    /**
     * Total number of items to paginate
     */
    total: number;
    /**
     * Amount of items per page
     */
    perPage: number;
    /**
     * List of options for items per page
     */
    perPageOptions: number[];
    /**
     * Current page index - '1' indexed
     */
    pageIndex: number;
    /**
     * Callback on page index update
     */
    onUpdatePageIndex: (newPageIndex: number) => void;
    /**
     * Callback on per page update
     */
    onUpdatePerPage: (newPerPage: number) => void;
    /**
     * If component is in a loading state
     */
    isSkeleton?: boolean;
    /**
     * Accessibilty label
     */
    label?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map