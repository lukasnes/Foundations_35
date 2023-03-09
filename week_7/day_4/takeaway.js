const canWin = stones => {
    return !(stones % 7 < 2)
    // if(stones < 2){
    //     return false
    // }
    // return canWin(stones - 2) === false || canWin(stones - 3) === false || canWin(stones - 5) === false
}

console.log(canWin(5))
console.log(canWin(6))
console.log(canWin(7))
console.log(canWin(8))
console.log(canWin(9))
console.log(canWin(1000000000000000000000000000000000000000))
//O(n!)
const isPalindrome = str => {
    console.log(str)
    if(str.length <= 1){
        return true
    }
    if(str[0] !== str[str.length - 1]){
        return false
    }
    str = str.split('')
    str.pop()
    str.shift()
    return isPalindrome(str.join(''))
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('squids'))