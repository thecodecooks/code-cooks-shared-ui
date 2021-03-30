import React, {ReactElement, ChangeEventHandler} from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  checked?: boolean;
  className?: string;
  errors?: string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name: string;
  id: string;
  value: string;
};

export function CheckBox({
  onChange,
  checked,
  errors = [],
  name,
  label = '',
  id,
  value,
  className,
}: CheckboxProps): ReactElement {
  const hasErrors = !!errors.length;

  const classes = classNames(styles.root, className, {
    [styles.error]: hasErrors,
  });

  return (
    <div className={classes}>
      <label htmlFor={id} className={styles.label}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
          id={id}
          value={value}
        />
        <span className={styles.box} />
        <span dangerouslySetInnerHTML={{__html: label}} />
      </label>
      {hasErrors &&
        errors.map((error) => (
          <p className={styles.message} key={error}>
            {error}
          </p>
        ))}
    </div>
  );
}
