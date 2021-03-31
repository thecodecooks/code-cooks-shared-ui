import { ReactElement, ChangeEventHandler } from 'react';
import { FormFieldProps } from '../FormField';
export declare type TextareaProps = FormFieldProps & {
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    rows?: number;
    value: string;
};
export declare function Textarea({ className, errors, name, label, onChange, placeholder, required, rows, value, }: TextareaProps): ReactElement;
