export interface IAudioContext {
  audio: any;
  speech: {
    value: string;
    listening: any;
    supported: any;
  };
  toggleMicrophone(): void;
  stopMicrophone(): void;
}

export interface IAudioProvider {
  any?: any;
}