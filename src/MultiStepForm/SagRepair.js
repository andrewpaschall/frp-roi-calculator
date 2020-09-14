import React from 'react';

import ItemForm from './ItemForm';

class SagRepair extends React.Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            console.log(this.props.currentStep),
            <ItemForm className="form-control" name="sagRepair" id="sagRepair" data="null" change={this.handleChange}>
                <h2>How much time each year do you spend repairing sagging doors?</h2>
                <h3>Enter your time in hours on the line below</h3>
            </ItemForm>
        );
    }
}

export default SagRepair;