import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});


class Dropdown extends Component {
    //component to add dropdown to select tags to new project form on admin page

    // function to send selected tag to AdminForm component
    handleChange = event => {
        this.props.setTag(event.target.value);
    };

    // function to pull tags from redux store to display in dropdown
    buildSelectInput = () => {
        const options = this.props.tags.map((tag, index) => {
            return (<MenuItem key={index}
                value={tag.id}>
                {tag.name}
            </MenuItem>
            )
        })
        return options;
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <FormControl className="{class.formControl}">
                    <Select defaultValue='' required onChange={this.handleChange}
                        inputProps={{
                            name: 'tag',
                            id: 'project-tag',
                        }}>
                        <MenuItem value="" disabled defaultValue>Tag</MenuItem>
                        {this.buildSelectInput()}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    tags: reduxStore.tags
})

export default withStyles(styles)(connect(mapReduxStoreToProps)(Dropdown));