import * as React from "react";
declare type TextAreaProps = {
    /**
     * Specify a class to override container styles
     */
    containerClassName?: string;
    /**
     * Specify a class to override label styles
     */
    labelClassName?: string;
    /**
     * Specify a label for the textarea
     */
    label?: string;
    /**
     * Set input to error state
     */
    error?: boolean;
    /**
     * Specify an error message to display next to input
     */
    errorMessage?: string;
    /**
     * Skeleton mode
     */
    isSkeleton?: boolean;
    /**
     * Show character count
     */
    showCharacterCount?: boolean;
    /**
     * Alignment of character counter
     */
    characterCountAlign?: "left" | "right";
};
export declare type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaProps;
export declare const TextArea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaProps & React.RefAttributes<HTMLTextAreaElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=TextArea.d.ts.map