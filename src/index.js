import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <exact path="/" element={App} />
  </React.StrictMode>,
  document.getElementById('root')
);
