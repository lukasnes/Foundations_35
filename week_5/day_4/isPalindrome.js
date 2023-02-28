const isPalindrome = str => {
    if(str[0] !== str[str.length - 1]){
        return false
    }
    if(str.length <= 1){
        return true
    }

    str = str.split('')
    str.pop()
    str.shift()
    return isPalindrome(str.join(''))
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('appla'))