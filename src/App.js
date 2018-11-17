import React, { Component } from 'react';
//import Logo from './logo.png';
import Header from './components/header';
import Banner from './components/banner';
import './App.css';
import Main from './components/main';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Header />
          <Banner />
        
         
          <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
