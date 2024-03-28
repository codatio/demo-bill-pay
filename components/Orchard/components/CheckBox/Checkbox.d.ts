import React from "react";
export interface CheckboxProps {
    /**
     * ID for the component. This must be unique for the checkbox to work.
     */
    id: string;
    /**
     * Display label for the checkbox
     */
    label?: string;
    isSkeleton?: boolean;
    labelClassName?: string;
    checkClassName?: string;
    wrapperClassName?: string;
}
export declare const Checkbox: (props: Omit<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
}, keyof CheckboxProps> & CheckboxProps & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=Checkbox.d.ts.map