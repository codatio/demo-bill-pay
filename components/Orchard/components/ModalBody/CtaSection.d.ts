import React from "react";
import { ButtonProps } from "../Button";
interface ActionLinkType {
    label: string;
    variant: "tertiary";
    color?: string;
    onClick: () => void;
}
export declare type ActionButton = ActionLinkType | Omit<ButtonProps, "ref">;
export interface ActionButtonsCta {
    type: "buttons";
    buttons: ActionButton[];
    centerAlign?: boolean;
}
export interface CheckboxButtonCta {
    type: "checkbox-button";
    checkboxLabel: string;
    buttonLabel: string;
    onButtonClick: () => void;
    isChecked: boolean;
    setIsChecked: (v: boolean) => void;
    buttonDisabled?: boolean;
}
export declare type CallToAction = ActionButtonsCta | CheckboxButtonCta;
interface CtaSectionProps {
    callToAction: CallToAction;
}
export declare const CtaSection: React.FC<CtaSectionProps>;
export {};
//# sourceMappingURL=CtaSection.d.ts.map