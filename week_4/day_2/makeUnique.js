const makeUnique = str => {
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(!newStr.includes(str[i])){
            newStr += str[i]
        }
    }

    return newStr
}

console.log(makeUnique('iwanttoclimbamountain'))
console.log(makeUnique('helloworld'))

const uniqueSet = str => [...new Set(str)].join('')

console.log(uniqueSet("helloworld"))

let apple = "Apple"

let fruitsObj = {
    apple
}

console.log(fruitsObj)