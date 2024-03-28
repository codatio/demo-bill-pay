import * as React from "react";
export interface PaginationContentProps {
    className?: string;
    total: number;
    pageIndex: number;
    perPage: number;
    perPageOptions: string[];
    onSelectPerPage: (perPage: string) => void;
    onPrev: () => void;
    onNext: () => void;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
    /**
     * Pagination accessibility label
     */
    label?: string;
}
export declare const PaginationContent: React.FC<PaginationContentProps>;
//# sourceMappingURL=PaginationContent.d.ts.map