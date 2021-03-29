import React, { PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";
import styles from "./Label.module.css";

export type LabelProps = {
  hasErrors?: boolean;
  name: string;
  required?: boolean;
};

export function Label({
  children,
  name,
  required = false,
  hasErrors = false,
}: PropsWithChildren<LabelProps>): ReactElement {
  const classes = classNames(styles.root, {
    [styles.error]: hasErrors,
  });

  return (
    <label htmlFor={name} className={classes}>
      {children}
      {required && <sup>*</sup>}
    </label>
  );
}
