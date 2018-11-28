import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import IntegrationReactSelect from './Autosuggest';
import Datepicker1 from './datepicker';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class GroupBooking extends React.Component {
  state = {
    open: false,
    age: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="price-range" >
        <Button onClick={this.handleClickOpen} variant="outlined">For Group Booking</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
          className = "price-popup"
        >
          <DialogTitle className="popup-header">Submit Form for Group Booking.<span className="des">
            We'll contact you soon ....
          </span></DialogTitle>
          <DialogContent className="popup-content group-booking">
          <div className="wrapper-1">
          <IntegrationReactSelect/>
            <Datepicker1/>
          </div>
          <div className="basic-details">
            <TextField
          id="filled-email-input"
          label="Please Enter your Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />
         <TextField
          id="filled-number"
          label="Your Phone Number"
          
          type="number"
       
          margin="normal"
          variant="filled"
        />
        
        <TextField
          id="filled-number1"
          label="No. of group members"
          
          type="number"
       
          margin="normal"
          variant="filled"
        />
          <TextField
          id="filled-multiline-flexible"
          label="Message"
          multiline
          rowsMax="4"
          
          margin="normal"
          helperText="(e.g: what facilities you required etc..)"
          variant="filled"
        />
        </div>
            
          </DialogContent>
          <DialogActions className="popup-footer">
            
            <Button onClick={this.handleClose} color="primary">
             Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

GroupBooking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupBooking);