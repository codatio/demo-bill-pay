import * as React from "react";
export interface TabProps extends React.ComponentPropsWithRef<"button"> {
    className?: string;
    /**
     * Specify a label to identify tab list
     */
    label: string;
    /**
     * Is this tab currently selected
     */
    isSelected?: boolean;
    /**
     * Handler for changing tab value
     * @param e React mouse event
     * @param value Value of new tab
     */
    onTabChange?(e: React.MouseEvent<HTMLButtonElement>, value: string): void;
}
export declare function Tab(props: TabProps): JSX.Element;
//# sourceMappingURL=Tab.d.ts.map