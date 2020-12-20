import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import TableProvider from './providers/TableProvider';
import ThemeProvider from './providers/ThemeProvider';

import Main from './layouts/Main';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <TableProvider>
        <Main />
      </TableProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
