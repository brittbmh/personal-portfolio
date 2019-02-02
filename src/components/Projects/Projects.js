import React, { Component } from 'react';
import ProjectList from './ProjectList.js';
import './projects.css';
import { connect } from 'react-redux';


class Projects extends Component {
    
    render() {
        return (
            <div>
                <h1>Britt Carter</h1>
                <ProjectList />
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    projects: reduxStore.projects,
});

export default connect(mapReduxStoreToProps)(Projects);