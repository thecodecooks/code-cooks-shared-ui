import { PropsWithChildren, ReactElement } from 'react';
import { ButtonVariants } from './types';
export declare type ReactRouterLinkButtonProps = PropsWithChildren<{
    className?: string;
    to: string;
    variant?: ButtonVariants;
    testId?: string;
}>;
export declare function ReactRouterLinkButton({ className, children, to, testId, variant, }: ReactRouterLinkButtonProps): ReactElement;
