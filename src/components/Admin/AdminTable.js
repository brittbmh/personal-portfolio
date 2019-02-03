import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTableItems from './AdminTableItems';
//material-ui
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AdminTable extends Component {
    // map to projects array to create table to display projects list on admin page


    //function to map through array of projects and send to AdminTableItems to iterate
    tableDetails = () => {
        return (
            this.props.projects.map((project, i) => {
                return (<AdminTableItems key={i} project={project} />)
            })
        )
    }

    render() {
        return (
            <Paper className="projectTable">
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.tableDetails()}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    projects: reduxStore.projects,
});

export default connect(mapReduxStoreToProps)(AdminTable);