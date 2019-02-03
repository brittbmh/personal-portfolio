import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import { connect } from 'react-redux';

class AdminForm extends Component {
    constructor() {
        super();
        this.state = {
            tag_id: ''
        }
    }

    handleSetTag = (tag) => {
        this.setState({
            tag_id: tag
        })
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <br />
                <form>
                    <input placeholder="Project Name"/>
                    <input placeholder="Website URL (optional)"/>
                    <input placeholder="GitHub URL" />
                    <input placeholder="Description" />
                    {/* <DateInput /> */}
                    <Dropdown setTag={this.handleSetTag}/>
                </form>
                <br />
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default connect()(AdminForm);