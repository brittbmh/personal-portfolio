import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminTable from './AdminTable.js';
import AdminForm from './AdminForm.js';
import './admin.css';


class Admin extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <h1>Admin</h1>
                <h4>Add New Project</h4>
                <AdminForm />
                <h4>Projects</h4>
                <AdminTable />
            </div>
        )
    }
}

export default Admin;