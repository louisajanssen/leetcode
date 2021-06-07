// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function(nums) {
    
    let resultArr = []
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        resultArr.push(sum)
    }
    return resultArr
};

let test1 = runningSum([1, 2, 3, 4])
console.log(test1)

let test2 = runningSum([1, 1, 1, 1, 1])
console.log(test2)

let test3 = runningSum([1])
console.log(test3)