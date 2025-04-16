import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Optional global styles
import logo_textRightImage from './image_resources/acadivise_logo_textRightImage.png';

// Page components
import Home from './Pages/Home.jsx';
import Schools from './Pages/Schools.jsx';
import About_Us from './Pages/About_Us.jsx';
import PopupBanner from './Components/PopupBanner.jsx';

function App() {
  return (
    <Router>
      <PopupBanner />

      <nav className="navbar">
        <Link to="/" className="logoLink">
          <img src={logo_textRightImage} alt="Acadivise Logo" className="logo_textRightImage"></img>
        </Link>
        <Link to="/schools" className="routerLink">Schools</Link>
        <Link to="/about-us" className="routerLink">About Us</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schools" component={Schools} />
        <Route path="/about-us" component={About_Us} />
      </Switch>
    </Router>
  );
}

export default App;