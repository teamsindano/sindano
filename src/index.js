import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './utils/globalstyle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/linkedin">
          <LinkedInCallback />
        </Route>
        <Route exact path="/">
          <GlobalStyle />
          <App />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
