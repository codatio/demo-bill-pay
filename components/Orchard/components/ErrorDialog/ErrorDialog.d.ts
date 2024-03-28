import * as React from "react";
export declare const ERROR_404 = "Page doesn't exist";
export declare const ERROR_GENERIC = "Something went wrong";
export interface ErrorDialogProps {
    /**
     * Status code of error
     */
    statusCode: number;
    /**
     * Correlation id of error
     */
    correlationId?: string;
    /**
     * Additional information message
     */
    message?: string;
    /**
     * Specify a custom class name
     */
    className?: string;
    /**
     * Specify whether to wrap in Card component
     */
    isCard?: boolean;
}
export declare const ErrorDialog: React.FC<ErrorDialogProps>;
//# sourceMappingURL=ErrorDialog.d.ts.map