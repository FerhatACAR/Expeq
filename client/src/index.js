import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../styles/styles.scss';
import { hot } from 'react-hot-loader';
import './assets/logo/favicon.png';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default hot(module)(App);