import React from 'react';

const total = (props) => {
    const addition = Number(props.additions);
    const inputTime = Number(props.time);
    // const inputTime = props.time;
    const inputData = props.data;
    const outputData = Number(inputData.substring(1));
    return (
        <div className={"counter-block " + props.color}>
            <div className="counter-display">
                <span>${Math.round((outputData * inputTime) + addition)}</span>
                {/* <span>{outputData}</span> */}
            </div>
            <div className="counter-label">
                <p>{props.children}</p>
            </div>
        </div>
    )
};

export default total;