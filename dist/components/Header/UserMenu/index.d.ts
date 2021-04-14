import { ReactElement, PropsWithChildren } from 'react';
declare type UserMenuProps = PropsWithChildren<{
    profilePicture?: string;
}>;
export declare function UserMenu({ children, profilePicture, }: UserMenuProps): ReactElement;
export declare namespace UserMenu {
    var defaultProps: Partial<UserMenuProps>;
}
export {};
