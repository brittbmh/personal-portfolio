import React, { Component } from 'react';
import AdminTable from './AdminTable.js';
import AdminForm from './AdminForm.js';


class Admin extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <AdminForm />
                <AdminTable />
            </div>
        )
    }
}

export default Admin;