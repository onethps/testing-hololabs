import React from 'react';

import IconLocation from '../../assets/icon-location.svg';
import { Button } from '../Button/Button';

import styles from './SearchInput.module.scss';
import { SearchInputProps } from './SearchInput.Props';

export const SearchInput: React.FC<SearchInputProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={`${className} ${styles.root}`}>
      <img alt={IconLocation} src={IconLocation} />
      <input placeholder="Find the place to help" />
      <Button variant="primary">SEARCH</Button>
    </div>
  );
};
