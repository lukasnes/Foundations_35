const balanced = str => {
    let count = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === "("){
            count++
        } else if (str[i] === ")"){
            count--
        }

        if(count < 0){
            return false
        }
    }

    return count === 0
}

console.log(balanced("((((()))"))
console.log(balanced("((((()))))"))
console.log(balanced(")("))

const balancedBrackets = str => {
    let count = {
        "(": 0,
        ")": 0,
        "[": 0,
        "]": 0,
        "{": 0,
        "}": 0
    }

    for(let i = 0; i < str.length; i++) {
        for(let bracket in count){
            if(str[i] === bracket){
                count[bracket]++
            }
        }
    }

    return count["("] === count[")"] && count["["] === count["]"] && count["{"] === count["}"]
}

console.log(balancedBrackets("(()))[[}]]{{{{))))"))
console.log(balancedBrackets("()[]{}"))