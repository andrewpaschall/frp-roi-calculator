import React from 'react';

import ItemForm from './ItemForm';

class ReinstallTime extends React.Component {
    render() {
        if (this.props.currentStep !== 6) {
            return null
        }
        return(
            console.log(this.props.currentStep),
            <ItemForm className="form-control" id="reinstallTime" name="reinstallTime" data="null" change={this.props.handleChange}>
                <h2>How much time does it take your team to reinstall a door and frame?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>
        )
    }
}

export default ReinstallTime;