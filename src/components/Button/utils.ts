import classNames from 'classnames';
import styles from './Button.module.css';
import {ButtonVariants} from './types';

export const returnButtonClasses = (
  variant: ButtonVariants,
  className?: string,
) => {
  return classNames(styles.root, className, {
    [styles[variant]]: variant !== 'default',
  });
};
