import * as React from "react";
export interface ClipboardCopyProps {
    className?: string;
    text: string;
    onCopy?: (text: string) => void;
    onError?: (e: Error) => void;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
    /**
     * Accessiblity label
     */
    label?: string;
}
export declare const ClipboardCopy: (props: ClipboardCopyProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=ClipboardCopy.d.ts.map