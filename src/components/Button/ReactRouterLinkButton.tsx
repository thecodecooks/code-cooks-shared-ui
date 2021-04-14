import React, {PropsWithChildren, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {ButtonVariants} from './types';
import {returnButtonClasses} from './utils';

export type ReactRouterLinkButtonProps = PropsWithChildren<{
  className?: string;
  to: string;
  variant?: ButtonVariants;
  testId?: string;
}>;

export function ReactRouterLinkButton({
  className = undefined,
  children,
  to,
  testId,
  variant = 'default',
}: ReactRouterLinkButtonProps): ReactElement {
  const cx = returnButtonClasses(variant, className);

  return (
    <Link className={cx} to={to} data-testid={testId}>
      {children}
    </Link>
  );
}
