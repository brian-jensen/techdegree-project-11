import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import Search from './Search';

class Navigation extends Component {
  // react-router-dom's 'withRouter' passes updated history props to the Navigation component whenever it renders.
  handleRoute = (text) => {
    this.props.history.push(`/search/${text}`);
  }

  // When the users search text is submited the browsers url is updated to match the users search text.
  // Then the users search text is sent to the Search component.
  render() {
    return (
      <header>
        <ul className="main-nav">
          <Search onSubmit={this.handleRoute}/>
          <li><NavLink to="/search/kittens">Kittens</NavLink></li>
          <li><NavLink to="/search/puppies">Puppies</NavLink></li>
          <li><NavLink to="/search/red%20panda">Red Panda</NavLink></li>
        </ul>
 
      </header>
    );
  }

};

export default withRouter(Navigation);

