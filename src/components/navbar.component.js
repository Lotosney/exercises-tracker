import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Dzienniczek</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Czynności</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Wpisz czynność do dzienniczka </Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Stwórz użytkownika</Link>
          </li>
        </ul>
        </div>
      </nav>
      
    );
  }
}