import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dropdown extends Component {
    //component to add dropdown to select tags to new project form on admin page

    // function to send selected tag to AdminForm component
    handleChange = event => {
        this.props.setTag(event.target.value);
    };

    // function to pull tags from redux store to display in dropdown
    buildSelectInput = () => {
        const options = this.props.tags.map((tag, index) => {
            return (<option key={index}
                value={tag.id}>
                {tag.name}
            </option>
            )
        })
        return options;
    }

    render() {
        return (
            <div>
                    <select defaultValue='' required onChange={this.handleChange}>
                        <option value="" disabled defaultValue>Select a Tag</option>
                        {this.buildSelectInput()}
                    </select>
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    tags: reduxStore.tags
})

export default connect(mapReduxStoreToProps)(Dropdown);