// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.



var kidsWithCandies = function(candies, extraCandies) {
    
    let result = [];
    let maxNum = 0;
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxNum) {
            maxNum = candies[i]
        }
    }
    
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= maxNum) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    
    return result;
};

let test1 = kidsWithCandies([2,3,5,1,3], 3)
console.log(test1)

let test2 = kidsWithCandies([4,2,1,1,2], 1)
console.log(test2)

let test3 = kidsWithCandies([12, 1, 12], 10)
console.log(test3)


