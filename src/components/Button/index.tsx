import React, {PropsWithChildren, ReactElement} from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import classNames from 'classnames';
import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  testId?: string;
  variant?: 'default' | 'go' | 'inverse' | 'white';
  type: 'button' | 'submit';
};

export function Button({
  type,
  disabled,
  children,
  className = undefined,
  loading = false,
  onClick,
  testId = undefined,
  variant = 'default',
}: PropsWithChildren<ButtonProps>): ReactElement {
  const isInverse = variant === 'inverse';

  const cx = classNames(styles.root, className, {
    [styles[variant]]: variant !== 'default',
  });

  const pulseColour = isInverse ? 'var(--primary)' : 'var(--white)';

  return (
    <button
      type={type}
      className={cx}
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {loading ? <PulseLoader color={pulseColour} size={6} /> : children}
    </button>
  );
}
