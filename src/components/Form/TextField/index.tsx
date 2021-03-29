import React, {ReactElement} from 'react';
import classNames from 'classnames';
import {FormField, FormFieldProps} from '../FormField';
import styles from './TextField.module.css';

export type TextFieldProps = FormFieldProps & {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  tabIndex?: number;
  type?: 'text';
  value: string;
};

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
      {/* {props.subText && <p className={s["sub-text"]}>{props.subText}</p>} */}
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

// GenericInput.defaultProps = defaultProps;
// GenericInput.propTypes = propTypes;
