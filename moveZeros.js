// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let currentNum = nums[i]
        if (currentNum === 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums;
};

let test1 = moveZeroes([0,1,0,3,12])
console.log(test1)

let test2 = moveZeroes([0,1])
console.log(test2)

let test3 = moveZeroes([0])
console.log(test3)