import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
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

const CurrencyInput = (props) => {
    const currencyMask = createNumberMask(defaultMaskOptions);
    
    return (
        <MaskedInput
            mask={currencyMask}
            id = 'hourly_rate'
            onChange = {props.change}
            />

    )
    
}

export default CurrencyInput;