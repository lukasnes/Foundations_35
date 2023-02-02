let array = [2,4,5,7,8]

array.forEach((element,index,arr) => {
    console.log(`The element at index ${index} in the array ${arr} is ${element}`)
})

let upscaledArr = array.map((element,index,arr) => {
    return element * index
})

console.log(upscaledArr)
let func = (element,index) => element % index === 0
let filteredArr = upscaledArr.filter((element,index) => element % index === 0)

console.log(filteredArr)

let reduceArr = filteredArr.reduce((acc,curr) => {
    console.log(`The added value is ${acc}`)
    console.log(`The current value in the loop is ${curr}`)
    return acc * curr
},1)
console.log(reduceArr)