import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTable extends Component {
    // map to projects array to create table to display projects list on admin page
    tableDetails = () => {
        return (
            this.props.projects.map((project, i) => {
                return (<tr key={i}>
                    <td>{project.name}</td>
                    <td><button>Delete</button></td>
                </tr>)
            })
        )
    }
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.tableDetails()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    projects: reduxStore.projects,
});

export default connect(mapReduxStoreToProps)(AdminTable);