import React, { FC } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';

import Content from '../Content';

import { config } from './config';

// main
const Main: FC<any> = () => {
  // render
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode path="/">
        {(value: any) => <Content {...value} />}
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
};

export default Main;