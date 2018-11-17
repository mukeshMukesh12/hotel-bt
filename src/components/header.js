import React, { Component } from 'react';
import Logo from './../logo.png';
import './../css/header.css';

import { Link } from 'react-router-dom';

class header extends Component {
  render() {
    return (
        <div className="header-menu">
    <div style={{background: '#fff'}}>
        <div style={{}}>
           <Link to="/"><img src = {Logo} width = "200" /></Link>
            <div style={{ }}>
                <Link to="/hotel-listing">List of Hotels</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
        <div>
            <div>
                <Link to="/hotel-listing">List of Hotels</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default header;