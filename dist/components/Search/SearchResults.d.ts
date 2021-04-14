import React, { ReactElement } from 'react';
export declare type SearchResultsProps = {
    results: React.ReactNode;
    searchText: string;
    showNoResults: boolean;
};
export declare function SearchResults({ results, searchText, showNoResults, }: SearchResultsProps): ReactElement;
