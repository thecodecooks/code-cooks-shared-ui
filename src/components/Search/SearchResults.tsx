import React, {ReactElement} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchResults.module.css';

export type SearchResultsProps = {
  results: React.ReactNode;
  searchText: string;
  showNoResults: boolean;
};

export function SearchResults({
  results,
  searchText,
  showNoResults,
}: SearchResultsProps): ReactElement {
  return (
    <div className={styles.root}>
      {showNoResults && (
        <p className={styles.noResults}>No search results found.</p>
      )}
      {searchText && (
        <p className={styles.searchText}>
          <span className={styles.searchIconWrapper}>
            <SearchIcon />
          </span>
          &quot;{searchText}&quot;
        </p>
      )}
      {results}
    </div>
  );
}
