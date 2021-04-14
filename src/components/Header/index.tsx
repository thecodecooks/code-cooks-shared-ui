import React, {ReactElement} from 'react';
import classnames from 'classnames';
import {UserMenu} from './UserMenu';
import styles from './Header.module.css';

export type HeaderProps = {
  fixed: boolean;
  logo: React.ReactNode;
  middle: React.ReactNode;
  profilePicture: string;
};

export function Header({
  fixed,
  logo,
  middle,
  profilePicture,
}: HeaderProps): ReactElement {
  const classes = classnames(styles.root);

  return (
    <header className={classes}>
      {logo}
      <div>{middle}</div>
      {/* <Search /> */}
      <UserMenu profilePicture={profilePicture}>
        {/* {isLoggedIn ? (
              <LoggedInMenu onLogoutClick={onLogoutClick} userType={userType} />
            ) : (
              <LoggedOutMenu onLoginClick={onLoginClick} />
            )} */}
      </UserMenu>
    </header>
  );
}
