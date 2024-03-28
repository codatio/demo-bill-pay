import * as React from "react";
export interface ModalProps {
    className?: string;
    isHideBackgroundOverlay?: boolean;
    isPinned?: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement>) => void;
}
export declare function measureScrollBarWidth(entries: ResizeObserverEntry[], isOpen: boolean): number | undefined;
export declare function Modal({ className, children, isHideBackgroundOverlay, isPinned, onClose, ...otherProps }: React.PropsWithChildren<ModalProps>): JSX.Element;
//# sourceMappingURL=Modal.d.ts.map