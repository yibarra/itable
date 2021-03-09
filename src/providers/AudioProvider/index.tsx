import React, { createContext, FC, useCallback, useState } from 'react';

import { IAudioProvider, IAudioContext } from './interfaces';

// audio context
const AudioContext = createContext({} as IAudioContext);

// audio provider
const AudioProvider: FC<IAudioProvider> = ({ children }) => {
  const [ audio, setAudio ] = useState<any>(null);

  // get microphone
  const getMicrophone = useCallback(async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });

    setAudio(audio);
  }, [ setAudio ]);

  // stop microphone
  const stopMicrophone = useCallback(() => {
    audio.getTracks().forEach((track: any) => track.stop());
    setAudio(null);
  }, [ audio, setAudio ]);

  // toggle microphone
  const toggleMicrophone = useCallback(() => {
    if (audio instanceof Object) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  }, [ stopMicrophone, getMicrophone, audio ]);

  // render
  return (
    <AudioContext.Provider value={{
      audio,
      stopMicrophone,
      toggleMicrophone,
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioContext, AudioProvider };
export default AudioProvider;