// console.log("Hello".repeat(5))

// console.log(" ".repeat(3) + "*".repeat(3) + " ".repeat(3))

const buildTower = num => {
    let towerArr = []

    for(let i = 0; i < num; i++) {
        let spaces = " ".repeat(num - 1 - i)
        let stars = "*".repeat((i * 2) + 1)

        // towerArr.push(`${spaces}${stars}${spaces}`)
        towerArr.push(spaces + stars + spaces)
    }

    return towerArr
}

console.log(buildTower(10))
console.log(buildTower(6))

module.exports = {
    buildTower
}