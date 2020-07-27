import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
    prefix: '',
    suffix: '',
    includeThousandsSeparator: false,
    allowDecimal: false,
    decimalSymbol: '.',
    decimalLimit: 2, //how many digits allowed after the decimal
    integerLimit: 5, //limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
}

const currencyMaskOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: false,
    allowDecimal: false,
    decimalSymbol: '.',
    decimalLimit: 2, //how many digits allowed after the decimal
    integerLimit: 5, //limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
}

// function Slide(props) {
//     let dataType = props.data;
//     const defaultMask = createNumberMask(defaultMaskOptions);
//     const currencyMask = createNumberMask(currencyMaskOptions);

//     if (dataType === 'Currency') {
//         return <MaskedInput
//         mask={currencyMask}
//         id = {props.id}
//         onChange = {props.change}
//         />
//     } else {
//         return <MaskedInput
//                 mask={defaultMask}
//                 id = {props.id}
//                 onChange = {props.change}
//                 />
        
//     }
// }

const Slide = (props) => {
    let userInputData = props.data;
    const dataType = 'Currency';
    const defaultMask = createNumberMask(defaultMaskOptions);
    const currencyMask = createNumberMask(currencyMaskOptions);
    
    if (userInputData === dataType) {
            return(
                <div className="slide">
                    <div className="cell">
                        {props.children}
                        <MaskedInput
                            mask={currencyMask}
                            id = {props.id}
                            onChange = {props.change}
                            />
                    </div>
                </div>
            )
    } else {
        return(
            <div className="slide">
                    {props.children}
                    <MaskedInput
                        mask={defaultMask}
                        id = {props.id}
                        onChange = {props.change}
                        />
            </div>
        )
    }
};

export default Slide;