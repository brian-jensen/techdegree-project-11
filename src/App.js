import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import PhotoContainer from './Components/PhotoContainer';
import Navigation from './Components/Navigation';
import NotFound from './Components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:text" component={PhotoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
