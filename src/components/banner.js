import React,{ Component } from 'react';
//import {Layout,Content} from 'react-mdl';
import IntegrationReactSelect from './Autosuggest';
import ControlledOpenSelect from './SelectRooms';
import Datepicker1 from './datepicker';
import { Link } from 'react-router-dom';
import {Typography,Button} from '@material-ui/core';
import './../css/banner.css';
import background from './../images/background.png';
var value = document.getElementsByClassName('css-xp4uvy');
console.log(value);


class Banner extends Component {
	render() {
		return (
		
		<div className="banner" style={style.banner}>
		<Typography component="h2" variant="headline">
          		Find deals with hotels, apartments, and more...
        	</Typography>
        <Typography variant="body2">
          Find deals with hotels, apartments, and more...
        </Typography>
			<form >
			    
				<IntegrationReactSelect />
				<Datepicker1 /> 
				<ControlledOpenSelect />
				<Button variant="contained">
        			<Link to="/hotel-listing">Search</Link>
      			</Button>
			</form>
			
		</div>

		)
	}
}
const style = {
	banner: {
		height:'300px',
		position: 'relative'
	}
	
}
export default Banner;