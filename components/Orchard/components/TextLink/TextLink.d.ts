import * as React from "react";
export interface TextLinkProps extends React.ComponentPropsWithRef<"a"> {
    color?: string;
    isSkeleton?: boolean;
}
export declare const TextLink: (props: TextLinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare const textLinkStyles: string;
//# sourceMappingURL=TextLink.d.ts.map