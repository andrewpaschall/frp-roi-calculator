import React from 'react';

import ItemForm from './ItemForm';

class ReplacementFrequency extends React.Component {
    render() {
        if(this.props.currentStep !== 7) {
            return null
        }
        return (
            console.log(this.props.currentStep),
            <ItemForm className="form-control" id="replacementFrequency" name="replacementFrequency" data="frequency" change={this.props.handleChange}>
                <h2>How often do you replace a hollow metal door?</h2>
                <h3>Enter your answer in years on the line below</h3>
                <button className="button" type="submit">Calculate</button>
            </ItemForm>//,
            // <button className="button" type="submit">Calculate</button>
        )
    }
}

export default ReplacementFrequency;