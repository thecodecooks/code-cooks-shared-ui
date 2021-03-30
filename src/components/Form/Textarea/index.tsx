import React, {ReactElement, ChangeEventHandler} from 'react';
import {FormField, FormFieldProps} from '../FormField';

export type TextareaProps = FormFieldProps & {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
  value: string;
};

export function Textarea({
  className,
  errors = [],
  name,
  label,
  onChange,
  placeholder,
  required = false,
  rows = 5,
  value,
}: TextareaProps): ReactElement {
  return (
    <FormField
      label={label}
      errors={errors}
      className={className}
      name={name}
      required={required}
    >
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onChange}
        value={value}
        rows={rows}
      />
    </FormField>
  );
}
