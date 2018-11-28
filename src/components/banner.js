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
			<form >
			    
				<IntegrationReactSelect />
				<Datepicker1 /> 
				<ControlledOpenSelect />
				<DialogSelect/>
				<Link to="/hotel-listing" className="search"><Button variant="contained">
        			Search
      			</Button></Link>

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