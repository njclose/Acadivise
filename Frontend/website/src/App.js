import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Optional global styles
import logo from './image_resources/acadivise_logo_textRightImage.png';

// Page components
import Home from './Pages/Home.js';
import Schools from './Pages/Schools.js';
import About from './Pages/About.js';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="logoLink">
          <img src={logo} alt="Acadivise Logo" className="logo"></img>
        </Link>
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