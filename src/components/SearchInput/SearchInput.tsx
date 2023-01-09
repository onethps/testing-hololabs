import React from 'react';

import { ReactComponent as IconLocation } from '../../assets/icon-location.svg';
import { Button } from '../Button/Button';

import styles from './SearchInput.module.scss';
import { SearchInputProps } from './SearchInput.Props';

export const SearchInput: React.FC<SearchInputProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={`${className} ${styles.root}`}>
      <IconLocation width={14} height={20} />
      <input placeholder="Find the place to help" />
      <Button variant="primary">SEARCH</Button>
    </div>
  );
};
