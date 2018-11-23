import React,{ Component } from 'react';
import Hotel from './../data';
import { Link } from 'react-router-dom';
import Location from './location';
import  RecipeReviewCard from './cards';
import CustomizedSnackbars from './adds';



class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: null
		}
	}

	componentWillMount() {
		let data = Hotel.hotelList;
		this.setState({data: data})
		
	}
	render() {
		let { data } = this.state
		console.log(data)
 		return (
			<div>
           		<Location />
           		<CustomizedSnackbars/>
           		< RecipeReviewCard/>

           		
				
           </div>
		)
	}
}

export default Home;