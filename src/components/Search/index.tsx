import React, {ReactElement} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Search.module.css';

type SearchProps = {
  onSearch: (text: string) => void;
  searchText: string;
  results: React.ReactNode;
  searchPlaceholder: string;
};

export function Search({
  onSearch,
  results,
  searchPlaceholder,
  searchText,
}: SearchProps): ReactElement {
  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    onSearch(evt.currentTarget.value);
  }

  return (
    <div className={styles.root}>
      <SearchIcon />
      <input
        type="text"
        className={styles.input}
        placeholder={searchPlaceholder}
        onChange={onChange}
        value={searchText}
        name="search"
      />
      {searchText && <div className={styles.results}>{results}</div>}
    </div>
  );
}
