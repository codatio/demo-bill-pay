export declare type ToastVariant = "info" | "success" | "warning" | "error" | "action";
export declare type ToastCombination = {
    type: string;
    message: (count: number) => string;
    subTextSeperator?: string;
};
export declare type ToastInfo = {
    message: string;
    subText?: string;
    ctas?: ToastCTA[];
    variant: ToastVariant;
    combine?: ToastCombination;
    removeDelay?: number;
};
export interface ToastCTA {
    text: string;
    primary?: boolean;
    onClick?: () => boolean;
}
export declare type ToastItem = ToastInfo & {
    id: string;
    combinationToasts: ToastInfo[];
};
export interface State {
    toasts: ToastItem[];
    heights: Record<string, number>;
}
export declare enum ActionTypes {
    ADD_TOAST = 0,
    REMOVE_TOAST = 1,
    REGISTER_HEIGHT = 2
}
export declare type Action = {
    type: ActionTypes.ADD_TOAST;
    payload: ToastItem;
} | {
    type: ActionTypes.REMOVE_TOAST;
    payload: string;
} | {
    type: ActionTypes.REGISTER_HEIGHT;
    payload: {
        id: string;
        height: number;
    };
};
export declare const defaultState: State;
export declare const reducer: (state: State, action: Action) => State;
//# sourceMappingURL=Toast.reducer.d.ts.map