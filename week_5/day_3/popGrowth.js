const popGrowth = (p0,percent,aug,goal) => {
    let years = 0
    percent /= 100
    while(p0 < goal){
        p0 = p0 + (p0 * percent) + aug
        years++
    }
    return years
}

console.log(popGrowth(1500, 5, 100, 5000))
console.log(popGrowth(1500000, 2.5, 10000, 2000000))