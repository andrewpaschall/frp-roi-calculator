import React from 'react';

const ReplacementStat = (props) => {
    const componentID = props.id;
    const addition = Number(props.additions);
    const removalTime = Number(props.removalTime);
    const installTime = Number(props.installTime);
    const replacementFrequency = Number(props.frequency);
    const inputData = props.data.toString();
    const outputData = Number(inputData.substring(1));
    const inputTime = removalTime + installTime;
    const paintTime = outputData * 2;
    
    console.log(componentID + ' ////////');
    console.log('hourlyRate: ' + inputData);
    console.log('removalTime: ' + removalTime);
    console.log('installTime: ' + installTime);
    console.log('inputTime: ' + inputTime);
    console.log('replacementFrequency: ' + replacementFrequency);
    console.log('addition: ' + addition);


    if (replacementFrequency > 0) {
        return (
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>${Math.round(((outputData * inputTime) + paintTime + addition) * replacementFrequency)}</span>
                    {/* <span>{outputData}</span> */}
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>$0</span>
                    {/* <span>{outputData}</span> */}
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    }
};

export default ReplacementStat;