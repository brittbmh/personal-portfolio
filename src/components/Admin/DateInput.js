import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DateInput extends Component {
    constructor() {
        super();
        this.state = {
            stateDate: new Date()
        }
    }

    
    

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
                    selected={this.state.stateDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default DateInput;