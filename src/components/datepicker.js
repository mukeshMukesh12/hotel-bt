import React,{ Component } from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
class Datepicker1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		startDate: "",
      		endDate: "",
      		days: ""
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
         <div>
         	
         	<DatePicker
    selected={this.state.startDate}
    dateFormat = "DD MMMM YYYY"
    selectsStart
    placeholderText = "Start date"
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart}
    
/>

<DatePicker
    selected={this.state.endDate}
    dateFormat = "DD MMMM YYYY"
    selectsEnd
    placeholderText = "End date"
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeEnd}
    calendarClassName="rasta-stripes"
/>
  
         </div>

		);
	}
}

export default Datepicker1;