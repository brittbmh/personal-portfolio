import React, { Component } from 'react';
import ProjectDetails from './ProjectDetails.js';
import { connect } from 'react-redux';

class ProjectList extends Component {

    mapProjects = () => {
        return (
            this.props.projects.map((project, i) => {
                return <ProjectDetails key={i} project={project} />
            })
        )
    }

    render() {
        return (
            <div>
                {this.mapProjects()}
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    projects: reduxStore.projects,
});

export default connect(mapReduxStoreToProps)(ProjectList);