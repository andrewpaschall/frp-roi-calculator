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
                <button onClick={() => go("hourlyRate")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${hourlyRate}`}</span>,
                <br />
                <span className="review-stat-label">Hourly Rate</span>,
            </div>

            {/* Sag Repair */}
            <h4>
                Hourly Rate
                <button onClick={() => go("sagRepair")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${sagRepair}`}</span>,
                <br />
                <span className="review-stat-label">Sag Repair Time</span>,
            </div>

            {/* Adjust Hardware */}
            <h4>
                Hourly Rate
                <button onClick={() => go("hardwareAdjust")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${hardwareAdjust}`}</span>,
                <br />
                <span className="review-stat-label">Adjust Hardware Time</span>,
            </div>

            {/* Patch Frame */}
            <h4>
                Hourly Rate
                <button onClick={() => go("framePatch")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${framePatch}`}</span>,
                <br />
                <span className="review-stat-label">Frame Patching Time</span>,
            </div>

            {/* Frame Removal */}
            <h4>
                Hourly Rate
                <button onClick={() => go("hmRemoval")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${hmRemoval}`}</span>,
                <br />
                <span className="review-stat-label">Hollow Metal Frame Removal Time</span>,
            </div>

            {/* Frame Install */}
            <h4>
                Hourly Rate
                <button onClick={() => go("reinstallTime")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${reinstallTime}`}</span>,
                <br />
                <span className="review-stat-label">Frame Install Time</span>,
            </div>

            {/* Replacement Frequency */}
            <h4>
                Hourly Rate
                <button onClick={() => go("replacementFrequency")}>Edit</button>
            </h4>
            <div>
                {" "}
                <span className="review-stat">{`${replacementFrequency}`}</span>,
                <br />
                <span className="review-stat-label">Replacement Frequency</span>,
            </div>

        </div>
    );
};

export default Review;