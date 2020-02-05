import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './layout/main/main';

// import styles
import './layout/main/main.css';
import './component/navbar/navbar.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Main} />
    </Router>
  );
}

export default App;
