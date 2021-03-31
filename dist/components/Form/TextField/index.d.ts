import { ReactElement, ChangeEventHandler } from 'react';
import { FormFieldProps } from '../FormField';
export declare type TextFieldProps = FormFieldProps & {
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    readOnly?: boolean;
    tabIndex?: number;
    type?: 'text';
    value: string;
};
export declare function TextField({ className, name, onChange, placeholder, readOnly, tabIndex, type, value, ...rest }: TextFieldProps): ReactElement;
