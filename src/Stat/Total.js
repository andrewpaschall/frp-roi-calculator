import React from 'react';

const total = (props) => {
    const componentID = props.id;
    const type = props.type;
    const inputTime = Number(props.time);
    const removalTime = Number(props.removalTime);
    const installTime = Number(props.installTime);
    const replacementFrequency = Number(props.frequency);
    const totalReplacementTime = removalTime + installTime;
    const rateInput = props.data.toString();
    const rateOutput = Number(rateInput.substring(1));
    const paintCost = Math.round(rateOutput * 2);
    const paintFrequency = Number(paintCost * 2);
    const purchasePrice = Number(props.purchasePrice);
    const saggingDoor = Number(props.saggingDoor);
    const adjustHardware = Number(props.adjustHardware);
    const frameRepair = Number(props.frameRepair);

    console.log(componentID + ' ////////');
    console.log('type: ' + type);
    console.log('hourlyRate: ' + rateInput);
    console.log('removalTime: ' + removalTime);
    console.log('installTime: ' + installTime);
    console.log('inputTime: ' + inputTime);
    console.log('replacementFrequency: ' + replacementFrequency);
    console.log('totalReplacementTime: ' + totalReplacementTime);
    console.log('paintCost: ' + paintCost);
    console.log('purchasePrice: ' + purchasePrice);
    console.log('saggingDoor: ' + saggingDoor);
    console.log('adjustHardware: ' + adjustHardware)
    console.log('frameRepair: ' + frameRepair);


    //Payoff Over Time Section Use Case -> Door Replaced in 5 years
    if (type === 'payoff' && replacementFrequency > 0 && componentID === 'hm_totalMaintenance'){
        return (
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>${Math.round(
                        //Replacement Cost
                        (((rateOutput * totalReplacementTime) + paintCost + purchasePrice) * replacementFrequency) +
                        //Repainting Cost
                        paintFrequency
                        )
                        }</span>
                    {/* <span>{outputData}</span> */}
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    }
    //Payoff Over Time Section Use Case -> Door not replaced in 5 years
    else if (type === 'payoff' && replacementFrequency === 0 && componentID === 'hm_totalMaintenance') {
        return (
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>${Math.round((paintCost * paintFrequency))}</span>
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    }

    //Payoff Over Time Section Use Case -> Special-Lite
    else if (type === 'payoff' && componentID === 'sl_totalMaintenance') {
        return(
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>$0</span>
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    }
    //Hollow Metal Grand Total Use Case -> Doors Replaced in 5 Years
    else if (type === 'grandTotal' && replacementFrequency > 0 && componentID === "hm_grandTotal") {
        return(
           <div className={"counter-block " + props.color}>
               <div className="counter-display">
                    <span>${Math.round(
                        //***** Initial Investment *****//
                        //Purchase Price
                        purchasePrice +
                        //Field Installation
                        (installTime * rateOutput) +
                        //Painting at Install
                        paintCost +
                        //***** Maintenance *****//
                        //Repair Sagging Doors
                        (saggingDoor * rateOutput) +
                        //Repair/Adjust Hardware
                        (adjustHardware * rateOutput) +
                        //Repair Frames
                        (frameRepair * rateOutput) +
                        //***** Payoff Over Time *****//
                        (((rateOutput * totalReplacementTime) + paintCost
                         + purchasePrice) * replacementFrequency) + paintFrequency
                    )}</span>
               </div>
               <div className="counter-label">
                   <p>{props.children}</p>
               </div>
           </div> 
        )
    }
    //Hollow Metal Grand Total Use Case -> Doors Not Replaced in 5 Years
    else if (type === 'grandTotal' && replacementFrequency > 0 && componentID === "hm_grandTotal"){
        return (
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>${Math.round(
                        //***** Initial Investment *****//
                        //Purchase Price
                        purchasePrice +
                        //Field Installation
                        (installTime * rateOutput) +
                        //Painting at Install
                        paintCost +
                        //***** Maintenance *****//
                        //Repair Sagging Doors
                        (saggingDoor * rateOutput) +
                        //Repair/Adjust Hardware
                        (adjustHardware * rateOutput) +
                        //Repair Frames
                        (frameRepair * rateOutput) +
                        //***** Payoff Over Time *****//
                        (paintCost * paintFrequency)
                    )}</span>
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    }

    //SL Grand Total
    else {
        return (
            <div className={"counter-block " + props.color}>
                <div className="counter-display">
                    <span>${Math.round(
                        //***** Initial Investment *****//
                        //Purchase Price
                        purchasePrice +
                        //Field Installation
                        (installTime * rateOutput) +
                        //***** Maintenance *****//
                        //Repair Sagging Doors
                        (saggingDoor * rateOutput) +
                        //Repair/Adjust Hardware
                        (adjustHardware * rateOutput) +
                        //Repair Frames
                        (frameRepair * rateOutput)
                    )}</span>
                </div>
                <div className="counter-label">
                    <p>{props.children}</p>
                </div>
            </div>
        )
    } 
};

export default total;