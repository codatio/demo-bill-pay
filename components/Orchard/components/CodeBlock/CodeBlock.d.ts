import * as React from "react";
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    text: string;
    className?: string;
}
export declare const CodeBlock: (props: CodeBlockProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
//# sourceMappingURL=CodeBlock.d.ts.map