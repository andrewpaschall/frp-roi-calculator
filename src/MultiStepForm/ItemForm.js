import React from 'react';

import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

//import Slide from './SlideInput';

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

const ItemForm = ( props ) => {
    let userInputData = props.data;
    const defaultMask = createNumberMask(defaultMaskOptions);
    const currencyMask = createNumberMask(currencyMaskOptions);

    return(
        <div className="slide">
            <div className="cell">
                {userInputData === "Currency" ? (
                    <>
                        {props.children}
                        <MaskedInput mask={currencyMask} id={props.id} className={props.className} onChange={props.change} />
                    </>
                ) : (
                    <>
                        <MaskedInput mask={defaultMask} id={props.id} className={props.className} onChange={props.change} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemForm;