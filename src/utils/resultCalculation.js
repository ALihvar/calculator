function multiplication(a,b) {
    return a*b
}

function division(a,b) {
    return a/b
}

function difference(a,b) {
    return a-b
}

function sum(a,b) {
    return a+b
}

export default function resultCulculation(result) {
    const numbers = result.split(/\+|\*|\/|-/)
    let actions = result.match(/[\+|\*|\-|/]/g )
    
    for(let i = 0; i < numbers.length; i +=2) {
        if (typeof +numbers[i] === 'number' && i !== numbers.length-1) {
            const [action, ...rest] = actions
            actions = [...rest]
            numbers.splice(i+1, 0, action)
        }
    }

    for (let i = 0; i < numbers.length-1; i++) {
        
        if (numbers[i] !== '*' && numbers[i] !== '/') {
            continue;
        } 

        let expresionResult;

        if (numbers[i] === '*') {
            expresionResult = multiplication(+numbers[i-1], +numbers[i+1]);
        }

        if (numbers[i] === '/') {
            expresionResult = division(+numbers[i-1], +numbers[i+1])
        }

        numbers.splice(i-1, 3, expresionResult)
        i -= 1
    }

    for (let i = 0; i < numbers.length-1; i++) {
        
        if (numbers[i] !== '+' && numbers[i] !== '-') {
            continue;
        } 

        let expresionResult;

        if (numbers[i] === '+') {
            expresionResult = sum(+numbers[i-1], +numbers[i+1]);
        }

        if (numbers[i] === '-') {
            expresionResult = difference(+numbers[i-1], +numbers[i+1])
        }

        numbers.splice(i-1, 3, expresionResult)
        i -= 1
    }

    return numbers
}