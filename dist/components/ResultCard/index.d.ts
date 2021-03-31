import { ReactElement, ReactNode } from 'react';
export declare type ResultCardProps = {
    className?: string;
    href: string;
    subTitle?: string;
    topContent: ReactNode;
    title: string;
};
export declare function ResultCard({ className, href, subTitle, topContent, title, }: ResultCardProps): ReactElement;
