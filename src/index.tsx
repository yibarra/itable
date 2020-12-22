import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import TableProvider from './providers/TableProvider';

import Main from './layouts/Main';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TableProvider>
      <Main />
    </TableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
