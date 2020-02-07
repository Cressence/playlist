import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store/store';

import Main from './layout/main/main';

// import styles
import './layout/main/main.css';
import './component/navbar/navbar.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </Provider>
  );
}

export default App;
