import React,{ Component } from 'react';
//import {Layout,Content} from 'react-mdl';
import IntegrationReactSelect from './Autosuggest';
import ControlledOpenSelect from './SelectRooms';
import Datepicker1 from './datepicker';
import { Link } from 'react-router-dom';

class Banner extends Component {
	render() {
		return (
		
		<div className="banner" style={style.banner}>
			<form >
				<IntegrationReactSelect />
				<Datepicker1 /> 
				<ControlledOpenSelect />
				<button ><Link to="/listing"></Link>Searc</button>
			</form>
			
		</div>

		)
	}
}
const style = {
	banner: {
		height:'300px',
		position: 'relative',
		background: '#D38312',
		background: '-webkit-linear-gradient(to right, #A83279, #D38312)',
		background: 'linear-gradient(to right, #A83279, #D38312)'
	}
	
}
export default Banner;