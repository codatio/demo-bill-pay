import * as React from "react";
export interface EntityInfoProps {
    /**
    * title will be wrapped in a Typography component - avoid child divs
    */
    title: React.ReactNode;
    /**
    * subtitle will be wrapped in a Typography component - avoid child divs
    */
    subtitle: React.ReactNode;
    className?: string;
}
export declare const EntityInfo: (props: EntityInfoProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=EntityInfo.d.ts.map