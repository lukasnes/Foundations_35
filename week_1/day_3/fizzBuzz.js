// Create a loop that runs 50 times
for(let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if(i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
}

//The code below is a function that receives an array of numbers, and creates a new array with the fizzbuzz rules applied
//It then logs each newly generated value to the terminal

let nums = []                   //Creating an empty array
for(let i = 1; i < 100; i++){
    nums.push(i)                //Filling it with numbers from 1 to 99
}
//Declaring the function with an array as the parameter
                        //Taking the array, and looping over it to create a new array
                                                                                                                //Looping over the new array to log the newly created values
const fizzBuzz = arr => arr.map((num) => [num,'fizz','buzz','fizzbuzz'][(num % 3 === 0) + 2 * (num % 5 === 0)]).forEach(elem => console.log(elem));

//Calling the function to run over the array we generated in lines 17-20
fizzBuzz(nums)