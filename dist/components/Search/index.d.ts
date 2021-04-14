import React, { ReactElement } from 'react';
declare type SearchProps = {
    onSearch: (text: string) => void;
    searchText: string;
    results: React.ReactNode;
    searchPlaceholder: string;
};
export declare function Search({ onSearch, results, searchPlaceholder, searchText, }: SearchProps): ReactElement;
export {};
