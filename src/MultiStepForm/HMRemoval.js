import React from 'react';

import ItemForm from './ItemForm';

const HMRemoval = ({ setForm, formData, navigation }) => {
    const hmRemoval = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm name="hmRemoval" data="null" change={setForm} value={hmRemoval}>
                <h2>How long does it take to remove your existing Hollow Metal door and frame?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={previous}>Previous</button>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>
    );

}

export default HMRemoval;