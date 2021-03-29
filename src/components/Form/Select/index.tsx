import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import classNames from 'classnames';
import FormField from '../../FormField';
import Down from '../../Icons/Down';
import styles from './Select.module.css';

type SelectOption = {
  name: string;
  value: string;
};

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  className?: string;
  cypressId?: string;
  errors?: string[];
  label: string;
  options: SelectOption[];
  readOnly?: boolean;
  required?: boolean;
  showDown?: boolean;
};

const defaultProps: Partial<SelectProps> = {
  className: '',
  cypressId: undefined,
  errors: [],
  readOnly: false,
  required: false,
  showDown: true,
};

export default function Select({
  cypressId,
  name,
  value,
  options,
  label,
  onChange,
  className,
  readOnly,
  errors,
  required,
  showDown,
}: SelectProps): ReactElement {
  const cx = classNames(styles.component, className);

  return (
    <FormField
      label={label}
      className={cx}
      errors={errors}
      required={required}
    >
      <div className={styles.wrap}>
        <select
          onChange={onChange}
          name={name}
          value={value}
          disabled={readOnly}
          className={styles.select}
          data-cy={cypressId}
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {showDown && <Down />}
      </div>
    </FormField>
  );
}

Select.defaultProps = defaultProps;
