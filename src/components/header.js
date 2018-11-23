import React, { Component } from 'react';
import Logo from './../logo.png';
import './../css/header.css';

import { Link } from 'react-router-dom';

class header extends Component {
  render() {
    return (
        <div className="header-menu">
    
        <div className="logo">
           <Link to="/"><img src = {Logo} width = "200" /></Link>
        </div>
            <div className="menu">
                <Link to="/">List Your Property</Link>
                 <Link to="/register">Register</Link>
                <Link to="/login">Sign in</Link>
               
            </div>
        </div>
    );
  }
}

export default header;