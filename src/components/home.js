import React,{ Component } from 'react';
import Hotel from './../data';
import { Link } from 'react-router-dom';


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
           		<h1>Home Page</h1>
				{
					data.map( el => <div key={el.id}>
						<span>{el.name}</span><Link to = {{pathname: `/hotel/${el.name}`, state: el }}><img src={require(`../${el.img}`)} /></Link>
					</div>)
				}
           </div>
		)
	}
}

export default Home;