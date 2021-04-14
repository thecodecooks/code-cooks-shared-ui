import React, {
  PropsWithChildren,
  ReactElement,
  ComponentPropsWithoutRef,
} from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import {ButtonVariants} from './types';
import {returnButtonClasses} from './utils';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  loading?: boolean;
  testId?: string;
  variant?: ButtonVariants;
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
  const cx = returnButtonClasses(variant, className);
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
