import React from 'react';

import ItemForm from './ItemForm';

const HourlyRate = ({ setForm, formData, navigation }) => {
    const hourlyRate = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <ItemForm name="hourlyRate" data="Currency" change={setForm} value={hourlyRate}>
                <h2>What is your hourly cost of labor?</h2>
                <h3>Enter your cost on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>

    );
}

export default HourlyRate;