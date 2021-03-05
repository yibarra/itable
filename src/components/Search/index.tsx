import React, { FC, useContext } from 'react';

import AudioAnalyser from '../AudioAnalyser';
import { AudioContext } from '../../providers/AudioProvider';

import { SearchDiv } from './styles';

const Search: FC<any> = () => {
  const { audio, toggleMicrophone }: any = useContext(AudioContext);

  return (
    <SearchDiv>
      <button onClick={toggleMicrophone}>
        {audio ? 'Stop microphone' : 'Get microphone input'}
      </button>

      {audio && <AudioAnalyser audio={audio} />}
    </SearchDiv>
  );
};

export default Search;