import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }
  
  static propTypes = {
    onNewRecipe: PropTypes.func
  }
  
  render() {
    return (
      <header>
        <h2><button className="navbar-button name-button" >Recipe App</button></h2>
        <nav>
          <li><button className="navbar-button newRecipe-button" onClick={this.props.onNewRecipe}>New Recipe</button></li>
          <li><button className="navbar-button">Home</button></li>
          <li><button className="navbar-button">About</button></li>
          <li><button className="navbar-button">Contact Us</button></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;