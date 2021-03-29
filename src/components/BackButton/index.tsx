import React, { ReactElement } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import styles from './BackButton.module.css';

interface BackButtonProps {
  className?: string;
  to: string;
}

const defaultProps: Partial<BackButtonProps> = {
  className: undefined,
};

export function BackButton({ className, to }: BackButtonProps): ReactElement {
  const classes = classnames(styles.root, className);

  return (
    <Link className={classes} to={to}>
      <ChevronLeft />
      Back
    </Link>
  );
}

BackButton.defaultProps = defaultProps;
