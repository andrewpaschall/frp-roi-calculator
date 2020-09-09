import React from 'react';

import ItemForm from './ItemForm';

const SagRepair = ({ setForm, formData, navigation}) => {
    const sagRepair = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm name="sagRepair" data="null" change={setForm} value={sagRepair}>
                <h2>How much time each year do you spend repairing sagging doors?</h2>
                <h3>Enter your time in hours on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={previous}>Previous</button>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>
    );

}

export default SagRepair;