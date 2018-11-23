import React,{ Component } from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
class Datepicker1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		startDate: null,
      		endDate: null
      		
    	}
    	
    

	}
    handleChangeStart = startdate => {
    	this.setState ({
    		startDate: startdate
    	})
    }

	handleChangeEnd = enddate => {
		this.setState ({
			endDate: enddate

		})
	}
  
    
    
	render() {
		return(
         <div className="date-picker">
         	
         	<DatePicker
    selected={this.state.startDate}
    dateFormat = "DD/MM/YY"
    selectsStart
    placeholderText = "Check In "
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart}
    
/>

<DatePicker
    selected={this.state.endDate}
    dateFormat = "DD/MM/YY"
    selectsEnd
    placeholderText = " Check Out "
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeEnd}
    
/>
 
  

         </div>

		);
	}
}

export default Datepicker1;