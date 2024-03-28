import * as React from "react";
declare type AnnouncementBannerVariant = "positive" | "negative" | "warning" | "neutral" | "action";
export interface AnnouncementBannerProps {
    className?: string;
    icon?: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    cta?: React.ReactNode;
    ctaClassName?: string;
    variant: AnnouncementBannerVariant;
    isUrgent?: boolean;
    onClose?: () => void;
}
export declare const AnnouncementBanner: (props: AnnouncementBannerProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
//# sourceMappingURL=AnnouncementBanner.d.ts.map