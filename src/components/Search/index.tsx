import React, { FC, useContext } from 'react';

import AudioAnalyser from '../AudioAnalyser';
import { AudioContext } from '../../providers/AudioProvider';

import { ButtonClearButton } from '../Form/Buttons/ButtonClear/styles';
import { SearchDiv, SearchTermP } from './styles';

const Search: FC<any> = () => {
  const { audio, speech, toggleMicrophone }: any = useContext(AudioContext);

  return (
    <SearchDiv data-active={audio instanceof Object}>
      <SearchTermP>{speech.value}</SearchTermP>

      <ButtonClearButton onClick={() => toggleMicrophone()}>
        <span className="material-icons">{audio instanceof Object ? 'mic_off' : 'mic'}</span>
      </ButtonClearButton>

      {audio instanceof Object &&
        <AudioAnalyser audio={audio} />}
    </SearchDiv>
  );
};

export default Search;