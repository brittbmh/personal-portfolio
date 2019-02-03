import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class AdminTableItems extends Component {
    //function to iterate projects to display in table on admin page

    // map to projects array to create table to display projects list on admin page
    deleteProject = () => {
        this.props.dispatch({ type: "DELETE_PROJECT", payload: this.props.project.id })
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.project.name}</TableCell>
                <TableCell><button onClick={this.deleteProject}>Delete</button></TableCell>
            </TableRow>
        )
    }
}

export default connect()(AdminTableItems);