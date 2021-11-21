//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/*
- double loop over the array to find all possible combinations, add those to a new array
- loop over new array and add values in each subarray, find the largest number
*/

var maxSubArray = function(nums) {

    if (nums.length === 1) {
        return nums[0]
    }

    let subArrays = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            // console.log(i, j)
            let currentSubArray = createSubArray(nums, i, j)
            subArrays.push(currentSubArray)
        }
    }

    // console.log(subArrays)
    
    let max = 0

    for (let i = 0; i < subArrays.length; i++) {
        let num = 0
        for (let j = 0; j < subArrays[i].length; j++) {
            num += subArrays[i][j]
        }
        if (num > max) {
            max = num
        }
    }

    return max;
    
};

var createSubArray = function(nums, i, j) {
    let subArray = []

    for (let k = i; k <= j; k++) {
        subArray.push(nums[k])
    }

    return subArray;
}

// let test = createSubArray([5, 4, -1, 7, 8], 0, 2)
// console.log(test)

// let test1 = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
// console.log(test1, 6)

// let test2 = maxSubArray([1])
// console.log(test2, 1)

let test3 = maxSubArray([5, 4, -1, 7, 8])
console.log(test3, 23)