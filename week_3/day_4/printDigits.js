const printDigits = num => {
    while(num){
        let remainder = num % 10
        console.log(remainder)
        num -= remainder
        num /= 10
    }
}

printDigits(357)