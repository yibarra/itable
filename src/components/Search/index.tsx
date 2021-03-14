import React, { FC, useCallback, useContext, useEffect, useState } from 'react';

import AudioAnalyser from '../AudioAnalyser';
import SearchInput from './SearchInput';

import { AudioContext } from '../../providers/AudioProvider';
import { FiltersContext } from '../../providers/FiltersProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { ButtonClearButton } from '../Form/Buttons/ButtonClear/styles';
import { SearchDiv } from './styles';

const Search: FC<any> = ({
  active 
}) => {
  const { onSetFilterValue } = useContext(FiltersContext);
  const { audio, speech, toggleMicrophone }: any = useContext(AudioContext);
  const { theme }: any = useContext(ThemeContext);

  const [ value, setValue ] = useState<string>('');

  // on search term
  const onSearchTerm = useCallback((value: any) => {
    setValue(value);
    
    if (value === '') {
      onSetFilterValue('none', {});
    } else {
      onSetFilterValue('search', value);
    }
  }, [ setValue, onSetFilterValue ]);

  // use effect
  useEffect(() => {
    if (speech.value) {
      setValue(speech.value);
      onSetFilterValue('search', speech.value);
    }
  }, [ speech.value, onSetFilterValue ]);

  // render
  return (
    <SearchDiv
      data-active={audio instanceof Object}
      data-switch={active}>
        <SearchInput
          active={active}
          value={value}
          onSearchTerm={onSearchTerm} />

      <ButtonClearButton
        className="btn"
        onClick={() => toggleMicrophone()}>
        <span className="material-icons">{audio instanceof Object ? 'mic_off' : 'mic'}</span>
      </ButtonClearButton>

      {audio instanceof Object &&
        <AudioAnalyser color={theme.text_color} audio={audio} />}
    </SearchDiv>
  );
};

export default Search;