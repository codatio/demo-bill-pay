import * as React from "react";
declare type ButtonVariant = "primary" | "secondary";
declare type SpinnerAlign = "centre" | "left" | "right";
declare type ButtonSize = "large" | "medium" | "small" | "extra-small";
declare type ButtonElementProps = JSX.IntrinsicElements["button"];
declare type AnchorElementProps = JSX.IntrinsicElements["a"];
declare type ButtonAnchorElementProps = Omit<ButtonElementProps & AnchorElementProps, "size">;
export interface ButtonProps extends ButtonAnchorElementProps {
    className?: string;
    label: string;
    isLoading?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: string;
    spinnerAlign?: SpinnerAlign;
    isSkeleton?: boolean;
    "data-testid"?: string;
}
export declare const Button: (props: ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare const buttonStyles: {
    [x: string]: string;
};
export {};
//# sourceMappingURL=Button.d.ts.map