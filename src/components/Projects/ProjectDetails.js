import React, { Component } from 'react';

class ProjectDetails extends Component {

    render() {
        return (
            <div>
                <div className="boxDiv">
                    <br />
                    {JSON.stringify(this.props.project)}
                    <h4>{this.props.project.name}</h4>
                    <p>{this.props.project.description}</p>
                    <a href={this.props.project.github}>GitHub</a>
                    <a href={this.props.project.website}>Website</a>
                    <p>{this.props.project.tag}</p>
                </div>
            </div>
        )
    }
}



export default ProjectDetails;