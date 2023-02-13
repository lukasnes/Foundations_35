const decoder = str => {
    let cypher = parseInt(str[0])
    let alphabet = [
        'a','b','c',
        'd','e','f',
        'g','h','i',
        'j','k','l',
        'm','n','o',
        'p','q','r',
        's','t','u',
        'v','w','x',
        'y','z'
    ]
    let strArr = str.slice(1).toLowerCase().split('')
    
    for(let i = 0; i < strArr.length; i++){
        //Make a catch if we exceed the alphabet
        let index = alphabet.indexOf(strArr[i])
        index += cypher

        if(index > 25){
            index -= 25
        }

        strArr[i] = alphabet[index]
    }

    return strArr.join('')
}
console.log(decoder("7xyzxyzxyzx"))

function ceaserCipher(code){
    let decoder = Number(code[0])
    let solution = ``
    for(let i = 1; i < code.length; i++){
        let newLetterVal = code[i].charCodeAt() + decoder
        // console.log(newLetterVal)
        solution += String.fromCharCode(newLetterVal)
    }
    return solution
}

console.log(String.fromCharCode(111))
console.log(ceaserCipher("2fcjjm"))