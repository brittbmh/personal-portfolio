import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTable extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                {JSON.stringify(this.props.projects)}
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    projects: reduxStore.projects,
});

export default connect(mapReduxStoreToProps)(AdminTable);