const createPhoneManually = arr => {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

console.log(createPhoneManually([1,2,3,4,5,6,7,8,9,0]))

const createPhoneString = arr => {
    let phoneStr = '(xxx) xxx-xxxx'
    arr.forEach(num => phoneStr = phoneStr.replace('x',num))

    return phoneStr
}

console.log(createPhoneString([1,2,3,4,5,6,7,8,9,0]))

const variablePhone = (str,arr) => {
    arr.forEach(num => str = str.replace('x',num))
    return str
}

console.log(variablePhone('xx xxxxxxxx', [4,5,7,3,5,1,4,3,4,4]))