import React, {ReactElement, useState, PropsWithChildren} from 'react';
import Person from '@material-ui/icons/Person';
import styles from './UserMenu.module.css';
// import {useClickOutside} from '../../../hooks/use-click-outside';

type UserMenuProps = PropsWithChildren<{
  profilePicture?: string;
}>;

const defaultProps: Partial<UserMenuProps> = {
  profilePicture: undefined,
};

export function UserMenu({
  children,
  profilePicture,
}: UserMenuProps): ReactElement {
  const [open, setOpen] = useState(false);

  // const clickOutsideRef = useClickOutside(() => {
  //   setOpen(false);
  // });

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.button}
        style={{backgroundImage: `url(${profilePicture})`}}
        onClick={() => setOpen(!open)}
        data-testid="user-menu-profile-button"
      >
        {!profilePicture && <Person />}
      </button>
      {open && <div className={styles.menu}>{children}</div>}
    </div>
  );
}

UserMenu.defaultProps = defaultProps;
