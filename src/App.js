import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutPage    from './views/AboutPage';
import ProjectsPage from './views/ProjectsPage';
import HomePage     from './views/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
