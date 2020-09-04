import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

//import Slide from './SlideInput';
import Names from './Names';
import Address from './Address';
import Contact from './Contact';

import HourlyRate from './HourlyRate';
import FramePatch from './FramePatch';
import HardwareAdjust from './HardwareAdjust';
import HMRemoval from './HMRemoval';
import ReinstallTime from './ReinstallTime';
import SagRepair from './SagRepair';
import Review from './Review';

const steps = [
    { id: 'names' },
    { id: 'address' },
    { id: 'contact' },
    { id: 'review' }
];

const defaultData = {
    firstName: 'Jane',
    lastName: 'Doe',
    nickName: 'Jan',
    address: '200 South Main St.',
    city: 'Anytown',
    state: 'CA',
    zip: '90505',
    email: 'email@domain.com',
    phone: '+61 4252 454 332'
};

const MultiStepForm = ({ images }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
        case 'names':
            return <Names {...props} />;
        case 'address':
            return <Address {...props} />;
        case 'contact':
            return <Contact {...props} />;
        case 'review':
            return <Review {...props} />;
        default:
            return null;
    }
};

export default MultiStepForm;

