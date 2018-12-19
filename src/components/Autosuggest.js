import React, { Component } from 'react';
import { districts } from '../database';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
//import PropTypes from 'prop-types';
const suggestion = districts.map(el=> ({
  value: el,
  label: el
}) );

class IntegrationReactSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = newValue => {
    this.setState({
      value: newValue
    })
    this.props.onNewName(newValue);
    
  }

 
      render() {
        return (
         <div className="location">
         <NoSsr>
          <Select
           name="filterFlightNumber"
            
            multi={true}
            onChange={this.handleChange}
            options={ suggestion }
            placeholder="Please enter Location"
            
          />
        
         </NoSsr>
         </div>
        )
      }
}
export default IntegrationReactSelect;
