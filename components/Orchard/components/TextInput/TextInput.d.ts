import * as React from "react";
declare type TextInputVariant = "default" | "small";
export interface TextInputProps extends React.ComponentPropsWithRef<"input"> {
    /**
     * Specify an optional className to be applied to the container node
     */
    className?: string;
    /**
     * Specify an optional className to be applied to the label node
     */
    labelClassName?: string;
    /**
     * Specify an optional className to be applied to the input node
     */
    inputClassName?: string;
    /**
     * Provide an optional label
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
     * Icon component aligned to right
     */
    iconRight?: React.ReactNode;
    /**
     * Specify an optional className to be applied to the right icon
     */
    iconRightClassName?: string;
    /**
     * Icon component aligned to left
     */
    iconLeft?: React.ReactNode;
    /**
     * Specify an optional className to be applied to the left icon
     */
    iconLeftClassName?: string;
    /**
     * Click handler for icon
     */
    onClickIcon?: () => void;
    /**
     * Optional variant
     */
    variant?: TextInputVariant;
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
    /**
     * Focus the input box on control click
     */
    focusOnControlClick?: boolean;
}
export declare const TextInput: (props: TextInputProps & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=TextInput.d.ts.map