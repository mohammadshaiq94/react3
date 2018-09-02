import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
// import history from '../../router/history'
import './styles.css'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 30,
    marginRight: 30,
  },
  titletext:{
    fontSize:25
  },
  navbtn:{
     textDecoration:"none"
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <div className={classes.menuButton}>
           <p className={classes.titletext}>Social App</p>
          </div>
          <Typography variant="title" color="inherit" className={classes.flex}>
          </Typography>
           {/* <div>
          <Link to="/home" id="navlink"><Button color="default">Home</Button></Link>
          <Link to="/profile" id="navlink"><Button color="default">Profile</Button></Link>
          <Button color="default" id="navlink" onClick={props.logout}>Logout</Button>
          </div> */}
          <div>
        <Link to="/" id="navlink"><Button id="navbtn" className={classes.navbtn} color="default">Admin Login</Button></Link>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Navbar);