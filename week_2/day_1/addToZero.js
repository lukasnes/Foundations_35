let arrayOne = [1, 4, 11, 2, 37, -4]
let arrayTwo = [0, 21, 33, 6, 0, -9]
let arrayThree = [0, 1, 2, 3, 4, 5]

const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let iValue = arr[i]
            let jValue = arr[j]
            if(iValue + jValue === 0){
                return true
            }
        }
    }
    return false
}

console.log(addToZero(arrayOne))
console.log(addToZero(arrayTwo))
console.log(addToZero(arrayThree))


// for(let i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         console.log("The value of i:",i,"The value of j:",j)
//     }
// }