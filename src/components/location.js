import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { locations } from '../database';
import './../css/location.css';
import {Link} from 'react-router-dom';

class Location extends Component {

	render() {
		return (
        <div className = "locations">
        <h1>Popular destinations</h1>
         <Grid container spacing={24}>
         {locations.map( el => <Grid item xs={6} key={el.id} >
						
                    <div class="container">
  					<Link to = "/"><img src={ require(`../${el.img}`)} alt="{el.name}" style={{ width: '100%',height: "300px",objectFit:"cover"}}/>
	  					</Link><div class="content">
	    					<h1>{el.name}</h1>
	    					<p>{el.des}</p>  					
	    				</div>
					</div>
						
						
					</Grid>)}

         </Grid>
         </div>

		)
	}
}
export default Location;