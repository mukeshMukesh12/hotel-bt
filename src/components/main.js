import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Hotel from './hotels';
import Login from './login';
import Register from './register';
import { HotelDes } from './HotelDes';

const Main = () => (
  <Switch>
  	<Route exact path="/" component={Home}/>
  	<Route path="/login" component={Login}/>
  	<Route path="/register" component={Register}/>
  	<Route path="/hotel-listing" component={Hotel}/>
	<Route path="/hotel/:id" component={HotelDes} />
  </Switch>


)

export default Main;