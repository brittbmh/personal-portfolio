import React, { Component } from 'react';

class ProjectDetails extends Component {

    render() {
        return (
            <div>
                {JSON.stringify(this.props.project)}
            </div>
        )
    }
}



export default ProjectDetails;