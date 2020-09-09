import React from 'react';

import ItemForm from './ItemForm';

const ReplacementFrequency = ({ setForm, formData, navigation }) => {
    const replacementFrequency = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm name="replacementFrequency" data="null" change={setForm} value={replacementFrequency}>
                <h2>How often do you replace a hollow metal door?</h2>
                <h3>Enter your answer in years on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={previous}>Previous</button>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default ReplacementFrequency;