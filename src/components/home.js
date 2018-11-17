import React,{ Component } from 'react';
import Hotel from './../data';


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
		
 		return (
			<div>
           		<h1>Home Page</h1>
				{
					data.map( el => <span key={el.name}>{el.name}<img src={require(`../${el.img}`)} /></span>)
				}
           </div>
		)
	}
}

export default Home;