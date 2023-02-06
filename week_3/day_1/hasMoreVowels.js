const hasMoreVowels = str => {
    str = str.toLowerCase()
    let strArr = str.split('')
    let vowels = ["a","e","i","o","u"]
    
    let filteredVowels = strArr.filter(element => vowels.includes(element))
    
    return strArr.length / 2 < filteredVowels.length
    // let vowelCount = 0

    // for(let i = 0; i < str.length; i++){
    //     if(vowels.includes(str[i])){
    //         vowelCount++
    //     }
    // }
    // for(let letter of str){
    //     if(vowels.includes(letter)){
    //         vowelCount++
    //     }
    // }

    // if(str.length / 2 < vowelCount){
    //     return true
    // } else {
    //     return false
    // }

    // return str.length / 2 < vowelCount
}

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mose'))
console.log(hasMoreVowels('mse'))