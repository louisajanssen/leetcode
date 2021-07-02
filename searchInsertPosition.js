// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    
    if (target > nums[nums.length -1]) {
        return nums.length
    }
    
    if (target < nums[0]) {
        return 0
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        } else if (target > nums[i] && target < nums[i+1]) {
            return i+1
        }
    }
};

let test1 = searchInsert([1,3,5,6], 5)
console.log(test1)

let test2 = searchInsert([1,3,5,6], 0)
console.log(test2)

let test3 = searchInsert([1,3,5,6], 7)
console.log(test3)
