import { PropsWithChildren, ReactElement } from 'react';
export declare type FormFieldProps = {
    label: string;
    className?: string;
    errors?: string[];
    name: string;
    required?: boolean;
};
export declare function FormField({ label, children, className, errors, required, name, }: PropsWithChildren<FormFieldProps>): ReactElement;
