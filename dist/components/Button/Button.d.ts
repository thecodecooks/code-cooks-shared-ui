import { PropsWithChildren, ReactElement, ComponentPropsWithoutRef } from 'react';
import { ButtonVariants } from './types';
export declare type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    loading?: boolean;
    testId?: string;
    variant?: ButtonVariants;
};
export declare function Button({ type, disabled, children, className, loading, onClick, testId, variant, }: PropsWithChildren<ButtonProps>): ReactElement;
