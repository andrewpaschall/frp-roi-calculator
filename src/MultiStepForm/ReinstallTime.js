import React from 'react';

import ItemForm from './ItemForm';

const ReinstallTime = ({ setForm, formData, navigation }) => {
    const reinstallTime = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <ItemForm name="reinstallTime" data="null" change={setForm} value={reinstallTime}>
                <h2>How much time does it take your team to reinstall a door and frame?</h2>
                <h3>Enter your answer in hours on the line below</h3>
            </ItemForm>

            <div>
                <button className="button" onClick={previous}>Previous</button>
                <button className="button" onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default ReinstallTime;