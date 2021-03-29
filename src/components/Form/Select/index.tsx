import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import classNames from 'classnames';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { FormField, FormFieldProps } from '../FormField';
import styles from './Select.module.css';

export type SelectOption = {
  name: string;
  value: string;
};

export type SelectProps = FormFieldProps & {
  errors?: string[];
  label: string;
  name: string;
  onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  readOnly?: boolean;
  testId?: string;
  value: string;
};

export function Select({
  errors = [],
  name,
  value,
  options,
  label,
  onChange,
  className,
  readOnly = false,
  required = false,
  testId,
}: SelectProps): ReactElement {
  return (
    <FormField
      label={label}
      className={classNames(styles.root, className, {
        [styles.hasErrors]: errors.length,
      })}
      errors={errors}
      required={required}
      name={name}
    >
      <div className={styles.wrap}>
        <select
          onChange={onChange}
          name={name}
          value={value}
          disabled={readOnly}
          data-testId={testId}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <KeyboardArrowDownIcon />
      </div>
    </FormField>
  );
}

// Select.defaultProps = defaultProps;
