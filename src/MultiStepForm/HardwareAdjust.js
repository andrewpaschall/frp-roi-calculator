import React from 'react';

import ItemForm from './ItemForm';

class HardwareAdjust extends React.Component {
    render() {
        if(this.props.currentStep !== 3) {
            return null
        }

        return (
            console.log(this.props.currentStep),
            <ItemForm className="form-control" name="hardwareAdjust" id="hardwareAdjust" data="null" change={this.handleChange}>
                <h2>How much time do you spend adjusting door hardware each year?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>
        )
    }
}

export default HardwareAdjust;