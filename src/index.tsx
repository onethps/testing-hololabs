import './styles/0reset.scss';
import './styles/globals.scss';

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './_app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
