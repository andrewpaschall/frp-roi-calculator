import React from 'react';

import ItemForm from './ItemForm';

const FramePatch = ({ setForm, formData, navigation }) => {
    const framePatch = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm name="framePatch" data="null" change={setForm} value={framePatch}>
                <h2>How much time do you spend repairing and patching door frames each year?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={previous}>Previous</button>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default FramePatch;