import React, { FC, useCallback, useRef } from 'react';

import { ISearchInput } from './interfaces';

import { ButtonClearButton } from '../../Form/Buttons/ButtonClear/styles';
import { SearchInputDiv, SearchTermI } from './styles';

const SearchInput: FC<ISearchInput> = ({
  active,
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

  // width letters
  const widthLetters = useCallback(() => {
    const init = !value.length ? 1 : value.length;

    return init * 9;
  }, [ value ]);

  return (
    <SearchInputDiv 
      data-switch={active}>
      <ButtonClearButton
        className="btn-icon"
        onClick={() => toggle()}>
        <span className="material-icons">{value !== '' ? 'search_off' : 'search'}</span>
      </ButtonClearButton>
      
      <SearchTermI
        ref={element}
        type="text"
        value={value}
        onChange={(event: any) => onSearchTerm(event.target.value)}
        style={{ width: widthLetters() }} />
    </SearchInputDiv>
  );
};

export default SearchInput;