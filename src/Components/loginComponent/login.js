import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import DocumentTitle from 'react-document-title'
import history from '../routers/history';
import swal from 'sweetalert';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft:50,
    },
    textField: {
      marginLeft: `${theme.spacing.unit}px 0`,
      // paddingLeft:50,
      // marginRight: theme.spacing.unit,
      width: '100',
    },
    button: {
        margin: theme.spacing.unit,
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
      progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
      },
  });


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            errormessage:false,
            adminEmail:"admin@domain.com",
            adminPassword:"admin123"
        }
        this.classes={props}
        this.closeSnackbar =  this.closeSnackbar.bind(this);
        this.signupInputHandler = this.signupInputHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    signupInputHandler(ev){
     this.setState({
         email:ev.target.value,
         password:ev.target.value
     })
    }
    handleSubmit(ev){
     ev.preventDefault();
     var userEmail = this.state.email
     var userPassword = this.state.password
     var adminEmail = this.state.adminEmail
     var adminPassword = this.state.adminPassword
     if(userEmail === adminEmail || userPassword === adminPassword){
        swal("Sucessfully LoggedIn", "", "success");
        history.push('/dashboard');
     }else{
        swal("Invalid Email or Password");
     }
    }
  // close snackbar
  closeSnackbar(){
    this.setState({
      snackbaropen:false
    })
  }
    render(){
        const { classes } = this.props;
        return(
          <DocumentTitle title="Login">
            <div className="signupContainer">
                <div className="signupForm">
                <div className="signupinsidebox">
                <h3 className="signuptxt">Login</h3>
                <form method="POST" className={styles.container} noValidate autoComplete="off" >
                <TextField required label="Email" placeholder="Email" id="signupinput" defaultValue="" className={styles.textField} onChange={this.signupInputHandler}  name="email"/>
                <TextField required type="password" label="Password" placeholder="Password" id="signupinput" defaultValue="" onChange={this.signupInputHandler} className={styles.textField}  name="password"/>
                <Button color="primary" onClick={this.handleSubmit} id="loginbtn" className={styles.button}>Login</Button>
                </form>
                </div>
                </div>
                <p className="signupnote"><b>Note:</b> You need to Login to add todos</p>
                </div>
            </DocumentTitle>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login);