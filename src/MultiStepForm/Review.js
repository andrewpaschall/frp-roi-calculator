import React from 'react';


const Review = ({ setForm, formData, navigation }) => {
    const {
        hourlyRate,
        sagRepair,
        hardwareAdjust,
        framePatch,
        hmRemoval,
        reinstallTime,
        replacementFrequency
    } = formData;
    const { go } = navigation;

    return (
        <div className="form">
            <h2>Review Your Data</h2>
            
            {/* Hourly Rate */}
            <h4>
                Hourly Rate
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${hourlyRate}`}</span>
                <br />
                <button onClick={() => go("hourlyRate")}>Edit</button>
            </div>

            {/* Sag Repair */}
            <h4>
                Sag Repair Time
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${sagRepair}`}</span>
                <br />
                <button onClick={() => go("sagRepair")}>Edit</button>
            </div>

            {/* Adjust Hardware */}
            <h4>
                Adjust Hardware Time
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${hardwareAdjust}`}</span>
                <br />
                <button onClick={() => go("hardwareAdjust")}>Edit</button>
            </div>

            {/* Patch Frame */}
            <h4>
                Frame Patching Time
                
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${framePatch}`}</span>
                <br />
                <button onClick={() => go("framePatch")}>Edit</button>
            </div>

            {/* Frame Removal */}
            <h4>
                Hollow Metal Frame Removal Time
                
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${hmRemoval}`}</span>
                <br />
                <button onClick={() => go("hmRemoval")}>Edit</button>
            </div>

            {/* Frame Install */}
            <h4>
                Frame Install Time
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${reinstallTime}`}</span>
                <br />
                <button onClick={() => go("reinstallTime")}>Edit</button>
            </div>

            {/* Replacement Frequency */}
            <h4>
                Hourly Rate
                
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${replacementFrequency}`}</span>
                <br />
                <button onClick={() => go("replacementFrequency")}>Edit</button>
            </div>

        </div>
    );
};

export default Review;