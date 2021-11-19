const clickButton = (res) => {
    return {
        type: 'clickButton',
        payload: res,
    }
}

const clickResult = (res) => {
    return {
        type: 'clickResult',
        payload: res,
    }
}

const inputWrite = (res) => {
    return {
        type: 'inputWrite',
        payload: res
    }
}

export {
    clickButton,
    clickResult,
    inputWrite,
}