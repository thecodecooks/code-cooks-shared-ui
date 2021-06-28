import React, {ReactElement, ComponentPropsWithoutRef} from 'react';
import classNames from 'classnames';
import {FormField, FormFieldProps} from '../FormField';
import styles from './TextField.module.css';

export type TextFieldProps = FormFieldProps & ComponentPropsWithoutRef<'input'>;

export function TextField({
  className,
  name,
  onChange,
  placeholder,
  readOnly = false,
  tabIndex = 0,
  type = 'text',
  value,
  ...rest
}: TextFieldProps): ReactElement {
  return (
    <FormField
      className={classNames(styles.root, className)}
      name={name}
      {...rest}
    >
      <input
        type={type}
        onChange={onChange}
        onBlur={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        tabIndex={tabIndex}
      />
    </FormField>
  );
}
