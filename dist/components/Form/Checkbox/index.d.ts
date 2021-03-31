import { ReactElement, ChangeEventHandler } from 'react';
declare type CheckboxProps = {
    checked?: boolean;
    className?: string;
    errors?: string[];
    onChange: ChangeEventHandler<HTMLInputElement>;
    label?: string;
    name: string;
    id: string;
    value: string;
};
export declare function CheckBox({ onChange, checked, errors, name, label, id, value, className, }: CheckboxProps): ReactElement;
export {};
