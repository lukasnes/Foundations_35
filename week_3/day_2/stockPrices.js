const best = (arr) => {
     let bestPrice = 0
     let lowest = arr[0]

     for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            console.log("================")
            console.log(`The current value in the loop, ${arr[i]}, is less than our current lowest value, ${lowest}.`)
            lowest = arr[i]
            console.log(`The new lowest value is ${lowest}.`)
            console.log("================")
        }

        let difference = arr[i] - lowest
        console.log("=================")
        console.log(`The profit on the current sale is ${difference}`)
        console.log("=================")
        if(difference > bestPrice){
            console.log("===============")
            console.log(`The current price difference, ${difference}, is higher than our current best sale, ${bestPrice}.`)
            bestPrice = difference
            console.log(`The new highest profit is ${bestPrice}`)
            console.log("===============")
        }
     }

     return bestPrice
}

best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
// 8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
// 2 - buy at $7, sell at $9

best([0, 100])
// 100 - buy at $0, sell at $100