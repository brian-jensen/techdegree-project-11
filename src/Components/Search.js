import React, {Component} from 'react';

export default class Search extends Component {
  
  state = {
    text: ''
  }
  
  onSearchChange = e => {
    this.setState({ text: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.text.value === ''){
      return;
    } else {
      this.props.onSubmit(this.state.text);
      e.currentTarget.reset();
    }
  }

  render() {  
    return (
      <div>
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label>Photo Search Input</label>
        <input type="search"
               className="photo-search"
               onChange={this.onSearchChange}
               name="search" 
               ref={input => this.text = input}
               placeholder="Search..."
               autoComplete='off' />
        <button type="submit" id="submit" className="search-button"></button>
      </form>
      </div>
    );
  }
}
