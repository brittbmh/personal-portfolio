import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import DateInput from './DateInput.js';
import { connect } from 'react-redux';

class AdminForm extends Component {
    constructor() {
        super();
        this.state = {
            tag_id: '',
            stateDate: new Date()
        }
    }

    handleSetTag = (tag) => {
        this.setState({
            tag_id: tag
        })
    }

    handleDateChange = (date) => {
        console.log('its happening');

        this.setState({
            stateDate: date
        })
    }

    sendProject = () => {
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
    }

    addInput = (property) => {
        return e => {
            this.setState({
            [property]: e.target.value
        })}
    }

    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.sendProject}>
                    <input placeholder="Project Name" onChange={this.addInput('name')} />
                    <input placeholder="Website URL (optional)" onChange={this.addInput('website')} />
                    <input placeholder="GitHub URL" onChange={this.addInput('github')} />
                    <input placeholder="Description" onChange={this.addInput('desc')} />
                    <DateInput setDate={this.handleDateChange} />
                    <Dropdown setTag={this.handleSetTag} />
                    <button type="submit">Submit</button>
                </form>
                <br />
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default connect()(AdminForm);