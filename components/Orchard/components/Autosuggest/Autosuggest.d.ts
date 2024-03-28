import * as React from "react";
import { SharedSelectProps } from "../SelectInput/SelectInput";
declare type AutosuggestItem = {
    id: string;
    label: string;
    value: string;
};
interface AutosuggestProps extends SharedSelectProps {
    items: AutosuggestItem[];
    handleSelectedItemChange?: (selectedItem: AutosuggestItem | null | undefined) => void;
    renderIcon?: (item: AutosuggestItem) => JSX.Element;
}
export declare const Autosuggest: (props: AutosuggestProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=Autosuggest.d.ts.map