import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './layout/main/main';
import ViewPlaylist from './layout/viewPlaylist/viewpPlaylist';

// import styles
import './layout/main/main.css';
import './component/navbar/navbar.css';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/playlist" component={ViewPlaylist} />
    </Router>
  );
}

export default App;
