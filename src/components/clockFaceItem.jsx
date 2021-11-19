import React from "react";
import {connect} from 'react-redux';

import { clickButton, clickResult } from '../actions';

import inputValidator from '../utils/inputValidator';
import resultCulculation from '../utils/resultCalculation';

function ClockFaceItem({array, style, clickButton, clickResult}) {

    const clickItem = (e) => {
        if (e.target.innerText === '=') {
            const numbers = resultCulculation(document.querySelector('.input-field').value)
            clickResult(numbers[0]) 
        } else if (e.target.innerText === 'C') {
            clickResult('0')
        } else {
            clickButton(e.target.innerText.toString())
        }
    }

    return (
        <ul className={style}>
            {array.map(item => {
                if (item === '(' || item === ')') {
                    return <li key={item} className="clock-face__item clock-face__item_transparency"></li>
                }
                return <li key={item} value={item} onClick={(e) => clickItem(e)} className="clock-face__item">{item}</li>
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state
    }
}

const mapDispatchToProps = {
    clickButton,
    clickResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockFaceItem)