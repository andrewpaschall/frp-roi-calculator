import React from 'react';

import ItemForm from './ItemForm';

class FramePatch extends React.Component {
    render() {
        if (this.props.currentStep !== 4) {
            return null
        }
        return (
            console.log(this.props.currentStep),
            <ItemForm className="form-control" id="framePatch" name="framePatch" change={this.props.handleChange} >
                <h2>How much time do you spend repairing and patching door frames each year?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>
        )
    }
}

export default FramePatch;