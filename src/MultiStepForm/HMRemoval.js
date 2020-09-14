import React from 'react';

import ItemForm from './ItemForm';

class HMRemoval extends React.Component {
    render() {
        if (this.props.currentStep !== 5) {
            return null; 
        }
        return(
            console.log(this.props.currentStep),
            <ItemForm className="form-control" id="hmRemoval" name="hmRemoval" data="null" change={this.props.handleChange}>
                <h2>How long does it take to remove your existing Hollow Metal door and frame?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>
        )
    }
}

export default HMRemoval;