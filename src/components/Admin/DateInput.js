import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateInput extends Component {
    //component to create date picker for admin form to add new project

    //set initial date as today's date
    constructor() {
        super();
        this.state = {
            stateDate: new Date()
        }
    }

    // function to update state to selected date and send to AdminForm component
    handleChange = (date) => {
        this.setState({
            stateDate: date
        })
        this.props.setDate(date);
    }

    render() {
        return (
            <div>
                <DatePicker
                    // display date currently in state
                    selected={this.state.stateDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default DateInput;