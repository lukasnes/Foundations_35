class Wizard {
    constructor(name,age,armor,power){
        this.class = "Wizard"

        this.name = name
        this.age = age
        this.armor = armor
        this.power = power

        this.health = 100
    }

    lightningBolt(opponent){
        opponent.takeDamage(this.power)
        return `Wizard ${this.name} attacks ${opponent.class} ${opponent.name} for ${this.power - opponent.armor}`
    }

    takeDamage(damage){
        let actualDamage = damage - this.armor
        this.health -= actualDamage
        if(this.health <= 0) {
            console.log(`Wizard ${this.name} has been slain`)
            return
        }
        console.log(`Wizard ${this.name} takes ${actualDamage} damage.`)
        return 
    }
}

class Barbarian {
    constructor(name,age,armor,power){
        this.class = "Barbarian"

        this.name = name
        this.age = age
        this.armor = armor
        this.power = power

        this.health = 100
    } 

    axeSwing(opponent){
        opponent.takeDamage(this.power * 2)
        return `Barbarian ${this.name} attacks ${opponent.class} ${opponent.name} for ${this.power * 2 - opponent.armor}`
    }

    takeDamage(damage){
        let actualDamage = damage - this.armor
        this.health -= actualDamage
        if(this.health <= 0) {
            console.log(`Barbarian ${this.name} has been slain`)
            return
        }
        console.log(`Barbarian ${this.name} takes ${actualDamage} damage.`)
        return
    }
}

let barbarian = new Barbarian("Cletus",4,20,15)

let wizard = new Wizard("Harry",17,10,40)

console.log(barbarian.axeSwing(wizard))
for(let i = 0; i < 3; i++){
    console.log(wizard.lightningBolt(barbarian))
}

for(let i = 0; i < 4; i++){
    console.log(barbarian.axeSwing(wizard))
}

console.log("========================")
console.log(wizard.health)