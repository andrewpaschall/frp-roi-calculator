import React from 'react';


const Review = ({ setForm, formData, navigation }) => {
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email
    } = formData;
    const { go } = navigation;

    return (
        <div className="form">
            <h3>Review Your Data</h3>
            
            {/* Name Section */}
            <h4>
                Name
                <button onClick={() => go("names")}>Edit</button>
            </h4>
            <div>
                {" "}
                First name: {`${firstName}`},
                <br />
                Last name: {`${lastName}`},
            </div>
            <div>Nick name: {`${nickName}`}</div>

            {/* Address Section */}
            <h4>
                Address
                <button onClick={() => go("address")}>Edit</button>
            </h4>
            <div>
                Address: {`${address}`},
                <br />
                City: {`${city}`},
                <br />
                State: {`${state}`},
                <br />
                ZIP: {`${zip}`}
            </div>

            {/* Contact Info */}
            <h4>
                Contact
                <button onClick={() => go("contact")}>Edit</button>
            </h4>
            <div>
                Phone: {`${phone}`},
                <br />
                Email: {`${email}`}
            </div>
            <div>
                <button onClick={() => go("submit")}>Submit</button>
            </div>

        </div>
    );
};

export default Review;