import React from 'react';

import ItemForm from './ItemForm';

const HardwareAdjust = ({ setForm, formData, navigation }) => {
    const hardwareAdjust = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm name="hardwareAdjust" data="null" change={setForm} value={hardwareAdjust}>
                <h2>How much time do you spend adjusting door hardware each year?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={previous}>Previous</button>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default HardwareAdjust;