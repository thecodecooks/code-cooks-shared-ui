import React, { PropsWithChildren, ReactElement } from 'react';
export declare type ButtonProps = {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
    testId?: string;
    variant?: 'default' | 'go' | 'inverse' | 'white';
    type: 'button' | 'submit';
};
export declare function Button({ type, disabled, children, className, loading, onClick, testId, variant, }: PropsWithChildren<ButtonProps>): ReactElement;
