export default function validInput({result,target, inputWrite}) {
    
console.log(target.value, target)

    if (target.value === '') {
        inputWrite('0')
        return false
    }

    const lastSymbol = target.value[target.value.length - 1];
    const previosLastSymbol = target.value[target.value.length - 2];

    if (result === '0' && !lastSymbol.match(/[0-9]|-/) || result === '0' && !previosLastSymbol.match(/[0-9]|-/)) {
        return false
    }

    if ((result === '0' && lastSymbol === '.') || (result === '0' && previosLastSymbol === '.')) {
        return false
    }

    if (result === '0' && lastSymbol === '0') {
        inputWrite(target.value[0])
        return true
    }

    if (result === '0' && previosLastSymbol === '0'){
        inputWrite(target.value[1])
        return true
    }

    if (!lastSymbol.match(/[0-9]/) && (!lastSymbol.match(/[\+\*/-]/) && !lastSymbol.match(/\./))) {
        return false;
    } 
    else if (typeof previosLastSymbol !== "undefined" && (lastSymbol.match(/[\+\*-/]/) && previosLastSymbol.match(/[\+\*-/]/))) {
        return false
    }

    if (result === '0' && lastSymbol.match(/[\+\*/]/)) {
        return false
    }

    if (result === '0' && typeof +target.value === 'number') {
        inputWrite(target.value.slice(1))
    } else if (target.value === '') {
        inputWrite('0')
    } else if (typeof +target.value === 'number') {
        inputWrite(target.value)
    }

    return true
}