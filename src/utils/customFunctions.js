

export const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
}

export const toNumberString = (num) => { 
    if (Number.isInteger(num)) { 
        return num + ".0"
    } else {
        return num.toString(); 
    }
}