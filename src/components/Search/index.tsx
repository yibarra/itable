import React, { FC, useCallback, useContext, useEffect, useState } from 'react';

import AudioAnalyser from '../AudioAnalyser';
import SearchInput from './SearchInput';

import { AudioContext } from '../../providers/AudioProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { ButtonClearButton } from '../Form/Buttons/ButtonClear/styles';
import { SearchDiv } from './styles';

const Search: FC<any> = ({
  active 
}) => {
  const { audio, speech, toggleMicrophone }: any = useContext(AudioContext);
  const { theme }: any = useContext(ThemeContext);

  const [ value, setValue ] = useState<string>('');

  // on search term
  const onSearchTerm = useCallback((value: any) =>
    setValue(value), [ setValue ]);

  // use effect
  useEffect(() => {
    if (speech.value) {
      setValue(speech.value);
    }
  }, [ speech.value ]);

  // render
  return (
    <SearchDiv
      data-active={audio instanceof Object}
      data-switch={active}>
        <SearchInput
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