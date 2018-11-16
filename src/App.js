import React, { Component } from 'react';
//import Logo from './logo.png';
import Header from './components/header';
import Banner from './components/banner';
import './App.css';
import Main from './components/main';
import {Layout,Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
        <div>
         <Header />
         <Banner />
         <Layout>
         <Content>
         <Main />
         </Content>
         </Layout>
      </div>
    );
  }
}

export default App;
