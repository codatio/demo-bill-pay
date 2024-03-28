import * as React from "react";
import type { ClipboardCopyProps } from "../ClipboardCopy";
export interface ClipboardInputProps extends Pick<ClipboardCopyProps, "onCopy" | "onError"> {
    className?: string;
    text?: string;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
}
export declare const ClipboardInput: (props: ClipboardInputProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=ClipboardInput.d.ts.map