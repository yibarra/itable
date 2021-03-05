import React, { FC } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';

import Content from '../Content';

import { config } from './config';
import AudioProvider from '../../providers/AudioProvider';

// main
const Main: FC<any> = () => {
  // render
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode path="/">
          {(value: any) => 
            <AudioProvider>
              <Content {...value} />
            </AudioProvider>
          }
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
};

export default Main;