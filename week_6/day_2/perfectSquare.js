const nextPerfect = (num) => {
    if(Number.isInteger(Math.sqrt(num))){
        let next = Math.sqrt(num) + 1
        return next**2
    } else {
        return -1
    }
}

console.log(nextPerfect(25))
console.log(nextPerfect(81))
console.log(nextPerfect(3000))