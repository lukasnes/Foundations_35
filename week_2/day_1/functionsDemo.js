let string = "Hello, "
let boolean = true
let number = 42
let zero = 0
let falseStr = ""

console.log(string + number)
console.log("============================")
console.log(number, "Line 7")
console.log(String(number))
console.log(boolean, typeof boolean)
console.log(number, typeof number)
console.log(typeof [3,4,5])
console.log("===========================")

if(zero === 0){
    console.log("Zero is false")
}

if(!zero){
    console.log("Zero is true")
} else {
    console.log("Zero is false")
}

if(falseStr){
    console.log("This string contains", falseStr)
} else {
    console.log("This string is empty")
}

console.log("========================")
console.log(!false)
console.log(Boolean(!zero))
console.log(Boolean(zero))
console.log("========================")

let helloWorld = "Hello, World!"
// helloWorld = helloWorld.toLowerCase()

if(helloWorld.toLowerCase().includes("hello")){
    console.log("Hello, World! contains 'hello'")
} else {
    console.log("Hello, World! does not contain 'hello'")
}

let fruits = ['Apples','Bananas','Cherries']

let abcString = `The ABCs of fruit are ${fruits.join(', ').toLowerCase()}`

let noMoreCherries = abcString.split(',')
//                   ['The ABCs of fruit are apples',' bananas',' cherries']
noMoreCherries.pop()
//['The ABCs of fruit are apples',' bananas']
noMoreCherries = noMoreCherries.join(', and').replace("C", "")
console.log(noMoreCherries)

console.log("==========================")

const madLib = (str,arr) => {
    // if(typeof str != 'string'){
    //     return "You need to enter a string as the first argument"
    // }
    for(let i = 0; i < arr.length; i++){
        let randInt = Math.floor(Math.random() * arr.length)

        str = str.replace("X", arr[randInt])
        if(!str.includes('X')){
            break;
        }
    }
    return str
}

let sampleOne = "The X, X fox jumped over the X, X fence."
//first loop --- The quick, X fox jumped over the X, X fence.
//second loop -- The quick, brown fox jumped over the X, X fence.
let arrayOne = ['quick','brown','tall','black','red','slow','green','stinky','intrepid','silly','nondescript','supercalifragilisticexpialidocious']

let newSentence = madLib(sampleOne,arrayOne)
console.log(newSentence)

console.log("=======================")

const addition = (num1,num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return "You have to enter a valid number"
    }
    return num1 + num2
}

console.log(addition(5,7))
console.log(addition("Lukas",278))
console.log("==============")
console.log(Math.floor(Math.random() * 100))