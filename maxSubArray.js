//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    
    let sum = Number.NEGATIVE_INFINITY
    for (let i = 0; i < nums.length; i++) {
        let rangeSum = 0
        for (let j = i; j < nums.length; j++) {
            rangeSum += nums[j]
            if (rangeSum > sum) {
                sum = rangeSum
            }
        }
    }
    
    return sum
    
};

let test1 = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(test1)

let test2 = maxSubArray([1])
console.log(test2)