import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';

import { inputWrite, clickResult } from '../actions';
import inputValidator from '../utils/inputValidator';
import resultCulculation from '../utils/resultCalculation';

import '../scss/inputField.scss';


function InputField({result, inputWrite, clickResult}) {

    const input = useRef(null)

    useEffect(() => {
        input.current.focus()
    }, [])

    const handlerInput = (e) => {
        const target = e.target;
        return inputValidator({result, target, inputWrite});
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            const numbers = resultCulculation(result)
            clickResult(numbers[0]) 
        }
    }

    return (
        <input className="input-field" ref={input} type="text" value={result} onKeyDown={(e) => onKeyDown(e)} onChange={(e) => handlerInput(e)}>
            
        </input>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state
    }
}

const mapDispatchToProps = {
    inputWrite,
    clickResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);