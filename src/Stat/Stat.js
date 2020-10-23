import React from 'react';

const stat = (props) => {
    const componentID = props.id;
    const addition = Number(props.additions);
    const inputTime = Number(props.time);
    const inputData = props.data.toString();
    const outputData = Number(inputData.substring(1));
    
    return (
        <div className={"counter-block " + props.color}>
            <div className="counter-display">
                {console.log(componentID + ' ////////')}
                {console.log('hourlyRate: ' + inputData)}
                {console.log('inputTime: ' + inputTime)}
                {console.log('addition: ' + addition)}
                <span>${Math.round((outputData * inputTime) + addition)}</span>
                {/* <span>{outputData}</span> */}
            </div>
            <div className="counter-label">
                <p>{props.children}</p>
            </div>
        </div>
    )
};

export default stat;