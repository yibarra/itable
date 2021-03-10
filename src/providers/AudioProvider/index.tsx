import React, { createContext, FC, useCallback, useEffect, useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

import { IAudioProvider, IAudioContext } from './interfaces';

// audio context
const AudioContext = createContext({} as IAudioContext);

// audio provider
const AudioProvider: FC<IAudioProvider> = ({ children }) => {
  const [ audio, setAudio ] = useState<any>(null);
  const [ value, setValue ] = useState('');

  // stop microphone
  const stopMicrophone = useCallback(() => {
    audio.getTracks().forEach((track: any) => track.stop());
    setAudio(null);
  }, [ audio, setAudio ]);

  // on result
  const onResult = useCallback((result) => {
    setValue(result);
  }, [ setValue ]);

  // on error
  const onError = useCallback((event) => {
    if (event.error === 'not-allowed') {
      console.log('error');
    }
  }, []);

  // use speech
  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd: stopMicrophone,
    onError,
  });

  // get microphone
  const getMicrophone = useCallback(async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });

    setAudio(audio);
    listen({ lang: 'en-AU' });
  }, [ setAudio, listen ]);

  // toggle microphone
  const toggleMicrophone = useCallback(() => {
    if (audio instanceof Object) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  }, [ stopMicrophone, getMicrophone, audio ]);

  useEffect(() => {
    if (value) {
      setTimeout(() => {
        stop();
      }, 1000);
    }
  }, [ value, stop ]);

  // render
  return (
    <AudioContext.Provider value={{
      audio,
      speech: {
        value,
        listening,
        supported,
      },
      stopMicrophone,
      toggleMicrophone,
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioContext, AudioProvider };
export default AudioProvider;