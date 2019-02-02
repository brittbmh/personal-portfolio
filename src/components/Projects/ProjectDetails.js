import React, { Component } from 'react';

class ProjectDetails extends Component {
    imageDisplay = () => {
        if (this.props.project.thumbnail === null) {
            return <img src="/images/bc_pic.jpg" alt="logo" />;
        } else {
            return <img src={this.props.project.thumbnail} alt="screenshot" />;
        }
    }

    render() {
        return (
            <div>
                <div className="boxDiv">
                    <br />
                    {this.imageDisplay()}
                    <span className="projectSpan">
                        <h4>{this.props.project.name}</h4>
                        <p>{this.props.project.description}</p>
                        <a href={this.props.project.github}>GitHub</a>
                        {this.props.project.website &&
                            <a href={this.props.project.website}>Website</a>}
                        <p>primary technology used: {this.props.project.tag_name}</p>
                    </span>
                </div>
            </div>
        )
    }
}



export default ProjectDetails;