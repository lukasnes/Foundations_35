const createLegion = size => {
    if(size >= 4000){
        return `Your number is too large for our primitive numbering system`
    }

    let numerals = {
        1: ["I","V"],
        2: ["X","L"],
        3: ["C","D"],
        4: ["M",null],
        5: [null,null]
    }

    let sizeArr = String(size).split('')
    let legion = ''
    // ['3','2','4','5']

    while(sizeArr.length > 0){
        let currentNumber = +sizeArr[0]
        let currentPosition = sizeArr.length

        let ones = numerals[currentPosition][0]
        let fives = numerals[currentPosition][1]
        let tens = numerals[currentPosition + 1][0]

        if(currentNumber === 9){
            legion += ones
            legion += tens
        } else if (currentNumber < 9 && currentNumber >= 5){
            legion += fives
            legion += ones.repeat(currentNumber - 5)
        } else if (currentNumber === 4){
            legion += ones
            legion += fives
        } else if (currentNumber < 4){
            legion += ones.repeat(currentNumber)
        }

        sizeArr.shift()
    }

    return legion
}

console.log(createLegion(3949))