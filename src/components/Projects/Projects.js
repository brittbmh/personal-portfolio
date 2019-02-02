import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_PROJECTS' });
    }


    render() {
        return (
            <div>
                <h1>Britt Carter's Projects</h1>
                {JSON.stringify(this.props.projects)}
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    projects: reduxStore.projects,
});

export default connect(mapReduxStoreToProps)(Projects);