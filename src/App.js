import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Questions from './Questions';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="p-4">
          <nav>
            <Link to="/" className="mr-3">
              Home
            </Link>
            <Link to="/fragen" className="mr-3">
              Fragen
            </Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </header>
        <div className="content">
          <Switch>
            <Route path="/kontakt">
              <Contact />
            </Route>
            <Route path="/fragen">
              <Questions />
            </Route>
            <Route patch="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer className="p-4">
          <Link to="/impressum" className="mr-3">
            Impressum
          </Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
