// let arr = [11,13,4,5,14,12,6,8,7,9,10]

// console.log(arr.sort((a,b) => {
//     return a - b
// }))

const tshirt = str => {
    str = str.split('')
    str = str.sort((a,b) => {
        return a.charCodeAt() - b.charCodeAt()
    })
    str = str.reverse()
    return str.join('')
}

console.log(tshirt('lmslmslmsmslmslm'))

const sizeSorter = str => {
    let sizeObj = {
        'xs': 1,
        's': 2,
        'm': 3,
        'l': 4,
        'xl': 5
    }
    str = str.split(',')
    str = str.sort((a,b) => {
        console.log(`Comparing size ${a} with value ${sizeObj[a]} to size ${b} with value ${sizeObj[b]}`)
        return sizeObj[a] - sizeObj[b]
    })
    return str.join(',')
}

console.log(sizeSorter('xs,s,m,xl,l,s,xs,m,l,xs'))
