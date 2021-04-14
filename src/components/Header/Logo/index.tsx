import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SmallLogo from '../../Icons/SmallLogo';
import styles from './Logo.module.css';

export default function Logo(): ReactElement {
  return (
    <div className={styles.root}>
      <Link to="/">
        <SmallLogo />
      </Link>
    </div>
  );
}
