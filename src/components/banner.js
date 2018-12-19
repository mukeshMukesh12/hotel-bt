import React,{ Component } from 'react';
//import {Layout,Content} from 'react-mdl';
import IntegrationReactSelect from './Autosuggest';
import ControlledOpenSelect from './SelectRooms';
import Datepicker1 from './datepicker';
import { Link } from 'react-router-dom';
import {Typography,Button} from '@material-ui/core';
import './../css/banner.css';
import background from './../images/background.png';
import FloatingActionButtons from './specialoffers';
import DialogSelect from './pricerange';
import GroupBooking from './groupbooking';
var value = document.getElementsByClassName('css-xp4uvy');
console.log(value);


class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
          location:"",
          days: ""
		}
	}

	onButtonClick =(e) =>{
		e.preventDefault();
		
        var location = this.state.location;
        var days = this.state.days;
        if(!days) {
        	alert("hello");
        }
        alert(`form submit result\n Search location: ${location}\n no. of days booked: ${days}`)
		
	}
	handleLoction = (newValue) => {
       this.setState({
       	 location:newValue.value
       })
       
	}
	findDays = nodays => {
		this.setState({
          days: nodays
		})
	}
	render() {

		return (
		
		<div className="banner" style={style.banner}>
		<Typography component="h2" variant="headline">
          		Your website for all Bhutan Travel needs!
        	</Typography>
        <Typography variant="body2">
          Find deals with hotels, apartments, and more...<br/><br/>

        </Typography>
        <GroupBooking/>
        <FloatingActionButtons />
			<form onSubmit={this.onButtonClick}>
			    
				<IntegrationReactSelect onNewName={this.handleLoction} ref="name"/>
				<Datepicker1 /*noOfDays={this.findDays}*//> 
				<ControlledOpenSelect />
				<DialogSelect/>
				<Button variant="contained" type="submit">
        			Search
      			</Button>

			</form>
		
				
			
		</div>

		)
	}
}
const style = {
	banner: {
		height:'375px',
		position: 'relative'
	}
	
}
export default Banner;