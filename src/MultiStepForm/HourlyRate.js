import React from 'react';
import ItemForm from './ItemForm';

class HourlyRate extends React.Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return(
            console.log(this.props.currentStep),
            <ItemForm className="form-control" id="hourlyRate" name="hourlyRate" data="Currency" change={this.props.handleChange}>
                <h2>What is your hourly cost of labor?</h2>
                <h3>Enter your cost on the line below</h3>
            </ItemForm>
        )
    }
}

export default HourlyRate;