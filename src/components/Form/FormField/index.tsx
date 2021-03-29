import React, { PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";
import { Label } from "../Label";
import styles from "./FormField.module.css";

export type FormFieldProps = {
  label: string;
  className?: string;
  errors?: string[];
  name: string;
  required?: boolean;
};

export function FormField({
  label,
  children,
  className,
  errors = [],
  required,
  name,
}: PropsWithChildren<FormFieldProps>): ReactElement {
  const classes = classNames(styles.root, className, {
    [styles.error]: errors.length,
  });

  return (
    <div className={classes}>
      {label && (
        <Label name={name} hasErrors={!!errors.length} required={required}>
          {label}
        </Label>
      )}
      {children}
      {errors.map((error) => (
        <p key={error} className={styles.errorText}>
          {error}
        </p>
      ))}
    </div>
  );
}
