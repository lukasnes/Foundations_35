const createHourString = hourStr => {
    let hoursArr = [
        "twelve",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven"
    ]
    hourStr = parseInt(hourStr)
    if(hourStr >= 12){
        hourStr -= 12
    }
    console.log("The hour we are accessing is " + hourStr)
    console.log(hoursArr[hourStr])

    return hoursArr[hourStr]
}
//O(1) -- time
//O(n) -- space

const createMinuteString = minuteStr => {
    let belowTwenties = [
        "o'clock",
        "oh' one",
        "oh' two",
        "oh' three",
        "oh' four",
        "oh' five",
        "oh' six",
        "oh' seven",
        "oh' eight",
        "oh' nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]
    let tensArr = [
        "twenty",
        "thirty",
        "fourty",
        "fifty"
    ]
    let onesArr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]

    if(parseInt(minuteStr) < 20){
        return belowTwenties[parseInt(minuteStr)]
    } else {
        minuteStr = minuteStr.split('')
        let tens = minuteStr[0]
        tens = parseInt(tens) - 2
        let ones = minuteStr[1]
        ones = parseInt(ones)        
        console.log(`The minute values we are accessing are ${tens} in the tens place, and ${ones} in the ones place.`)
        return tensArr[tens] + onesArr[ones]
    }

    return
}

//O(n) -- time
//O(n) -- space

const timeWords = timeStr => {
    if(timeStr === "0:00"){             //O(1)
        return "midnight"               //O(1)
    } else if (timeStr === "12:00"){    //O(1)
        return "noon"                   //O(1)
    }

    let timeArr = timeStr.split(":")    //O(n)
    console.log(timeArr)
    let hours = createHourString(timeArr[0]) //O(1)
    let minutes = createMinuteString(timeArr[1]) //O(n)

    let halfOfDay = parseInt(timeArr[0]) < 12 ? "am" : "pm" //O(1)

    return hours + " " + minutes + " " + halfOfDay
}

//O(1(1) + 1(1) + n + 1 + n + 1)
//O(1 + 1 + n + 1 + n + 1)
//O(2n + 4)
//O(n) -- time
//O(n) -- space

console.log(timeWords("0:00"))
console.log(timeWords("8:06"))
console.log(timeWords("14:17"))
console.log(timeWords("22:48"))