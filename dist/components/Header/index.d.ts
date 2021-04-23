import React, { ReactElement } from 'react';
export declare type HeaderProps = {
    fixed?: boolean;
    logo: React.ReactNode;
    middle?: React.ReactNode;
    profilePicture?: string;
};
export declare function Header({ fixed, logo, middle, profilePicture, }: HeaderProps): ReactElement;
