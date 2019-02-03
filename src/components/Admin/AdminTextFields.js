import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class AdminTextFields extends Component {
    // create form to add new project to database

    //state to hold input for new project 
    constructor() {
        super();
        this.state = {
            name: '',
            desc: '',
            website: '',
            github: '',
        }
    }

    // function to add input fields to state
    

    // form to accept info for new project to add to database
    render() {
        const { classes } = this.props;

        return (
            <div>
                    <TextField
                        id="project-name"
                        label="Project Name"
                        className={classes.textField}
                        margin="normal"
                        placeholder="Name" required onChange={this.props.addInput('name')} />

                    <TextField id="project-website"
                        label="Project Website"
                        className={classes.textField}
                        margin="normal"
                        placeholder="Website URL (optional)" onChange={this.props.addInput('website')} />

                    <TextField id="project-github"
                        label="Github Repository"
                        className={classes.textField}
                        margin="normal"
                        placeholder="GitHub URL" required onChange={this.props.addInput('github')} />

                    <TextField
                        id="project-desc"
                        label="Project Description"
                        className={classes.textField}
                        margin="normal" placeholder="Description" required onChange={this.props.addInput('desc')} />
            </div>
        )
    }
}

export default withStyles(styles)(connect()(AdminTextFields));