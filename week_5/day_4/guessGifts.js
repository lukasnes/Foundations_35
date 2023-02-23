let wishlist = [
    {
        name: "Toy Car",
        size: "medium",
        clatters: "a bit",
        weight: "medium"
    },
    {
        name: "Card Game",
        size: "small",
        clatters: "no",
        weight: "light"
    },
    {
        name: "Mini Puzzle",
        size: "small",
        clatters: "yes",
        weight: "light"
    }
]

let presents = [
    {
        size: "medium", 
        clatters: "a bit", 
        weight: "medium"
    },
    {
        size: "small", 
        clatters: "yes", 
        weight: "light"
    }
]

const guessGift = (wish, gifts) => {
    let giftNames = []

    for(let i = 0; i < wish.length; i++){
        for(let j = 0; j < gifts.length; j++){
            let { name, size: wishSize, clatters: wishClatters, weight: wishWeight } = wish[i]
            let { size: giftSize, clatters: giftClatters, weight: giftWeight } = gifts[j]

            if(wishSize === giftSize && wishClatters === giftClatters && wishWeight === giftWeight){
                giftNames.push(name)
            }
        }
    }

    return giftNames
}

console.log(guessGift(wishlist,presents))