import React, { Component } from 'react';
import Logo from './../logo.png';
import './../css/header.css';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

class header extends Component {
  render() {
    return (
        <div className="header-menu">
    <Layout style={{background: '#fff'}}>
        <Header style={{}}>
           <Link to="/"><img src = {Logo} width = "200" /></Link>
            <Navigation style={{ }}>
                <Link to="/hotel-listing">List of Hotels</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <Link to="/hotel-listing">List of Hotels</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Navigation>
        </Drawer>
    </Layout>
      </div>
    );
  }
}

export default header;