import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTableItems extends Component {
//function to iterate projects to display in table on admin page

    // map to projects array to create table to display projects list on admin page
    deleteProject = () => {
        this.props.dispatch({ type: "DELETE_PROJECT", payload: this.props.project.id })
    }

    render() {
        return (
                <tr>
                    <td>{this.props.project.name}</td>
                    <td><button onClick={this.deleteProject}>Delete</button></td>
                </tr>
        )
    }
}

export default connect()(AdminTableItems);