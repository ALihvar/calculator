import React from 'react';
import {connect} from 'react-redux';

import ClockFaceItem from './clockFaceItem';

import {clickButton, clickResult} from '../actions';

import '../scss/clockFace.scss';

function ClockFace() {

    const numbers = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9', 
        '(', '0', ')',
    ]

    const actionsArr = [
        'C', '+', '-', '*', '/', '='
    ]


    return (
        <div className="clock-face">
            <ClockFaceItem array={numbers} style={"clock-face-numbers"}/>
            <ClockFaceItem array={actionsArr} style={"clock-face-actions"}/>
        </div>
    )
}

const mapDispatchToProps = {
    clickButton,
    clickResult
}

export default connect(null, mapDispatchToProps)(ClockFace)