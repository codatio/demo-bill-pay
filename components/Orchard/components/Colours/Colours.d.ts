import * as React from "react";
interface ColoursProps {
    className?: string;
}
declare type ColourInfo = {
    key: string;
    group: string;
    name: string;
    value: string;
};
declare type ColourGroup = {
    [key: string]: ColourInfo[];
};
export declare function colourToGroup(prev: ColourGroup, curr: [string, string]): ColourGroup;
interface ColourValues {
    [key: string]: string;
}
export declare function groupColours(c: ColourValues): ColourGroup;
export declare const Colours: React.FC<ColoursProps>;
export {};
//# sourceMappingURL=Colours.d.ts.map