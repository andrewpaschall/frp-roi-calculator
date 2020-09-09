import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import HourlyRate from './HourlyRate';
import FramePatch from './FramePatch';
import HardwareAdjust from './HardwareAdjust';
import HMRemoval from './HMRemoval';
import ReinstallTime from './ReinstallTime';
import SagRepair from './SagRepair';
import ReplacementFrequency from './ReplacementFrequency';

import Review from './Review';

const steps = [
    { id: 'hourlyRate' },
    { id: 'framePatch' },
    { id: 'hardwareAdjust' },
    { id: 'hmRemoval' },
    { id: 'reinstallTime' },
    { id: 'sagRepair' },
    { id: 'replacementFrequency' },
    { id: 'review' }
];

const defaultData = {
    hourlyRate: '$0',
    framePatch: '0',
    hardwareAdjust: '0',
    hmRemoval: '0',
    reinstallTime: '0',
    sagRepair: '0',
    replacementFrequency: '0'
};

const MultiStepForm = ({ images }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    // hourlyRate
    // saggingDoor
    // adjustHardware
    // patchFrame
    // frameRemoval
    // frameInstall
    // replacementFrequency

    switch (id) {
        case 'hourlyRate':
            return <HourlyRate {...props} />;
        case 'sagRepair':
            return <SagRepair {...props} />;
        case 'hardwareAdjust':
            return <HardwareAdjust {...props} />;
        case 'framePatch':
            return <FramePatch {...props} />;
        case 'hmRemoval':
            return <HMRemoval {...props} />;
        case 'reinstallTime':
            return <ReinstallTime {...props} />;
        case 'replacementFrequency':
            return <ReplacementFrequency {...props} />
        case 'review':
            return <Review {...props} />;
        default:
            return null;
    }
};

export default MultiStepForm;

