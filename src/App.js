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
      // "BrowserRouter" keeps the Apps UI in sync with the browers url.
      // "<Navigation />" renders the static search and navigtion header to the top of the page on all routes.
      // "Switch" Will only render the first Route that matches the URL. This prevents the "NotFound" component from being rendered on all pages.
      // "Route" renders the specified component when the browsers URL matches the "path" property.
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
