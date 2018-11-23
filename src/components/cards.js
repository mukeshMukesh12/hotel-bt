import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Card,CardHeader,CardMedia,CardContent,CardActions,
  Collapse,Avatar,IconButton,Typography,Button} from '@material-ui/core';
  import red from '@material-ui/core/colors/red';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import StarRateIcon from '@material-ui/icons/StarRate';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import { hoteldes } from '../database';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './../css/card.css';
import {Link} from 'react-router-dom';

const styles = theme => ({
  card: {
    maxWidth: 400,
    color: '#000',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24} style={{maxWidth: "calc(100% - 80px)",width: "100%",margin: "auto"}}>
      <Grid item xs={12} >
      <h1 style={{color: "#000",fontFamily: "Roboto",fontWeight: "400",textShadow: "1px 0px #deb886"}}>Popular Hotels (On the basis of Feedback and Tour Reviews from our Travelers)</h1>
      </Grid>
         {hoteldes.map( el => <Grid item xs={3} key={el.id} id={el.id} >
      
      <Card className={`${classes.card} card`} style={{ background: "#fff",color:"#000"}}>
        <CardHeader className="card-header"
          avatar={
           <LocationOnTwoToneIcon className="location"/>
          }
         
          title={el.name}
          subheader={el.Address}
        />
        <CardMedia
          className={classes.media}
          image={ require(`../${el.img}`)}
          title="image"
        />
        <CardContent>
          <Typography component="p">
            {el.des}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Rating" className={el.rating}>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>

          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="subtitle1">Average Price:Average Price</Typography>
            
            <Typography variant="h5">
              Facilities
            </Typography>
            
             <List>
             <ListItem style={{padding: "0"}}>
                    <ListItemText 
                      primary="Facilities Single-line item"
                      style = {{ fontSize: "0.8rem"}}
                    />
            </ListItem>
            <Divider style={{background: "pink"}}/>
             <ListItem style={{padding: "0"}}>
                    <ListItemText 
                      primary="Facilities Single-line item"
                      style = {{ fontSize: "0.8rem"}}
                    />
            </ListItem>
            <Divider style={{background: "pink"}}/>
             <ListItem style={{padding: "0"}}>
                    <ListItemText 
                      primary="Facilities Single-line item"
                      style = {{ fontSize: "0.8rem"}}
                    />
            </ListItem>
            <Divider style={{background: "pink"}}/>
             <ListItem style={{padding: "0"}}>
                    <ListItemText 
                      primary="Facilities Single-line item"
                      style = {{ fontSize: "0.8rem"}}
                    />
            </ListItem>
            <Divider style={{background: "pink"}}/>
                  
             </List>
            <div className="button-group" style={{display:"flex",display:"-webkit-flex",justifyContent:"space-between",justifyContent:"space-between"}}>
              <Button variant="contained" color="secondary" style={{fontWeight:"400"}}>Know More</Button>
              <Button variant="contained" color="secondary" style={{fontWeight:"400"}}>Book Now</Button>

            </div>
            <div className="button-group" style={{textAlign:"center"}}>
              <Link to="/hotel-listing" style={{ textDecoration: "none"}}><Button variant="contained" color="secondary" style={{width:"100%",marginTop:"10px"}}>NearBy Hotels</Button></Link>
            </div>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>)}
         </Grid>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);