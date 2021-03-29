import React, {ReactElement} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import styles from './BackButton.module.css';

interface BackButtonProps {
  className?: string;
  to: string;
}

export function BackButton({
  className = undefined,
  to,
}: BackButtonProps): ReactElement {
  return (
    <Link className={classnames(styles.root, className)} to={to}>
      <ChevronLeft />
      Back
    </Link>
  );
}
