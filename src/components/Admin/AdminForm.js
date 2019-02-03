import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import DateInput from './DateInput.js';
import { connect } from 'react-redux';

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
        return (
            <div>
                <br />
                <form id="projectForm" onSubmit={this.sendProject}>
                    <input placeholder="Project Name" required onChange={this.addInput('name')} />
                    <input placeholder="Website URL (optional)" onChange={this.addInput('website')} />
                    <input placeholder="GitHub URL" required onChange={this.addInput('github')} />
                    <input placeholder="Description" required onChange={this.addInput('desc')} />
                    <DateInput setDate={this.handleDateChange} />
                    <Dropdown required setTag={this.handleSetTag} />
                    <button type="submit">Submit</button>
                </form>
                <br />
            </div>
        )
    }
}

export default connect()(AdminForm);