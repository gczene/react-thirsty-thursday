import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login';
import Auth from './utils/auth';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" render={({...rest}) => {
            if (Auth.isLoggedIn) {
              return <App />
            } else {
              return <Login {...rest} />
            }
          }}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
