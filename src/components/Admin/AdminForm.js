import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import DateInput from './DateInput.js';
import { connect } from 'react-redux';
//material-ui
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class AdminForm extends Component {
    // create form to add new project to database

    //state to hold input for new project 
    constructor() {
        super();
        this.state = {
            name: '',
            desc: '',
            website: '',
            github: '',
            tag_id: '',
            stateDate: new Date()
        }
    }

    // function to accept tag from Dropdown component and set state
    handleSetTag = (tag) => {
        this.setState({
            tag_id: tag
        })
    }

    // function to accept date from DateInput component and set state
    handleDateChange = (date) => {
        this.setState({
            stateDate: date
        })
    }

    // function to add input fields to state
    addInput = (property) => {
        return e => {
            this.setState({
                [property]: e.target.value
            })
        }
    }

    // function to send state (info from form) to index.js saga
    sendProject = () => {
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
        alert('project added')
    }

    // form to accept info for new project to add to database
    render() {
        const { classes } = this.props;

        return (
            <div>
                <br />
                <form className={classes.root}  id="projectForm" autoComplete="off" onSubmit={this.sendProject}>
                    <TextField 
                        id="project-name"
                        label="Project Name"
                        className={classes.textField}
                        margin="normal"
                        placeholder="Name" required onChange={this.addInput('name')} />
                   
                    <TextField id="project-website"
                        label="Project Website"
                        className={classes.textField}
                        margin="normal"
                        placeholder="Website URL (optional)" onChange={this.addInput('website')} />
                    
                    <TextField id="project-github"
                        label="Github Repository"
                        className={classes.textField}
                        margin="normal"
                        placeholder="GitHub URL" required onChange={this.addInput('github')} />
                    
                    <TextField 
                        id="project-desc"
                        label="Project Description"
                        className={classes.textField}
                        margin="normal" placeholder="Description" required onChange={this.addInput('desc')} />
                    <DateInput setDate={this.handleDateChange} />
                    <Dropdown required setTag={this.handleSetTag} />
                    <Button type="submit">Submit</Button>
                </form>
                <br />
            </div>
        )
    }
}

export default withStyles(styles)(connect()(AdminForm));