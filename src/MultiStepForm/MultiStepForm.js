import React from 'react';
// import { useForm, useStep } from 'react-hooks-helper';


import HourlyRate from './HourlyRate';
import SagRepair from './SagRepair';
import HardwareAdjust from './HardwareAdjust'
import FramePatch from './FramePatch';
import HMRemoval from './HMRemoval';
import ReinstallTime from './ReinstallTime';
import ReplacementFrequency from './ReplacementFrequency';

class MultiStepForm extends React.Component {
    constructor(props) {
        super(props)
        //Set the initial input values
        this.state = {
            currentStep: 1, //Default is Step 1
            // hourlyRate: '$0',
            // repairTime: '0',
            // saggingDoorRepairTime: '0',
            // hardwareAdjustRepairTime: '0',
            // patchFrameRepairTime: '0',
            // frameRemovalTime: '0',
            // frameInstallTime: '0',
            // replacementFrequency: '0'
        }
        //Bind the submission to handleChange()
        // this.handleChange = this.handleChange.bind(this)

        //Bind new functions for next and previous
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    //Test current step with ternary
    //_next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep
        //If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 6? 7: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep
        //If the current step is 2 or 3, the subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep -1
        this.setState({
            currentStep: currentStep
        })
    }

    //The "next" and "previous" button functions
    get previousButton(){
        let currentStep = this.state.currentStep;
        //If the current step is not 1, then render the "previous" button
        if(currentStep !==1){
            return (
                <button className="button" type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        //...else return nothing
        return null;
    }

    get nextButton(){
        let currentStep = this.state.currentStep;
        //If the current step is not 7, then render the "next" button
        if(currentStep <7){
            return (
                <button className="button" type="button" onClick={this._next}>Next</button>
            )
        }
        //Else render Nothing
        return null;
    }

    //Use the submitted data to set the state
    // handleChange(event) {
    //     // const {name, value} = event.target
    //     this.setState({
    //         hourlyRate: event.target.value,
    //         saggingDoorRepairTime: event.target.value,
    //         hardwareAdjustRepairTime: event.target.value,
    //         patchFrameRepairTime: event.target.value,
    //         frameRemovalTime: event.target.value,
    //         frameInstallTime: event.target.value
    //     })
    //     if (this.props.data === 'frequency' && Number(event.target.value) === 2){
    //         this.setState({
    //             replacementFrequency: '2'
    //         })
    //     } else if (this.props.data === 'frequency' && Number(event.target.value) >= 3){
    //         this.setState({
    //             replacementFrequency: '1'
    //         })
    //     } else if (this.props.data === 'frequency' && Number(event.target.value) > 5) {
    //         this.setState({
    //             replacementFrequency: '0'
    //         })
    //     } else {
    //         this.setState({
    //             replacementFrequency: '5'
    //         })
    //     }
    // }

    // //Hourly Rate Handler
    // hourlyRateHandler = (event) => {
    //     this.setState({
    //       hourlyRate: event.target.value
    //     })
    //   }

    //Trigger an alert on form Submission
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your Registration Details: \n
        Email: ${email} \n
        Username: ${username} \n
        Password: ${password}`)
    }

    //Render UI
    render() {
        return(
            <React.Fragment>
                <form onSubmit={this.handleChange}>
                    <HourlyRate
                        currentStep={this.state.currentStep}
                    />
                    <SagRepair
                        currentStep={this.state.currentStep}
                    />
                    <HardwareAdjust
                        currentStep={this.state.currentStep}
                    />
                    <FramePatch
                        currentStep={this.state.currentStep}
                    />
                    <HMRemoval
                        currentStep={this.state.currentStep}
                    />
                    <ReinstallTime
                        currentStep={this.state.currentStep}
                    />
                    <ReplacementFrequency
                        currentStep={this.state.currentStep}
                    />
                    {/* <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    /> */}
                    {/* <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    /> */}
                    {/* <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    /> */}

                    {this.previousButton}
                    {this.nextButton}
                </form>
            </React.Fragment>
        )
    }
}

export default MultiStepForm;

