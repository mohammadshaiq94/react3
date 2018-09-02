import React, { Component } from 'react';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: 50,
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
    table: {
        minWidth: 700,
    },
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
});

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoValue: [],
            firstname: '',
            lastname: '',
            email: '',
            salary: '',
            jobdate: '',
            currentIndex: null,
            a:false
        }
        this.classes = { props };
        this.signupInputHandler = this.signupInputHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    signupInputHandler(ev) {
        ev.preventDefault();
        this.setState({
            [ev.target.name]: ev.target.value,
        })
        //  console.log('todovale',this.state.todoValue)
    }

    handleSubmit() {

        var user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            salary: this.state.salary,
            jobdate: this.state.jobdate,

        }

        this.state.todoValue.push(user)
        this.setState({
           firstname:'',
           lastname:'',
           email:'',
           salary:'',
           jobdate:''
        })

        console.log("User array", this.state.todoValue)

    }



  edit(index) {

    const { todoValue , firstname , lastname , email , salary , jobdate } = this.state;

  

        this.setState({firstname : todoValue[index].firstname}),
        this.setState({lastname : todoValue[index].lastname}),
        this.setState({email : todoValue[index].email}),
        this.setState({salary : todoValue[index].salary}),
        this.setState({jobdate : todoValue[index].jobdate})
        this.setState({currentIndex: index})
    
  
  }


    dlt(index) {
        const {todoValue} = this.state;
        todoValue.splice(index, 1);
    
        this.setState({todoValue , currentIndex: null});
      }


      update(){
        const { todoValue } = this.state;
            
            var currentIndex = this.state.currentIndex
            // var todoValue = this.state.todoValue
        //    console.log('My index',todoVal[currentIndex])
           var updateIndex  = todoValue[currentIndex]
           var updateUserData  = {
               firstname:this.state.firstname,
               lastname:this.state.lastname,
               email:this.state.email,
               salary:this.state.salary,
               jobdate:this.state.jobdate,
           }
           var a = todoValue.updateIndex = updateUserData
           console.log(this.state)
        //    updateIndex = updateUserData
        let data = JSON.parse(JSON.stringify(this.state.todoValue))
        data[currentIndex] = updateUserData
        console.log("My data",data)
           this.setState({
              todoValue:data,
              currentIndex:null
           })
           console.log(this.state)
        //    console.log("Inde",updateIndex.firstname)
            // if(this.state.currentIndex == this.state.todoValue){
            //    this.state.

            // }


      }

    render() {
        const { classes } = this.props;

        return (
            <DocumentTitle title="Dashboard">
                <div className="signupContainer">
                    <div>
                        <div>
                            <Typography variant="display1" gutterBottom style={{ textAlign: 'center', marginTop: 10 }}>Welcome Admin</Typography>
                            <div id="tododiv">
                                <TextField required label="First Name" placeholder="First Name" id="signupinput" defaultValue="" value={this.state.firstname} helperText="Example: John" onChange={this.signupInputHandler} className=
                                    {styles.textField} name="firstname" />
                                <TextField required label="Last Name" placeholder="Last Name" id="signupinput" value={this.state.lastname} defaultValue="" onChange={this.signupInputHandler} className=
                                    {styles.textField} name="lastname" />
                                <TextField required label="Email" placeholder="Email" id="signupinput" value={this.state.email} defaultValue="" onChange={this.signupInputHandler} className=
                                    {styles.textField} name="email" />
                                <TextField required label="Salary" placeholder="Salary" id="signupinput" value={this.state.salary} defaultValue="" onChange={this.signupInputHandler} className=
                                    {styles.textField} name="salary" />
                                <TextField
                                    id="jobdate"
                                    label="Job Start Date"
                                    type="date"
                                    name='jobdate'
                                    defaultValue="2017-05-24"
                                    onChange={this.signupInputHandler}
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                        {this.state.currentIndex == null ? 
                                               <Button onClick={this.handleSubmit} color="primary">Add Todos</Button>
                                                : 
                                              
                                                <Button onClick={this.update.bind(this)} color="primary">Update</Button>
                                        
                                    
                                        }
                                       

                                
                               
                              
                            </div>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>First Name</TableCell>
                                            <TableCell numeric>Last name</TableCell>
                                            <TableCell numeric>Email</TableCell>
                                            <TableCell numeric>Salary</TableCell>
                                            <TableCell numeric>Start Job date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.todoValue.map((val,index)=> {
                                            return (
                                                <TableRow key={val.index}>
                                                    <TableCell component="th" scope="row">{val.firstname} </TableCell>
                                                    <TableCell numeric>{val.lastname}</TableCell>
                                                    <TableCell numeric>{val.email}</TableCell>
                                                    <TableCell numeric>{val.salary}</TableCell>
                                                    <TableCell numeric>{val.jobdate}</TableCell>
                                                    <TableCell numeric> <Button onClick={this.dlt.bind(this, index)} color="primary">Remove</Button></TableCell>
                                                    <TableCell numeric> <Button onClick={this.edit.bind(this, index)} color="primary">Update</Button></TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);