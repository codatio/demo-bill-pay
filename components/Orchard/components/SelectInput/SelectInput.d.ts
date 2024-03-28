import * as React from "react";
import { Options } from "@popperjs/core";
import { PopoverSize } from "../Popover/Popover";
export declare type SelectInputVariant = "default" | "small";
export declare type SelectInputValue = {
    label: string;
    value: string;
};
export interface SharedSelectProps {
    className?: string;
    placeholder?: string;
    isSkeleton?: boolean;
    popperOptions?: Partial<Options>;
    popoverSize?: PopoverSize;
}
export interface SelectInputProps extends React.ComponentPropsWithRef<"button">, SharedSelectProps {
    items: SelectInputValue[];
    labelClassName?: string;
    label?: string;
    /**
     * Set input to error state
     */
    error?: boolean;
    /**
     * Specify an error message to display next to input
     */
    errorMessage?: string;
    initialSelectedItem?: SelectInputValue;
    variant?: SelectInputVariant;
    handleSelectedItemChange?: (selectedItem: SelectInputValue | null | undefined) => void;
    "data-testid"?: string;
}
export declare const SelectInput: (props: SelectInputProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=SelectInput.d.ts.map