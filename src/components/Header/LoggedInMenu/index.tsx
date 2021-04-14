import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface LoggedInMenuProps {
  onLogoutClick: VoidFunction;
  userType: UserTypes;
}

export function LoggedInMenu({
  onLogoutClick,
  userType,
}: LoggedInMenuProps): ReactElement {
  return (
    <ul>
      <li>
        <Link to="/edit-profile">Edit Profile</Link>
      </li>
      <li>
        <Link to="/bookings">Bookings</Link>
      </li>
      {userType === 'performer' && (
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      )}
      <li>
        <button type="button" onClick={onLogoutClick}>
          Logout
        </button>
      </li>
    </ul>
  );
}
