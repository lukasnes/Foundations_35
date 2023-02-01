//Write a function that takes a string as a parameter

const hasUnique = str => {
    //Create a way to check the rest of the string with the current character
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            console.log(`The character at index i is ${str[i]}`)
            console.log(`The character at index j is ${str[j]}`)
            console.log("=====================================")
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

console.log(hasUnique("Moonday"))
console.log(hasUnique("Monday"))

const hasUniqueSet = str => new Set(str).size === str.length
// {
//     let uniqueSet = new Set(str)
//     console.log(uniqueSet)
//     // if(uniqueSet.size === str.length){
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return uniqueSet.size === str.length
// }

console.log("=============================")
console.log(hasUniqueSet("Mooooooooooooooooooo"))
console.log(hasUniqueSet("Bob"))