import React, { FC, useCallback, useRef } from 'react';

import { ISearchInput } from './interfaces';

import { ButtonClearButton } from '../../Form/Buttons/ButtonClear/styles';
import { SearchInputDiv, SearchTermI } from './styles';

const SearchInput: FC<ISearchInput> = ({
  onSearchTerm,
  value
}) => {
  const element = useRef<any>(null);

  // toggle
  const toggle = useCallback(() => {
    if (value !== '') {
      onSearchTerm('');
    } else {
      if (element instanceof Object) {
        element.current.focus();
      }
    }
  }, [ value, element, onSearchTerm ]);

  return (
    <SearchInputDiv>
      <ButtonClearButton
        className="btn-icon"
        onClick={() => toggle()}>
        <span className="material-icons">{value !== '' ? 'search_off' : 'search'}</span>
      </ButtonClearButton>
      
      <SearchTermI
        ref={element}
        type="text"
        value={value}
        onChange={(event: any) => onSearchTerm(event.target.value)} />
    </SearchInputDiv>
  );
};

export default SearchInput;