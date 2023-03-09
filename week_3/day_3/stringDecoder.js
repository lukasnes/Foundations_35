// const decoder = str => {
//     let finalStr = ''

//     for(let i = 0; i < str.length; i++){
//         let currentValue = parseInt(str[i])
//         console.log(currentValue)
//         if(!isNaN(str[i])){
//             console.log("=========")
//             console.log(`i before addition is ${i}`)
//             i += currentValue
//             console.log(`i after addition is ${i}`)
//         } else {
//             finalStr += str[i]
//         }
//     }

//     return finalStr
// }

// console.log(decoder('0h2xce5ngbrdy'))

numberarr = [0,1,2,3,4,5,6,7,8,9]
function decoder(code){
  let decoderchk = code.split('') //O(n)
  let finalStr = ''               //O(1)
    for(let i = 0; i < decoderchk.length; i++){ //O(n)
        if(numberarr.includes(parseInt(decoderchk[i]))){ //O(1)
            i += parseInt(decoderchk[i]) //O(1)
        } else {
            finalStr += decoderchk[i]   //O(1)
        }
    }
    return finalStr
}
//O(n + 1 + n(1(1 + 1)))
//O(n + 1 + n(2))
//O(n + 1 + 2n)
//O(3n + 1)
//O(n)

//O(n)

console.log(decoder('0h2xce5ngbrdy'))