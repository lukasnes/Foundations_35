let jonAttack = 25
let jamieAttack = 35

// if (jonAttack > jamieAttack){
//     console.log('jons attack is greater than jamies')
// } else if (jamieAttack > jonAttack){
//     console.log('jamies attack is greater than jons')
// } else{
//     console.log('their attacks are the same')
// }

let jonHealth = 100000
let jonDefense = 0

if (jonHealth <= jamieAttack){
    console.log('jon has been slain')
} else {
    jonHealth -= jamieAttack
    console.log(`jons health is now ${jonHealth}`)
 }

 jonDefense += 25

 if (jonHealth <= jamieAttack - jonDefense){
    console.log('jon has been slain')
 } else {
    jonHealth -= jamieAttack - jonDefense
    console.log(`jons health is now ${jonHealth}`)
 }

 if ((jonHealth + 50) >= 100){
    jonHealth = 100
 } else {
    jonHealth += 50
 }
 console.log(`jons health after bandage ${jonHealth}`)

for(let i = 1; i <= 5; i++){
    if (jonHealth <= jamieAttack - jonDefense){
        console.log('jon has been slain')
    } else {
        jonHealth -= jamieAttack - jonDefense
        console.log(`jons current health is ${jonHealth}`)
    }
}

let hits = 0
let bandage = 5
while(jonHealth>0){
    if(jonHealth<50 && bandage > 0){
        jonHealth += 50
        bandage--
        console.log(`jon used a bandage his health is ${jonHealth} he has  ${bandage} remaining bandages`)
    }
    jonHealth -= jamieAttack - jonDefense
    hits++
}

console.log(`jon died in ${hits} hits`)