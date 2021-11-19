import React from 'react';

import './scss/index.scss';
import './scss/app.scss';

import InputField from './components/inputField';
import ClockFace from './components/clockFace';

export default function App () {
    return (
        <>
            <div className="calcultor">
                <InputField/>
                <ClockFace/>
            </div>
        </>
    )
}
