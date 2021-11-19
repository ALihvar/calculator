
const reducer = (state = '0', action) => {
    switch(action.type) {
        case 'clickButton':
            if (state === '0') {
                return action.payload
            }
            return state += action.payload
        case 'clickResult':
            return action.payload
        case 'inputWrite':
            return action.payload
        default: 
            return state
    }

}

export default reducer