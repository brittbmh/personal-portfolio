import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dropdown extends Component {
    

    handleChange = event => {
        this.props.setTag(event.target.value);
    };

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