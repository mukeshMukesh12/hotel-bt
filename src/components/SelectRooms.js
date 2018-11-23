import React from 'react';
import PropTypes from 'prop-types';

import plus from './../images/plus.svg';
import minus from './../images/minus.svg';

import {TextField} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';



class ControlledOpenSelect extends React.Component {
 
    constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    
    this.state = {
      isHovering: false,
      adult: 1,
      room: 1,
      children: 0,
      
      
  


    };
    this.decAdult = this.decAdult.bind(this);
    this.incAdult = this.incAdult.bind(this);
    this.incRoom = this.incRoom.bind(this);
    this.decRoom = this.decRoom.bind(this);
    this.incChild = this.incChild.bind(this);
    this.decChild = this.decChild.bind(this);
   

  }
    decAdult = () => {
    this.setState(prevState => {
       return {adult: prevState.adult - 1}
    })
}
incAdult = () => {
    this.setState(prevState => {
       return {adult: prevState.adult + 1}
    })
}
incRoom = () => {
    this.setState(prevState => {
       return {room: prevState.room + 1}
    })
} 
decRoom  = () => {
    this.setState(prevState => {
       return {room: prevState.room - 1}
    })
}
incChild  = () => {
    this.setState(prevState => {
       return {children: prevState.children + 1}
    })
}
decChild  = () => {
    this.setState(prevState => {
       return {children: prevState.children - 1}
    })
}
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div className="rooms" >
        <TextField
          onClick={this.handleMouseHover}
          value = {` ${this.state.adult} adult - ${this.state.children} children`}
          label = {`Rooms Book: ${this.state.room} `}
           InputProps={{
            readOnly: true,
          }}
          //onMouseLeave={this.handleMouseHover}
        />
        {
          this.state.isHovering &&
          <div className="select-rooms">
            <ul>
              <li>number of room : {this.state.room} 
              <div>
              <span className = {`minus-${this.state.room}`}><img src={minus}  width="20" onClick= {this.decRoom}/></span>
              <span className = "plus"><img src={plus} width="20"onClick={this.incRoom}/></span>
               </div>
             </li>
              <li>number of adult : {this.state.adult} 
              <div>
              <span className = {`minus-${this.state.adult}`}><img src={minus}  width="20" onClick= {this.decAdult}/></span>
              <span className = "plus"><img src={plus} width="20"onClick={this.incAdult}/></span>
             </div>
             </li>
              <li>number of children : {this.state.children} 
              <div>
              <span className = {`childminus-${this.state.children}`}><img src={minus}  width="20" onClick= {this.decChild}/></span>
              <span className = "plus"><img src={plus} width="20"onClick={this.incChild}/></span>
              </div>
             </li>
             <li><span className="ok" onClick={this.handleMouseHover}>Done</span></li>
            </ul>
          </div>
        }
      </div>
    );
  }
}



export default ControlledOpenSelect;