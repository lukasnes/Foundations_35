let person = {
    firstName:'Lukas',
    lastName: 'nessi',
    age: 25
}

// console.log(person['lastName'])

let meal = {
    appetizer: {food:'chips and salsa', size:'large'},
    entree: 'Chicken Enchiladas',
    dessert: 'tres leches cake',
    drink: 'horchata'
}

let {entree} = meal

// console.log(entree)
// console.log(meal.entree)
// console.log(meal.appetizer)

let {appetizer, dessert, drink: bestDrinkEver} = meal

// console.log(appetizer,dessert,bestDrinkEver)

// for(key in meal){
//     console.log(meal[key])
// }

person.job = 'Instructor'
person.isCool = false

delete person.age

person.isCool = true

// console.log(person)

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    speak(times){
        for(let i=0;i<times;i++){
        console.log(`hello my name is ${this.name}`)
    }
    }
}

let roxie = new Dog('roxie','dobberman', 3)

// roxie.speak(5)

class Puppy extends Dog {
    constructor(name,breed,age,trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
}

let dixie = new Puppy('dixie','boxer',1,0)

// dixie.levelUp(5)
// dixie.speak(2)
dixie.breed = 'lab'
dixie['breed'] = 'boxer'
console.log(dixie)

let names = ['jack', 'rocky', 'jeff', 'lukas', 'domino']
let breeds = ['boxer', 'lab', 'poodle', 'doberman', 'retriever']

let dogs = []

let makeDogs = ()=>{
    for(let  i = 0; i < names.length; i++){
        let newDog = new Dog(names[i],breeds[i],3)
        dogs.push(newDog)
    }
}

makeDogs()
// console.log(dogs)

for(let i = 0; i<dogs.length; i++){
    dogs[i].speak(1)
}