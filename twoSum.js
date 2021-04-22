var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

let test1 = twoSum([2,7,11,15], 9)
console.log(test1) // expect [0, 1]

let test2 = twoSum([2,3,4], 6)
console.log(test2) // expect [0, 2]

let test3 = twoSum([1,2,6,8], 8)
console.log(test3) // expect [1, 2]
