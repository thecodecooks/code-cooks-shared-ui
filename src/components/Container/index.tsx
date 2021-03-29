import React, { PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

export type ContainerProps = PropsWithChildren<{ className?: string }>;

export default function Container({
  children,
  className = "",
}: ContainerProps): ReactElement {
  const cx = classNames(styles.container, className);
  return <div className={cx}>{children}</div>;
}
