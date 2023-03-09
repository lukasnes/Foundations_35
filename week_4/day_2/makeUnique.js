const makeUnique = str => {
    let newStr = ''                      //O(1)
    for(let i = 0; i < str.length; i++){ //O(n)
        if(!newStr.includes(str[i])){    //O(1)
            newStr += str[i]             //O(1)
        }
    }

    return newStr
}
//O(1 + n(1(1)))
//O(n)
//O(n)


console.log(makeUnique('iwanttoclimbamountain'))
console.log(makeUnique('helloworld'))

const uniqueSet = str => [...new Set(str)].join('')

console.log(uniqueSet("helloworld"))

let apple = "Apple"

let fruitsObj = {
    apple
}

console.log(fruitsObj)