import { ReactElement, ChangeEventHandler } from 'react';
import { FormFieldProps } from '../FormField';
export declare type SelectOption = {
    name: string;
    value: string;
};
export declare type SelectProps = FormFieldProps & {
    errors?: string[];
    label: string;
    name: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    options: SelectOption[];
    readOnly?: boolean;
    testId?: string;
    value: string;
};
export declare function Select({ errors, name, value, options, label, onChange, className, readOnly, required, testId, }: SelectProps): ReactElement;
