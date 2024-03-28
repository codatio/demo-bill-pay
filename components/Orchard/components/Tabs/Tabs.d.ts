import * as React from "react";
export interface TabsProps {
    className?: string;
    /**
     * Specify a label to identify tab list
     */
    label: string;
    /**
     * Id of selected tab
     */
    selectedTabId: string;
    /**
     * Handler for changing tab value
     * @param e React mouse event
     * @param value Value of new tab id
     */
    onTabChange(e: React.MouseEvent<HTMLButtonElement>, value: string): void;
}
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map