import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
    
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