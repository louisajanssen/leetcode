// [7, 5, 1, 3, 6, 4]

// [7, 2, 3, 5, 1]

const bestDayStock = (prices) => {

    let max = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j]
            profit -= prices[i]

            if (profit > max) {
                max = profit
            }
        }
    }

    return max
}

const bestDayStockV2 = (prices) => {
    let smallestSeen = undefined
    let largestProfit = 0

    for (let i = 0; i < prices.length - 1; i++) {

        if (smallestSeen === undefined || prices[i] < smallestSeen) {
            smallestSeen = prices[i]
        }
        
        let profit = prices[i + 1] - smallestSeen

        if (profit > largestProfit) {
            largestProfit = profit
        }
    }

    return largestProfit

}

const test1 = bestDayStockV2([7, 5, 1, 3, 6, 4])
console.log(test1, 5)

const test2 = bestDayStockV2([7, 2, 3, 5, 1])
console.log(test2, 3)

const test3 = bestDayStockV2([7, 6, 4, 3, 1])
console.log(test3, 0)