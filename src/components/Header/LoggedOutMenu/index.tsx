import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface LoggedOutMenuProps {
  onLoginClick: VoidFunction;
}

export function LoggedOutMenu({
  onLoginClick,
}: LoggedOutMenuProps): ReactElement {
  return (
    <ul>
      <li>
        <button
          type="button"
          onClick={() => onLoginClick()}
          data-testid="logged-out-login-button"
        >
          Login
        </button>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
}
