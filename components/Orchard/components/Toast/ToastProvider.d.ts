import * as React from "react";
import { ToastInfo } from "./Toast.reducer";
interface IToastContext {
    addToast: (toastInfo: ToastInfo) => void;
    removeToast: (id: string) => void;
    registerHeight: (id: string, height: number) => void;
}
interface ToastProviderProps {
    children?: React.ReactNode;
    portalId?: string;
}
export declare function ToastProvider({ children, portalId }: ToastProviderProps): JSX.Element;
export declare function useToast(): IToastContext;
export {};
//# sourceMappingURL=ToastProvider.d.ts.map