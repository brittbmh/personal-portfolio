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
        this.props.dispatch({type: 'ADD_PROJECT', payload: this.state})
    }
    
    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.sendProject}>
                    <input placeholder="Project Name" onChange={this.addName}/>
                    <input placeholder="Website URL (optional)"/>
                    <input placeholder="GitHub URL" />
                    <input placeholder="Description" />
                    <DateInput setDate={this.handleDateChange}/>
                    <Dropdown setTag={this.handleSetTag}/>
                    <button type="submit">Submit</button>
                </form>
                <br />
            </div>
        )
    }
}

export default connect()(AdminForm);