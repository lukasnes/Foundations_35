let array = [1, 4, 11, 2, 37, -4,56,34,21]
//           0  1  2   3   4  5  6  7  8
// console.log(array[2])
// console.log(array[12])
// console.log(array.length)
//Figure out a way to loop over our array, and access each value individually
//Create variables to store our minimum and maximum values
let min = array[0]
let max = array[0]

for(let i = 0; i < array.length; i++){
    // console.log(array[i])
    let currentValue = array[i]
    if(currentValue < min){
        console.log(`The current value ${currentValue} is lower than our current minimum ${min}`)
        min = currentValue
    }

    if(currentValue > max){
        console.log(`The current value ${currentValue} is higher than our current maximum ${max}`)
        max = currentValue
    }
}

console.log(`In the array ${array}, the highest value is ${max} and the lowest value is ${min}`)

let demoArray = ["apples","bananas","cherries"]
//                 0x001

let demoCopy = demoArray.slice()
//   0x002
console.log(demoCopy)

demoCopy.pop()

console.log(demoArray)