import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Optional global styles

// Page components
import Home from './Pages/Home.js';
import Schools from './Pages/Schools.js';
import About from './Pages/About.js';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="routerLink">Acadivise</Link>
        <Link to="/schools" className="routerLink">Schools</Link>
        <Link to="/about" className="routerLink">About</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schools" component={Schools} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;