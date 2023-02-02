const isPalindrome = str => {
    for(let i = 0; i < str.length; i++){
        let finalIndex = str.length - 1 - i

        if(str[i] !== str[finalIndex]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("apple"))

const isPalindromeMethods = str => {
    let reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

console.log(isPalindromeMethods("racecar"))
console.log(isPalindromeMethods("apple"))

const isPalindromOneLine = str => str === str.split('').reverse().join('')