const findTheOutlier = arr => {
    let evens = arr.filter(num => num % 2 === 0)
    let odds = arr.filter(num => num % 2 !== 0)

    // if(evens.length > odds.length) {
    //     return odds[0]
    // } else {
    //     return evens[0]
    // }

    return evens.length > odds.length ? odds[0] : evens[0]
}
const evensCallback = num => num % 2 === 0
const oddsCallback = num => num % 2 !== 0

const outlier = arr => arr.filter(evensCallback).length > 1 ? arr.filter(oddsCallback)[0] : arr.filter(evensCallback)[0]

console.log(findTheOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))