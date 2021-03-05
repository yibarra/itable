import React, { FC } from 'react';

import AudioVisualizer from '../AudioVisualizer';

import { IAudioAnalyser } from './interfaces';

const AudioAnalyser: FC<IAudioAnalyser> = ({ audio }) => {
  

  return (
    <AudioVisualizer audioData={[]} />
  );
};

export default AudioAnalyser;