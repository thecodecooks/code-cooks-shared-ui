import React, {ReactElement} from 'react';
import classnames from 'classnames';
import {Search} from '../Search';
import {UserMenu} from './UserMenu';

export type HeaderProps = {
  fixed: boolean;
  logo: React.ReactNode;
  // onLoginClick: VoidFunction;
  // onLogoutClick: VoidFunction;
  // onSearchTextChange: (text: string) => void;
  profilePicture: string;
  searchText: string;
};

export function Header({
  fixed,
  logo,
  profilePicture,
}: HeaderProps): ReactElement {
  const classes = classnames('border-b border-gray-200', {
    fixed,
  });

  return (
    <header className={classes}>
      <div className="p-4 flex items-center justify-center">
        {logo}
        <div className="ml-auto">
          {/* <Search /> */}
          <UserMenu profilePicture={profilePicture}>
            {/* {isLoggedIn ? (
              <LoggedInMenu onLogoutClick={onLogoutClick} userType={userType} />
            ) : (
              <LoggedOutMenu onLoginClick={onLoginClick} />
            )} */}
          </UserMenu>
        </div>
      </div>
    </header>
  );
}
