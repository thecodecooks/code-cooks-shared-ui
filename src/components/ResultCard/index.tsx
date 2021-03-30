import React, {ReactElement, ReactNode} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import styles from './ResultCard.module.css';

export type ResultCardProps = {
  className?: string;
  href: string;
  subTitle?: string;
  topContent: ReactNode;
  title: string;
};

export function ResultCard({
  className = undefined,
  href,
  subTitle = undefined,
  topContent,
  title,
}: ResultCardProps): ReactElement {
  return (
    <div className={classnames(styles.root, className)} data-test="">
      <Link className={styles.link} to={href}>
        <div className={styles.topContent}>{topContent}</div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
      </Link>
    </div>
  );
}
