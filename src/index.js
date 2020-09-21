import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Global from './styles/global';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
