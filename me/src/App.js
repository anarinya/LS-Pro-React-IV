import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Media from './components/Media';
import FontIcon from './components/FontIcon';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="Nav">
              <div className="container">
                <span className="title">jenny <FontIcon icon="heart" /> soetanto</span>
                <ul className="Menu">
                  <Link to="/about"><li>About</li></Link>
                  <Link to="/hobbies"><li>Hobbies</li></Link>
                  <Link to="/media"><li>Media</li></Link>
                </ul>
              </div>
            </div>
            <div className="main">
              <div className="page">
                <Route exact path="/" component={ About } />
                <Route path="/about" component={ About } />
                <Route path="/hobbies" component={ Hobbies } />
                <Route path="/media" component={ Media } />
              </div>
          </div>
          <Footer />   
        </div>
      </Router>
    );
  }
}

export default App;
